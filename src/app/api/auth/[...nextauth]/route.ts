// Simple authentication for MVP - no NextAuth.js dependency
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Auth endpoint' });
}

export async function POST() {
  return NextResponse.json({ message: 'Auth endpoint' });
}