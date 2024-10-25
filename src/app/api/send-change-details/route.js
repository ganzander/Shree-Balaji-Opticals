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
  try {
    const { email } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ Success: false, msg: "Email not registered" });
    }
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Update User Details",
      text: `Hi`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      Success: true,
      msg: "We have sent you a mail to change your details on your registered email address. After changing details please login again.",
    });
  } catch (error) {
    console.error("Error sending mail:", error);
    return Response.json({ Success: false, msg: "An error occurred" });
  }
}
