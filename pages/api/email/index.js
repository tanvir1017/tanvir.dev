import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Email from "pages/emails/email";

const EMAIL_SENDER_HOST =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://tanvirhossain.vercel.app";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "I got your request" });
  } else if (req.method === "POST") {
    const body = req.body;
    try {
      const transporter = nodemailer.createTransport({
        host: EMAIL_SENDER_HOST,
        port: 465,
        service: "gmail",
        secure: true,
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.GOOGLE_APP_PASSWORD,
        },
      });

      const emailHtml = render(
        <Email name={body.name} subject={body.subject} />
      );

      const options = {
        from: process.env.SENDER_EMAIL,
        to: body.email,
        subject: body.subject,
        html: emailHtml,
      };

      const isMailTransported = await transporter.sendMail(options);
      console.log(isMailTransported);
      if (!isMailTransported) {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Please check your email",
          body,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }

  return res
    .status(500)
    .json({ message: "You are requesting to un-available request method" });
}
