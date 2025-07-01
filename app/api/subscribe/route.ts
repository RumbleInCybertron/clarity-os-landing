// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/../lib/supabase'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('emails')
    .insert([{ email }])

  if (error) {
    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}