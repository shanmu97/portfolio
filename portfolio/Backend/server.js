const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config();
console.log();


const app = express();
app.use(cors());
app.use(express.json());

// Configure your SMTP transporter here (example uses Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shanmukhareddyvasa@gmail.com",       // your Gmail address
    pass: process.env.pass   // your Gmail App Password (NOT your Gmail account password)
  },
});

app.post("/send", async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !message) {
    return res.status(400).json({ error: "To and message fields are required." });
  }

  const mailOptions = {
    from: '"Your Name" <your.email@gmail.com>', // sender address
    to,          // receiver address from request
    subject: subject || "No subject",
    text: message,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
