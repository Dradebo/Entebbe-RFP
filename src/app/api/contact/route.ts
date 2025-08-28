import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, sendEmailFallback, EmailData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, type } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData: EmailData = {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      subject,
      message,
      type: type || 'general',
    };

    // Try to send email with Resend first
    let result = await sendEmail(emailData);

    // If Resend fails, try fallback method
    if (!result.success) {
      console.log('Resend failed, trying fallback method...');
      result = await sendEmailFallback(emailData);
    }

    if (result.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message. We will get back to you soon!' 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}