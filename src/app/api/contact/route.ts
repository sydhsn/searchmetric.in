import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ============================================================
// POST /api/contact
// Sends form submissions as email to info@searchmetric.in
//
// Required environment variables (set in .env.local):
//   SMTP_HOST     — e.g. smtp.gmail.com
//   SMTP_PORT     — e.g. 587
//   SMTP_USER     — your sending email address
//   SMTP_PASS     — your app password / SMTP password
//   CONTACT_EMAIL — recipient, defaults to info@searchmetric.in
// ============================================================

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
  source?: string; // "contact-page" | "cta" | "service-page" etc.
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
    .tag { display: inline-block; background: #f3e8ff; color: #7c3aed; padding: 4px 12px; border-radius: 100px; font-size: 12px; font-weight: 600; margin-bottom: 24px; }
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
      <span class="tag">📋 Contact Form Submission</span>
      <table>
        <tr><td>Full Name</td><td><strong>${data.name}</strong></td></tr>
        <tr><td>Email</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><td>Phone</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
        ${data.company ? `<tr><td>Company</td><td>${data.company}</td></tr>` : ""}
        ${data.service ? `<tr><td>Service Interested In</td><td>${data.service}</td></tr>` : ""}
        ${data.budget ? `<tr><td>Budget Range</td><td>${data.budget}</td></tr>` : ""}
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
      Searchmetric | Seemanchal Bihar — searchmetric.in
    </div>
  </div>
</body>
</html>
  `.trim();
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
    .highlight p { margin: 0; font-weight: 500; color: #5b21b6; }
    .steps { background: #f8fafc; border-radius: 12px; padding: 20px 24px; margin: 20px 0; }
    .step { display: flex; align-items: flex-start; gap: 12px; padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #475569; }
    .step:last-child { border-bottom: none; }
    .step-num { background: #7c3aed; color: #fff; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
    .cta { display: inline-block; background: linear-gradient(135deg, #6d28d9, #c026d3); color: #fff !important; padding: 14px 32px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 15px; }
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
      <p>Thank you for reaching out to <strong>Searchmetric</strong>. We're genuinely excited to learn more about your business and explore how we can help you grow.</p>
      <div class="highlight">
        <p>⏱️ We'll get back to you within <strong>24 hours</strong> on working days (Mon–Sat, 9 AM – 7 PM IST).</p>
      </div>
      <p>Here's what happens next:</p>
      <div class="steps">
        <div class="step"><span class="step-num">1</span><span>Our team reviews your enquiry and prepares a tailored response.</span></div>
        <div class="step"><span class="step-num">2</span><span>We reach out via your preferred contact method to schedule a free 30-minute strategy call.</span></div>
        <div class="step"><span class="step-num">3</span><span>On the call, we audit your current digital presence and share a clear action plan — no jargon, just real steps.</span></div>
      </div>
      <p>In the meantime, feel free to check out our <a href="https://searchmetric.in/blog" style="color:#7c3aed">blog</a> to see how we've helped businesses like yours grow online.</p>
      <p>If it's urgent, you can also reach us directly:</p>
      <p>📞 <a href="tel:+919080135567" style="color:#7c3aed">+91 90801 35567</a> &nbsp;|&nbsp; 💬 <a href="https://wa.me/919080135567" style="color:#7c3aed">WhatsApp Us</a></p>
      <br/>
      <p>Looking forward to speaking with you soon!</p>
      <p>Warm regards,<br/><strong>The Searchmetric Team</strong><br/><span style="color:#94a3b8;font-size:13px">Searchmetric | Seemanchal Bihar</span></p>
    </div>
    <div class="footer">
      You're receiving this because you submitted a form on searchmetric.in<br />
      © ${new Date().getFullYear()} Searchmetric. All rights reserved.
    </div>
  </div>
</body>
</html>
  `.trim();
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "info@searchmetric.in";

    // Configure transporter from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Send notification email to Searchmetric
    await transporter.sendMail({
      from: `"Searchmetric Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: body.email,
      subject: `🎯 New Lead: ${body.name} — ${body.service || "General Enquiry"}`,
      html: buildEmailHtml(body),
      text: `New lead from ${body.name} (${body.email}, ${body.phone})\n\nService: ${body.service || "Not specified"}\nBudget: ${body.budget || "Not specified"}\n\nMessage:\n${body.message}`,
    });

    // 2. Send auto-reply to the user
    await transporter.sendMail({
      from: `"Searchmetric" <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: `Thanks ${body.name.split(" ")[0]}! We've received your message — Searchmetric`,
      html: buildAutoReplyHtml(body.name),
      text: `Hi ${body.name.split(" ")[0]},\n\nThank you for contacting Searchmetric! We'll get back to you within 24 hours.\n\nFor urgent queries: +91 90801 35567\n\nWarm regards,\nThe Searchmetric Team`,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent! We'll be in touch within 24 hours.",
    });
  } catch (error: unknown) {
    console.error("[Contact API Error]", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try calling us directly.", detail: message },
      { status: 500 }
    );
  }
}
