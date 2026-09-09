import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // In a production environment, you can forward this payload to Resend, SendGrid, or Discord Webhook.
    console.log('[Contact Submission]', { name, email, subject, message, timestamp: new Date().toISOString() });

    return NextResponse.json(
      { success: true, message: 'Thank you for reaching out! I will respond promptly.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your message.' },
      { status: 500 }
    );
  }
}
