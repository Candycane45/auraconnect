// src/routes/contact.ts
import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";

const router = Router();

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

router.post(
  "/contact",
  async (req: Request, res: Response<ContactResponse>) => {
    const { name, email, phone, message }: ContactFormData = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    try {
      // Create a temporary test account
      const testAccount = await nodemailer.createTestAccount();

      // Create transporter
      const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure, // true for 465, false for other ports
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      // Email content
      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "yourrealemail@example.com", // replace with your real email if needed
        subject: "New Contact Form Message",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${
          phone || "N/A"
        }\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone || "N/A"}</p>
             <p><strong>Message:</strong> ${message}</p>`,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      return res.status(200).json({
        success: true,
        message: "Message received successfully",
      });
    } catch (error: any) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send message" });
    }
  }
);

export default router;
