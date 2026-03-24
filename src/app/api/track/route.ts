import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// 1x1 transparent GIF
const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
);

// ─── Bot Detection ────────────────────────────────────────────────────────────

const BOT_UA_PATTERNS = [
  /bot/i, /crawl/i, /spider/i, /slurp/i, /mediapartners/i,
  /facebookexternalhit/i, /linkedinbot/i, /twitterbot/i,
  /whatsapp/i, /telegrambot/i, /applebot/i, /googlebot/i,
  /bingbot/i, /yandexbot/i, /duckduckbot/i, /baiduspider/i,
  /sogou/i, /exabot/i, /ia_archiver/i, /semrushbot/i,
  /ahrefsbot/i, /mj12bot/i, /dotbot/i, /rogerbot/i,
  /screaming frog/i, /seokicks/i, /sistrix/i,
  // Email security scanners
  /barracuda/i, /mimecast/i, /proofpoint/i, /ironport/i,
  /symantec/i, /messagelabs/i, /sophos/i, /forcepoint/i,
  /trend micro/i, /fireeye/i, /cloudmark/i, /postini/i,
  /microsoft.*security/i, /exchange.*online/i,
  // Microsoft Office / Outlook preview
  /ms-office/i, /msoffice/i, /microsoft office/i,
  /trident\/[0-9]/i,
  // Google Image Proxy
  /googleimageproxy/i, /ggpht\.com/i, /google-read-aloud/i,
  /feedfetcher/i,
  // Email clients with auto-preview
  /thunderbird/i,
  // Preview / prefetch agents
  /preview/i, /prefetch/i, /validator/i, /checker/i,
  /monitor/i, /pingdom/i, /uptimerobot/i, /statuscake/i,
  /newrelic/i, /datadog/i, /site24x7/i,
  // Generic automation
  /python-requests/i, /python-urllib/i, /go-http-client/i,
  /java\//i, /curl\//i, /wget\//i, /libwww/i, /httpunit/i,
  /httpclient/i, /okhttp/i, /axios/i, /node-fetch/i,
  /got\//i, /superagent/i, /request\//i,
];

const BOT_IP_PREFIXES = [
  // Google (search, image proxy, etc.)
  '66.249.', '66.102.', '64.233.', '72.14.',
  '74.125.', '209.85.', '216.58.', '216.239.', '108.177.',
  // Bing / Microsoft
  '157.55.', '207.46.', '40.77.',
  '40.', '20.', '172.186.', '48.209.',
  // Apple
  '17.0.', '17.58.',
  // AWS EC2 / Lambda
  '54.', '52.', '34.', '35.', '44.',
  '13.', '18.', '3.', '15.',
  // GCP
  '104.154.', '104.196.', '130.211.',
  // Cloudflare
  '104.16.', '104.17.', '104.18.', '104.19.', '104.20.', '104.21.',
  '172.64.', '172.65.', '172.66.', '172.67.',
  // SEMrush / OVH crawlers
  '185.191.171.',
  '54.36.', '54.37.',
];

// In-memory IP frequency counter (resets on cold start — good enough for burst detection)
const ipHitCounter = new Map<string, number>();

function scoreBotLikelihood(ip: string, ua: string): number {
  let score = 0;

  // UA pattern match
  for (const pattern of BOT_UA_PATTERNS) {
    if (pattern.test(ua)) {
      score += 80;
      break;
    }
  }

  // IP prefix match
  for (const prefix of BOT_IP_PREFIXES) {
    if (ip.startsWith(prefix)) {
      score += 40;
      break;
    }
  }

  // Empty or very short UA
  if (!ua || ua.length < 10) score += 50;

  // No common browser token
  if (ua && !/mozilla|chrome|safari|firefox|edge|opera/i.test(ua)) score += 20;

  // Burst detection: same IP hitting 5+ times (corporate scanner pattern)
  const hits = (ipHitCounter.get(ip) || 0) + 1;
  ipHitCounter.set(ip, hits);
  if (hits >= 5) score += 60;

  return Math.min(score, 100);
}

function isHumanOpen(ip: string, ua: string): boolean {
  const score = scoreBotLikelihood(ip, ua);
  return score < 25;
}

// ─── Sheet Logging ────────────────────────────────────────────────────────────

async function logToSheet(trackingId: string, event: string, ip: string, ua: string) {
  try {
    const clientId     = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    const sheetId      = process.env.TRACKING_SHEET_ID;

    if (!clientId || !clientSecret || !refreshToken || !sheetId) {
      console.warn('[track] Missing env vars — sheet logging skipped');
      return;
    }

    const auth = new google.auth.OAuth2(clientId, clientSecret);
    auth.setCredentials({ refresh_token: refreshToken });

    const sheets = google.sheets({ version: 'v4', auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:F',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[
          trackingId,
          event,                   // 'open' or 'click'
          new Date().toISOString(),
          ip,
          ua.substring(0, 200),
          ''                      // email column — backfilled by sync_tracking.py
        ]],
      },
    });
    console.log('[track] Logged to sheet:', trackingId, event);
  } catch (err) {
    // Non-blocking — log error but never fail the pixel response
    console.error('[track] Sheet logging error:', err);
  }
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const trackingId = searchParams.get('id')       || '';
  const event      = searchParams.get('event')    || 'open';
  const redirect   = searchParams.get('redirect') || '';
  // NOTE: &email= param intentionally ignored — email in URL is a spam signal

  const ip = request.headers.get('x-forwarded-for') || '';
  const ua = request.headers.get('user-agent')       || '';

  if (trackingId) {
    const human = isHumanOpen(ip, ua);
    const botScore = scoreBotLikelihood(ip, ua);

    // Log to Vercel console (always — for debugging)
    console.log(JSON.stringify({
      event,
      tracking_id: trackingId,
      timestamp:   new Date().toISOString(),
      ip,
      ua,
      bot_score:   botScore,
      logged:      human,
    }));

    // Only write to sheet if classified as HUMAN (bot_score < 25)
    if (human) {
      await logToSheet(trackingId, event, ip, ua);
    } else {
      console.log('[track] Suppressed bot/suspicious open — not logged to sheet. Score:', botScore);
    }
  }

  // If redirect param present → click tracking redirect (allowlist enforced)
  if (redirect) {
    const decoded = decodeURIComponent(redirect);
    const ALLOWED_DOMAINS = [
      'https://tier3labs.co.uk',
      'https://www.tier3labs.co.uk',
      'https://calendly.com/tier3labs',
    ];
    const isSafe = ALLOWED_DOMAINS.some(d => decoded.startsWith(d));
    if (isSafe) {
      return NextResponse.redirect(decoded);
    }
    console.warn('[track] Blocked open redirect attempt:', decoded);
  }

  // Return 1x1 transparent GIF (open tracking)
  return new NextResponse(PIXEL, {
    status: 200,
    headers: {
      'Content-Type':  'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma':        'no-cache',
      'Expires':       '0',
    },
  });
}
