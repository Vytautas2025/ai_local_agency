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

export async function POST(req: NextRequest) {
  try {
    const raw = await req.json();
    const name            = escapeHtml(raw.name            || '');
    const email           = escapeHtml(raw.email           || '');
    const businessWebsite = escapeHtml(raw.businessWebsite || '');
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

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Audit Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nWebsite: ${businessWebsite || "Not provided"}\nMessage: ${message || "Not provided"}`,
      html: `
        <h2>New Visibility Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${businessWebsite || "Not provided"}</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
      `,
    });

    return NextResponse.json({ status: "Success" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
