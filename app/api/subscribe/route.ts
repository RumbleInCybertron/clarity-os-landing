import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.formData();
  const email = data.get('email');
  console.log('New subscription:', email); // Replace with real logic
  return NextResponse.json({ success: true });
}
