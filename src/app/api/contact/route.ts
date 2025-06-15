import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log('API route /api/contact hit');
    console.log('Received data:', { name, email, message });

    console.log('Attempting to send email via Resend');
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified Resend domain if you have one
      to: 'aiautomatrix@outlook.com', // Recipient address
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    console.log('Email sent successfully!');
    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.log('Error caught in API route');
    console.error('Error processing contact form submission:', error);
    // Provide more detail in the error response in development, but be cautious in production
    return NextResponse.json({ message: 'Error submitting form.', error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}