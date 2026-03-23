import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// 1x1 transparent GIF
const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
);

// Log event to Google Sheet
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const trackingId = searchParams.get('id')       || '';
  const event      = searchParams.get('event')    || 'open';
  const redirect   = searchParams.get('redirect') || '';
  // NOTE: &email= param intentionally ignored — email in URL is a spam signal

  const ip = request.headers.get('x-forwarded-for') || '';
  const ua = request.headers.get('user-agent')       || '';

  if (trackingId) {
    // Log to Vercel console
    console.log(JSON.stringify({
      event,
      tracking_id: trackingId,
      timestamp:   new Date().toISOString(),
      ip,
      ua,
    }));

    // AWAITED — ensures sheet write completes before response is returned
    // Previously fire-and-forget which caused writes to be killed by serverless runtime
    await logToSheet(trackingId, event, ip, ua);
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
