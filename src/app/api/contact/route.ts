import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export async function POST(request: Request) {
  try {
    // Get the form data from the request body
    const { name, email, message, subject }: ContactForm = await request.json();

    // Validate and log form data
    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Set up the Nodemailer transporter
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

    // Set up the mail options
    const mailOption = {
      from: process.env.NEXT_PUBLIC_USER,
      to: process.env.NEXT_PUBLIC_USER,
      subject: subject,
      html: `
        <h3>Hello,</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOption);

    // Return a successful response
    return NextResponse.json(
      { message: 'Form Successfully Submitted' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error sending email:', error); // Log the error for debugging
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Failed to Send Email', error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
