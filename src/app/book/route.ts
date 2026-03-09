import { NextResponse } from 'next/server';

const CALENDLY_URL = 'https://calendly.com/tier3labs-info/30min';

export async function GET() {
  return NextResponse.redirect(CALENDLY_URL, { status: 302 });
}
