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

// Utility function to add CORS headers
function setCorsHeaders(res: any) {
  res.headers.set('Access-Control-Allow-Origin', 'https://shivinfotech.pages.dev');
  res.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  res.headers.set('Access-Control-Allow-Credentials', 'true');
}

export async function POST(req: any) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const mailOptions = {
      from: 'urvashi.shivinfotech@gmail.com',
      to: 'mehulvaghela.shivinfotech@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
          </head>
          <body style="font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #0288d1, #e0f7fa); padding: 40px; color: #333; line-height: 1.6;">
            <table role="presentation" style="width: 100%; max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);">
              <tr>
                <td style="background-color: #f4f8fb; padding: 20px; color: #0288d1; text-align: center; border-radius: 16px 16px 0 0;">
                  <img src="https://www.shivinfotech.co/images/services/shiv.png" alt="Company Logo" style="max-width: 150px; display: block; margin: 0 auto;">
                  <p style="font-size: 15px; margin-top: 20px; font-weight: 200; color: #000000;">You've received a new message from your website's contact form.</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 40px; color: black; border-radius: 16px;">
                  <div style="margin-bottom: 20px;">
                    <strong style="color: #0288d1;">Name:</strong> ${name}
                  </div>
                  <div style="margin-bottom: 20px;">
                    <strong style="color: #0288d1;">Email:</strong> ${email}
                  </div>
                  <div style="margin-bottom: 20px;">
                    <strong style="color: #0288d1;">Subject:</strong> ${subject}
                  </div>
                  <div style="margin-bottom: 20px;">
                    <strong style="color: #0288d1;">Message:</strong>
                    <p style="margin-top: 10px;">${message}</p>
                  </div>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission from ${name}

        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}

        Thank you for reaching out to us! We will get back to you soon.
        If you did not fill out this form, please ignore this message.
      `,
    };

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