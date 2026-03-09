import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// 1x1 transparent GIF
const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
);

// Non-blocking: append event to Google Sheet
async function logToSheet(trackingId: string, event: string, ip: string, ua: string, email: string) {
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
          email,                   // recipient email address
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
  const email      = searchParams.get('email')    || '';

  const ip = request.headers.get('x-forwarded-for') || '';
  const ua = request.headers.get('user-agent')       || '';

  if (trackingId) {
    // Log to Vercel console
    console.log(JSON.stringify({
      event,
      tracking_id: trackingId,
      email,
      timestamp:   new Date().toISOString(),
      ip,
      ua,
    }));

    // Log to Google Sheets (non-blocking)
    logToSheet(trackingId, event, ip, ua, email);
  }

  // If redirect param present → click tracking redirect
  if (redirect) {
    return NextResponse.redirect(decodeURIComponent(redirect));
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
