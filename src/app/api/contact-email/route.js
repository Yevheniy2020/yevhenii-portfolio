import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, message, email, website } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH,
      },
    });

    const mailOptionsOwner = {
      from: process.env.EMAIL_USER,
      to: "duder2019@gmail.com",
      subject: `New message from portfolio website`,
      html: `
          <h1>New message from ${name}!</h1>
          <p>Their email: ${email}</p>
          <p>Their email: ${website}</p>
          <p>Message: ${message}</p>
        `,
    };

    try {
      const infoOwner = await transporter.sendMail(mailOptionsOwner);

      return NextResponse.json({
        ok: true,
      });
    } catch (error) {
      console.log("error in sending: ", error);
      return NextResponse.json({
        ok: false,
      });
    }
  } catch (e) {
    console.log("ERROR:", e);
    return NextResponse.json({
      ok: false,
    });
  }
}
