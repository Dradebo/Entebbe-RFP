import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type?: 'contact' | 'membership' | 'booking' | 'general';
}

export async function sendEmail(data: EmailData) {
  try {
    const { name, email, phone, subject, message, type = 'general' } = data;

    // Determine recipient based on type
    let recipient = 'info@entebbeclub.com';
    switch (type) {
      case 'membership':
        recipient = 'membership@entebbeclub.com';
        break;
      case 'booking':
        recipient = 'bookings@entebbeclub.com';
        break;
      default:
        recipient = 'info@entebbeclub.com';
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0ea5e9;">New Inquiry from Entebbe Club Website</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Inquiry Type:</strong> ${type}</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #0369a1; font-size: 14px;">
            This inquiry was submitted through the Entebbe Club website contact form.
            Please respond to the customer within 24 hours.
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 12px; text-align: center;">
          Entebbe Club - Premier Golf Club in Uganda<br>
          Sent from the website contact form
        </p>
      </div>
    `;

    // Send email
    const result = await resend.emails.send({
      from: 'Entebbe Club <noreply@entebbeclub.com>',
      to: [recipient],
      subject: `New ${type} Inquiry: ${subject}`,
      html: emailContent,
      replyTo: email,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

// Fallback email function using nodemailer (for development)
export async function sendEmailFallback(data: EmailData) {
  try {
    const nodemailer = await import('nodemailer');
    
    // Create test account for development
    const testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const { name, email, phone, subject, message, type = 'general' } = data;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'info@entebbeclub.com',
      subject: `New ${type} Inquiry: ${subject}`,
      html: `
        <h2>New Inquiry from Entebbe Club Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, id: info.messageId };
  } catch (error) {
    console.error('Fallback email sending failed:', error);
    return { success: false, error: 'Failed to send email' };
  }
}