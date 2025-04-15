import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: any) {
  try {
    const {
      name,
      email,
      message,
      subject
    } = await request.json();
    console.log(name)
    console.log(process.env.NEXT_PUBLIC_USER)
    console.log(process.env.NEXT_PUBLIC_SMTP)
    console.log(process.env.NEXT_PUBLIC_SERVICE)
    console.log(process.env.NEXT_PUBLIC_PASS)



    const transporter = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_SERVICE,
      host: process.env.NEXT_PUBLIC_SMTP,
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_USER,
        pass: process.env.NEXT_PUBLIC_PASS,
      },
    });

    const mailOption = {
      from: process.env.NEXT_PUBLIC_USER,
      to: process.env.NEXT_PUBLIC_USER,
      subject: `${subject}`,
      html: `
        <h3>Hello,</h3>
        <li> Name: ${name || '-'}</li>
        <li> Email: ${email || '-'}</li>
        <li> Message: ${message || '-'}</li>
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: 'Form Successfully Submitted' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to Send Email' },
      { status: 500 }
    );
  }
}
