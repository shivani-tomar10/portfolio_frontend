const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const db = require("./db");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ALLOWED_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      return res.status(500).send("DB Error");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Form Submission",
      text: `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) return res.status(500).send("Email Error");

      res.send("Form submitted ✅");
    });
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server running 🚀");
});