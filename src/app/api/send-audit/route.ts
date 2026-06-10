import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Sanitize user input to prevent XSS in admin emails
function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Booking link shown in the confirmation email
const CALENDLY_URL = "https://calendly.com/tier3labs-info/30min";
const LOGO_URL =
  "https://www.tier3labs.co.uk/8cb2679b-8ec4-4084-958d-e1f806c655fe_removalai_preview.png";

// Builds the automatic confirmation email sent to the person who submitted the form.
// `name` and `email` are already HTML-escaped by the caller.
function buildAutoReply(name: string, email: string) {
  const text = `Hi ${name},

Thank you for reaching out and taking the first step toward your 7-day free trial! We help local businesses organically reach the top 3 positions on Google Maps.

What Happens Next?
Over the next 24 hours (on working days), our team will conduct a thorough review of your website and Google Business Profile to determine if your setup currently qualifies for our ranking system.

If you qualify: We will initialise your 7-day free trial and prepare your campaign to start generating positive ranking signals immediately.

If your profile needs adjustments: We will outline exactly what is missing and what needs to be fixed before we can begin. For example, we will check to ensure your Google Business Profile has at least 15 reviews, and we will analyse whether your website's H1 and H2 tags are properly organised.

Why the "Top 3" Changes Everything
Securing a spot in the top 3 organic positions on Google Maps is the single highest-leverage move for a local business. Once you are there, the opportunities are massive:

Capture high-intent customers: You will connect directly with local people who are searching specifically for what you offer right now.

Streamline your marketing: You will generate a steady, predictable stream of inbound calls and enquiries every month. This completely eliminates the need to burn budget on separate Google Ads or other costly marketing tactics.

Future-proof your visibility: Our system not only boosts your website rankings but also ensures that emerging AI agents naturally recommend your business first.

Next Step: Secure Your Spot
We want to hit the ground running. To ensure a seamless onboarding once your audit is complete, please book a quick Google Meet with us right now using the link below:

${CALENDLY_URL}

Speak soon,

Tier3Labs | Dominate the Map Pack
+44 7518 701075
info@tier3labs.co.uk
https://Tier3labs.co.uk`;

  const html = `
  <div style="background:#f4f6f8;padding:24px 0;font-family:Arial,Helvetica,sans-serif;color:#1f2937;line-height:1.6;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="padding:32px 32px 8px;">
        <p style="font-size:16px;margin:0 0 16px;">Hi ${name},</p>

        <p style="margin:0 0 16px;">Thank you for reaching out and taking the first step toward your <strong>7-day free trial</strong>! We help local businesses organically reach the top 3 positions on Google Maps.</p>

        <h2 style="font-size:18px;color:#0D1117;margin:28px 0 8px;">What Happens Next?</h2>
        <p style="margin:0 0 16px;">Over the next 24 hours (on working days), our team will conduct a thorough review of your website and Google Business Profile to determine if your setup currently qualifies for our ranking system.</p>
        <p style="margin:0 0 16px;"><strong>If you qualify:</strong> We will initialise your 7-day free trial and prepare your campaign to start generating positive ranking signals immediately.</p>
        <p style="margin:0 0 16px;"><strong>If your profile needs adjustments:</strong> We will outline exactly what is missing and what needs to be fixed before we can begin. For example, we will check to ensure your Google Business Profile has at least 15 reviews, and we will analyse whether your website's H1 and H2 tags are properly organised.</p>

        <h2 style="font-size:18px;color:#0D1117;margin:28px 0 8px;">Why the &ldquo;Top 3&rdquo; Changes Everything</h2>
        <p style="margin:0 0 16px;">Securing a spot in the top 3 organic positions on Google Maps is the single highest-leverage move for a local business. Once you are there, the opportunities are massive:</p>
        <p style="margin:0 0 16px;"><strong>Capture high-intent customers:</strong> You will connect directly with local people who are searching specifically for what you offer right now.</p>
        <p style="margin:0 0 16px;"><strong>Streamline your marketing:</strong> You will generate a steady, predictable stream of inbound calls and enquiries every month. This completely eliminates the need to burn budget on separate Google Ads or other costly marketing tactics.</p>
        <p style="margin:0 0 16px;"><strong>Future-proof your visibility:</strong> Our system not only boosts your website rankings but also ensures that emerging AI agents naturally recommend your business first.</p>

        <h2 style="font-size:18px;color:#0D1117;margin:28px 0 8px;">Next Step: Secure Your Spot</h2>
        <p style="margin:0 0 20px;">We want to hit the ground running. To ensure a seamless onboarding once your audit is complete, please book a quick Google Meet with us right now using the link below:</p>

        <p style="text-align:center;margin:0 0 24px;">
          <a href="${CALENDLY_URL}" style="display:inline-block;background:#00E676;color:#0D1117;text-decoration:none;font-weight:bold;font-size:16px;padding:14px 32px;border-radius:8px;">
            👉 Book Your Onboarding Call
          </a>
        </p>

        <p style="margin:0 0 4px;">Speak soon,</p>
      </div>

      <div style="background:#0D1117;padding:28px 32px;text-align:center;">
        <img src="${LOGO_URL}" alt="Tier3Labs — Dominate the Map Pack" width="220" style="max-width:220px;height:auto;display:inline-block;margin-bottom:12px;" />
        <p style="margin:0 0 6px;color:#8B949E;font-size:13px;">
          <a href="tel:+447518701075" style="color:#00E676;text-decoration:none;">+44 7518 701075</a>
        </p>
        <p style="margin:0;color:#8B949E;font-size:13px;">
          <a href="mailto:info@tier3labs.co.uk" style="color:#00E676;text-decoration:none;">info@tier3labs.co.uk</a>
          &nbsp;&bull;&nbsp;
          <a href="https://www.tier3labs.co.uk" style="color:#00E676;text-decoration:none;">tier3labs.co.uk</a>
        </p>
      </div>
    </div>
  </div>`;

  return {
    from: `Tier3Labs <${process.env.EMAIL_USER}>`,
    to: email,
    replyTo: process.env.EMAIL_USER,
    subject: "Your Google Business Profile Review & 7-Day Free Trial",
    text,
    html,
  };
}

export async function POST(req: NextRequest) {
  try {
    const raw = await req.json();
    const name            = escapeHtml(raw.name            || '');
    const email           = escapeHtml(raw.email           || '');
    const phone           = escapeHtml(raw.phone           || '');
    const businessName    = escapeHtml(raw.businessName    || '');
    const businessWebsite = escapeHtml(raw.businessWebsite || '');
    const googleMapsUrl   = escapeHtml(raw.googleMapsUrl   || '');
    const message         = escapeHtml(raw.message         || '');

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Notify the admin of the new lead
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Audit Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nBusiness: ${businessName || "Not provided"}\nWebsite: ${businessWebsite || "Not provided"}\nGoogle listing: ${googleMapsUrl || "Not provided"}\nMessage: ${message || "Not provided"}`,
      html: `
        <h2>New Visibility Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Business:</strong> ${businessName || "Not provided"}</p>
        <p><strong>Website:</strong> ${businessWebsite || "Not provided"}</p>
        <p><strong>Google listing:</strong> ${
          googleMapsUrl
            ? `<a href="${googleMapsUrl}">${googleMapsUrl}</a>`
            : "Not provided"
        }</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
      `,
    });

    // 2. Send an automatic confirmation email back to the person who submitted.
    //    A failure here must not fail the request — the lead is already captured.
    try {
      await transporter.sendMail(buildAutoReply(name, email));
    } catch (autoReplyError) {
      console.error("Auto-reply send error:", autoReplyError);
    }

    return NextResponse.json({ status: "Success" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
