import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import logdepthbuf_pars_vertexGlsl from "three/src/renderers/shaders/ShaderChunk/logdepthbuf_pars_vertex.glsl";

export const dynamic = "force-dynamic";

export async function POST(request) {
  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const { name, email, phone, website } = body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "duder2019@gmail.com",
        subject: `New message from portfolio website`,
        html: `
          <h1>New message from ${name}!</h1>
          <p>Their email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Website: ${website}</p>
        `,
      };

      const info = await transporter.sendMail(mailOptions);

      return NextResponse.json({
        ok: true,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({
        ok: false,
      });
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }
}
