// pages/api/sendQuote.ts

import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Print environment variables for debugging
  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("GMAIL_PASS:", process.env.GMAIL_PASS);

  if (req.method === "POST") {
    const { name, email, phone, vehicle, services, details } = req.body;

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or App Password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Compose the email
    const mailOptions = {
      from: email,
      to: "samsmobiledetatiling@gmail.com",
      subject: "New Quote Request",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Vehicle: ${vehicle}
        Services: ${services.join(", ")}
        Additional Details: ${details}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Quote request sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send quote request" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
