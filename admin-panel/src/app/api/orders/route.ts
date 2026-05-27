import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import ContactMessage from '@/models/ContactMessage';

export async function GET() {
  try {
    await connectToDatabase();
    const orders = await ContactMessage.find().sort({ createdAt: -1 });
    return NextResponse.json({ orders }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error fetching orders', error: error.message }, { status: 500 });
  }
}
