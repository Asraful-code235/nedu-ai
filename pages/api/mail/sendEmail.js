import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { emailBody, fromEmail } = req.body;

    const transporter = nodemailer.createTransport({
      // host: "smtp.office365.com",
      // port: 587,
      // secure: false,
      service: "Outlook365",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: fromEmail,
      to: "info@nedu.ai",
      subject: "Inquiry",
      text: emailBody,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
