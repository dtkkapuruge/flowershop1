import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import AdminUser from '@/models/AdminUser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretjwtkey';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
    }

    const user = await AdminUser.findOne({ username });

    // Temporary feature to create default admin if none exists
    const adminCount = await AdminUser.countDocuments();
    if (adminCount === 0 && username === 'admin' && password === 'admin123') {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const newAdmin = new AdminUser({ username: 'admin', passwordHash: hashedPassword });
      await newAdmin.save();
      const token = jwt.sign({ id: newAdmin._id, username: newAdmin.username }, JWT_SECRET, { expiresIn: '1d' });
      const response = NextResponse.json({ message: 'Admin created and logged in' }, { status: 200 });
      response.cookies.set('admin_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 60 * 60 * 24, path: '/' });
      return response;
    }

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
      expiresIn: '1d',
    });

    const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
