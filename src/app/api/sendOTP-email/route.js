const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
import connectToDatabase from "@/utils/dbconnect/mongoConnection";
import User from "@/utils/models/User";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export async function POST(req) {
  const { email } = await req.json();
  const OTP = Math.floor(100000 + Math.random() * 900000);
  const UserFound = await User.findOne({ email: email });

  if (UserFound) {
    const updateData = await User.updateOne(
      { email: email },
      { $set: { otp: OTP } },
      { new: true }
    );
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sending EMAIL for OTP Validation",
      text: `OTP: ${OTP}`,
    };
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
    });
    return Response.json({ Success: true, msg: "OTP sent" });
  } else {
    return Response.json({ Success: false, msg: "Email not registered" });
  }
}
