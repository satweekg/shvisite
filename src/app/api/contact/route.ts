import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export const runtime = 'nodejs';


const transporter = nodemailer.createTransport({
  service: 'gmail',  
  auth: {
    user: 'urvashi.shivinfotech@gmail.com',
    pass: 'lkjf uisq tfnm gzlh',
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    const mailOptions = {
      from: 'urvashi.shivinfotech@gmail.com',
      to: 'solankinilesh5627@gmail.com', 
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong><br>${message}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}