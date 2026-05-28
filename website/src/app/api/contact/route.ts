import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import ContactMessage from '@/models/ContactMessage';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const { fullName, email, phoneNumber, flowerType, quantity, message } = body;

    if (!fullName || !email || !phoneNumber || !flowerType || !quantity) {
      return NextResponse.json({ message: 'All required fields must be filled' }, { status: 400 });
    }

    const newMessage = new ContactMessage({
      fullName,
      email,
      phoneNumber,
      flowerType,
      quantity,
      message: message || '',
    });

    await newMessage.save();

    return NextResponse.json({ message: 'Order submitted successfully!' }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
