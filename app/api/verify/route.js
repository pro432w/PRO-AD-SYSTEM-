import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { userId } = await request.json();
    const BOT_TOKEN = process.env.BOT_TOKEN;

    if (!userId || !BOT_TOKEN) {
      return NextResponse.json({ error: 'Invalid Request' }, { status: 400 });
    }

    // Optional: Send a specific verification message from Server to Telegram
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: userId,
        text: 'Server Verification: Ad Watched.',
        disable_notification: true
      })
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
