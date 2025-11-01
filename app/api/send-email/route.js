import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { LANDING_PAGE, ORIGIN, COUNTRY, NAME, PHONE_TEXT, EMAIL, COUNTRY_OF_RESIDENCE, BEDROOMS, DURATION, PURPOSE } = body;

    // Build email content (HTML and plain text)
    const subject = `New Lead from ${LANDING_PAGE}`;
    const text = `
New lead received:
Landing Page: ${LANDING_PAGE}
Name: ${NAME || "-"}
Phone: ${PHONE_TEXT || "-"}
Email: ${EMAIL || "-"}
Origin: ${ORIGIN || "-"}
Country: ${COUNTRY || "-"}
Country of Residence: ${COUNTRY_OF_RESIDENCE || "-"}
bedrooms: ${BEDROOMS || "-"}
Duration: ${DURATION || "-"}
Purpose: ${PURPOSE || "-"}
    `.trim();

    const html = `
      <h2>New Lead Received</h2>
      <table cellpadding="6" cellspacing="0" border="0">
        <tr><td><strong>Landing Page:</strong></td><td>${LANDING_PAGE || "-"}</td></tr>
        <tr><td><strong>Origin:</strong></td><td>${ORIGIN || "-"}</td></tr>
        <tr><td><strong>Name:</strong></td><td>${NAME || "-"}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${PHONE_TEXT || "-"}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${EMAIL || "-"}</td></tr>
         <tr><td><strong>Origin:</strong></td><td>${ORIGIN || "-"}</td></tr>
          <tr><td><strong>Country:</strong></td><td>${COUNTRY || "-"}</td></tr>

          <tr><td><strong>Country of Residence:</strong></td><td>${COUNTRY_OF_RESIDENCE || "-"}</td></tr>
          <tr><td><strong>Bedrooms:</strong></td><td>${BEDROOMS || "-"}</td></tr>
          <tr><td><strong>Duration:</strong></td><td>${DURATION || "-"}</td></tr>
          <tr><td><strong>Purpose:</strong></td><td>${PURPOSE || "-"}</td></tr>
      </table>
    `;

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME || "Website"}" <${process.env.EMAIL_USER}>`,
      to: "shiro.estate.socialmedia@gmail.com",
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true, message: "Email sent" }, { status: 200 });
  } catch (err) {
    console.error("send-email error:", err);
    return NextResponse.json(
      { ok: false, message: "Failed to send email", error: err.message },
      { status: 500 }
    );
  }
}