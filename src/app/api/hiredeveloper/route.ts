import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Node.js runtime
export const runtime = 'nodejs';

// Setup the transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'urvashi.shivinfotech@gmail.com',
    pass: 'lkjf uisq tfnm gzlh', // App-specific password
  },
});

// Utility function to add CORS headers
function setCorsHeaders(res:any) {
  res.headers.set('Access-Control-Allow-Origin', '*'); // Adjust the domain for production
  res.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
}

export async function POST(req:any) {
  try {
    // Parse request body
    const body = await req.json();
    const { name, email, phone, company, technology, duration, message } = body;

    // Configure the email options
    const mailOptions = {
      from: 'urvashi.shivinfotech@gmail.com',
      to: 'mehulvaghela.shivinfotech@gmail.com',
      subject: `New Hire a Developer Form Submission from ${name}`,
      html: `
        <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
          </head>
          <body style="font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #0288d1, #e0f7fa); padding: 40px; color: #333; line-height: 1.6;">
            <table role="presentation" style="width: 100%; max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);">
              <tr>
                <td style="background-color: #f4f8fb; padding: 11px; color: #0288d1; text-align: center; border-radius: 16px 16px 0 0;">
                  <img src="https://www.shivinfotech.co/images/services/shiv.png" alt="Company Logo" style="max-width: 150px; display: block; margin: 0 auto;">
                  <p style="font-size: 15px; margin-top: 20px; font-weight: 200; color: #000000;">You've received a new message from your website's Hire a Developer form.</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 40px; color: black; border-radius: 16px 16px 16px 16px;">
                  <div style="margin-bottom: 20px;"><strong>Name:</strong> ${name}</div>
                  <div style="margin-bottom: 20px;"><strong>Email:</strong> ${email}</div>
                  <div style="margin-bottom: 20px;"><strong>Phone:</strong> ${phone || 'Not provided'}</div>
                  <div style="margin-bottom: 20px;"><strong>Technology:</strong> ${technology}</div>
                  <div style="margin-bottom: 20px;"><strong>Duration:</strong> ${duration}</div>
                  <div style="margin-bottom: 20px;"><strong>Message:</strong><br>${message}</div>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    const response = NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

    // Add CORS headers
    setCorsHeaders(response);

    return response;
  } catch (error) {
    console.error('Failed to send email:', error);

    const response = NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );

    // Add CORS headers
    setCorsHeaders(response);

    return response;
  }
}

// Handle OPTIONS preflight requests
export function OPTIONS() {
  const response = NextResponse.json(null, { status: 204 });
  setCorsHeaders(response);
  return response;
}