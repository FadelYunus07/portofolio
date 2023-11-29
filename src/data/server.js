const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001; // Sesuaikan port sesuai kebutuhan

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, contact, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com", // Ganti dengan email Anda
      pass: "your-email-password", // Ganti dengan kata sandi email Anda
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "fadelyunus07@gmail.com", // Ganti dengan email tujuan Anda
    subject: "New Contact Form Submission",
    html: `<p>Name: ${name}</p><p>Contact: ${contact}</p><p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
