// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/../lib/supabase'

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValid) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  // Check for duplicates
  const { data: existing, error: fetchError } = await supabase
    .from('emails')
    .select('*')
    .eq('email', email)
    .single();

  if (existing) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
  }

  // Insert new email
  const { error } = await supabase
    .from('emails')
    .insert({ email });


  if (error) {
    if (error.code === '23505') {
      // 23505 = unique violation in PostgreSQL
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }

    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Success' });
}