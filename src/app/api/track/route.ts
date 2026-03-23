import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// 1x1 transparent GIF
const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
);

// Non-blocking: append event to Google Sheet
// NOTE: email address is intentionally NOT logged — privacy + anti-spam
async function logToSheet(trackingId: string, event: string, ip: string, ua: string) {
  try {
    const clientId     = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    const sheetId      = process.env.TRACKING_SHEET_ID;

    if (!clientId || !clientSecret || !refreshToken || !sheetId) return;

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
          ''                      // email column intentionally blank
        ]],
      },
    });
  } catch {
    // Non-blocking — never fail the pixel/redirect response
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

    // Log to Google Sheets (non-blocking)
    logToSheet(trackingId, event, ip, ua);
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
    // Reject disallowed redirects — return pixel instead
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
