import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  preferredContact?: string;
  timeline?: string;
  source?: string;
}

function buildEmailHtml(data: ContactPayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #6d28d9, #c026d3); padding: 32px; text-align: center; }
    .header h1 { color: #fff; margin: 0; font-size: 22px; }
    .header p { color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px; }
    .body { padding: 32px; }
    table { width: 100%; border-collapse: collapse; }
    td { padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
    td:first-child { color: #64748b; font-weight: 600; width: 38%; }
    td:last-child { color: #0f172a; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin-top: 20px; font-size: 14px; color: #334155; line-height: 1.7; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 20px 32px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
    .cta { display: inline-block; background: linear-gradient(135deg, #6d28d9, #c026d3); color: #fff !important; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; margin-top: 24px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🎯 New Lead from Website</h1>
      <p>Someone just filled the contact form — respond within 24 hours!</p>
    </div>
    <div class="body">
      <table>
        <tr><td>Full Name</td><td><strong>${data.name}</strong></td></tr>
        <tr><td>Email</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><td>Phone</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
        ${data.company ? `<tr><td>Company</td><td>${data.company}</td></tr>` : ""}
        ${data.service ? `<tr><td>Service</td><td>${data.service}</td></tr>` : ""}
        ${data.budget ? `<tr><td>Budget</td><td>${data.budget}</td></tr>` : ""}
        ${data.preferredContact ? `<tr><td>Preferred Contact</td><td>${data.preferredContact}</td></tr>` : ""}
        ${data.timeline ? `<tr><td>Timeline</td><td>${data.timeline}</td></tr>` : ""}
        ${data.source ? `<tr><td>Source</td><td>${data.source}</td></tr>` : ""}
        <tr><td>Submitted At</td><td>${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td></tr>
      </table>
      <div class="message-box">${data.message}</div>
      <div style="text-align:center">
        <a href="mailto:${data.email}" class="cta">Reply to ${data.name.split(" ")[0]}</a>
      </div>
    </div>
    <div class="footer">
      This email was sent automatically from the Searchmetric website contact form.<br />
      Searchmetric | Mira Road, Mumbai — searchmetric.in
    </div>
  </div>
</body>
</html>`.trim();
}

function buildAutoReplyHtml(name: string): string {
  const firstName = name.split(" ")[0];
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #6d28d9, #c026d3); padding: 40px 32px; text-align: center; }
    .header h1 { color: #fff; margin: 0; font-size: 26px; }
    .header p { color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 15px; }
    .body { padding: 36px 32px; }
    p { color: #334155; font-size: 15px; line-height: 1.75; margin: 0 0 16px; }
    .highlight { background: #f3e8ff; border-left: 4px solid #7c3aed; padding: 16px 20px; border-radius: 0 10px 10px 0; margin: 24px 0; }
    .footer { background: #f8fafc; padding: 20px 32px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Thanks, ${firstName}! 🙌</h1>
      <p>We've received your message and we're on it.</p>
    </div>
    <div class="body">
      <p>Hi ${firstName},</p>
      <p>Thank you for reaching out to <strong>Searchmetric</strong>. We're excited to learn more about your business and explore how we can help you grow.</p>
      <div class="highlight">
        <p style="margin:0">⏱️ We'll get back to you within <strong>24 hours</strong> (Mon–Sat, 9 AM – 7 PM IST).</p>
      </div>
      <p>If it's urgent, reach us directly:</p>
      <p>📞 <a href="tel:+919876543210" style="color:#7c3aed">+91 98765 43210</a> &nbsp;|&nbsp; 💬 <a href="https://wa.me/919876543210" style="color:#7c3aed">WhatsApp Us</a></p>
      <p>Warm regards,<br/><strong>The Searchmetric Team</strong></p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} Searchmetric. Mira Road, Mumbai.
    </div>
  </div>
</body>
</html>`.trim();
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { success: false, error: "Name, email, phone and message are required." },
        { status: 400 }
      );
    }

    // Check env variables are set
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("[Contact API] SMTP_USER or SMTP_PASS not set in .env.local");
      return NextResponse.json(
        { success: false, error: "Email service not configured. Please call us directly." },
        { status: 500 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "hello@searchmetric.in";

    // Gmail SMTP transporter — fixed config
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // MUST be false for port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // fixes SSL issues in dev
      },
    });

    // Verify connection before sending
    await transporter.verify();
    console.log("[Contact API] SMTP connection verified ✓");

    // 1. Send notification to Searchmetric
    await transporter.sendMail({
      from: `"Searchmetric Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: body.email,
      subject: `🎯 New Lead: ${body.name} — ${body.service || "General Enquiry"}`,
      html: buildEmailHtml(body),
      text: `New lead from ${body.name} (${body.email}, ${body.phone})\nService: ${body.service || "Not specified"}\nMessage: ${body.message}`,
    });

    console.log(`[Contact API] Notification sent to ${recipientEmail} ✓`);

    // 2. Auto-reply to user
    await transporter.sendMail({
      from: `"Searchmetric" <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: `Thanks ${body.name.split(" ")[0]}! We received your message — Searchmetric`,
      html: buildAutoReplyHtml(body.name),
    });

    console.log(`[Contact API] Auto-reply sent to ${body.email} ✓`);

    return NextResponse.json({
      success: true,
      message: "Message sent! We'll be in touch within 24 hours.",
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[Contact API Error]", message);

    // Give specific error hints
    let userMessage = "Failed to send message. Please call us directly.";
    if (message.includes("Invalid login") || message.includes("535")) {
      userMessage = "Email auth failed — check SMTP_USER and SMTP_PASS in .env.local";
    } else if (message.includes("ECONNREFUSED") || message.includes("ETIMEDOUT")) {
      userMessage = "Cannot connect to email server — check SMTP_HOST and SMTP_PORT";
    }

    return NextResponse.json(
      { success: false, error: userMessage, detail: message },
      { status: 500 }
    );
  }
}
