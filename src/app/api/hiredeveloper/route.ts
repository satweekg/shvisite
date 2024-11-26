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

export async function POST(req:any) {
  try {
    const body = await req.json();
    const { name, email, phone, company,technology,duration, message } = body;

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
                  <div style="margin-bottom: 20px; display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 24px; height: 24px; margin-right: 10px;">
                      <path d="M10 11a4 4 0 10-8 0 4 4 0 008 0z" />
                      <path fill-rule="evenodd" d="M5 14a7 7 0 1114 0H5z" clip-rule="evenodd" />
                    </svg>
                    <span style="font-size: 18px; font-weight: bold; color: #0288d1;">Name:</span>
                    <span style="font-size: 18px; color: #000000; margin-left: 15px;">${name}</span>
                  </div>
                  <div style="margin-bottom: 20px; display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 24px; height: 24px; margin-right: 10px;">
                      <path d="M2 5.5a1 1 0 011-1h16a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9z" />
                    </svg>
                    <span style="font-size: 18px; font-weight: bold; color: #0288d1;">Email:</span>
                    <span style="font-size: 18px; color: #000000; margin-left: 15px;">${email}</span>
                  </div>
                  <div style="margin-bottom: 20px; display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 24px; height: 24px; margin-right: 10px;">
                      <path d="M2.4 7a1 1 0 111.6-1.2L8 8.6 12 5.2a1 1 0 011.6 1.2l-4 5a1 1 0 01-1.6 0l-4-5z" />
                    </svg>
                    <span style="font-size: 18px; font-weight: bold; color: #0288d1;">Phone:</span>
                    <span style="font-size: 18px; color: #000000; margin-left: 15px;">${phone || 'Not provided'}</span>
                  </div>
                  <div style="margin-bottom: 20px; display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 24px; height: 24px; margin-right: 10px;">
                      <path d="M5.5 4.5a3 3 0 116 0 3 3 0 01-6 0z" />
                      <path d="M3 8a7 7 0 1114 0H3z" />
                    </svg>
                    <span style="font-size: 18px; font-weight: bold; color: #0288d1;">Technology:</span>
                    <span style="font-size: 18px; color: #000000; margin-left: 15px;">${technology}</span>
                  </div>
                  <div style="margin-bottom: 20px; display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 24px; height: 24px; margin-right: 10px;">
                      <path d="M5.5 4.5a3 3 0 116 0 3 3 0 01-6 0z" />
                      <path d="M3 8a7 7 0 1114 0H3z" />
                    </svg>
                    <span style="font-size: 18px; font-weight: bold; color: #0288d1;">Duration:</span>
                    <span style="font-size: 18px; color: #000000; margin-left: 15px;">${duration}</span>
                  </div>
                  <div style="margin-bottom: 40px;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 24px; height: 24px; margin-right: 10px;">
                      <path d="M5.5 4.5a3 3 0 116 0 3 3 0 01-6 0z" />
                      <path d="M3 8a7 7 0 1114 0H3z" />
                    </svg>
                    <span style="font-size: 18px; font-weight: bold; color: #0288d1;">Message:</span>
                    <p style="font-size: 18px; color: #000000; margin-top: 10px; margin-left: 0px; line-height: 1.5; margin-bottom: 0;">${message}</p>
                  </div>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
      text: `
        New Hire a Developer Form Submission from ${name}
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Technolgy: ${technology}
        Duration: ${duration}
        Message:
        ${message}
        
        Thank you for reaching out to us! We will get back to you soon.
        If you did not fill out this form, please ignore this message.
        
        Visit Our Contact Page: https://www.shivinfotech.co/contactUs
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}