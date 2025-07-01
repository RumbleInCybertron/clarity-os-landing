import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bqjopxnumlhrocycmxcm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxam9weG51bWxocm9jeWNteGNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNTcxOTksImV4cCI6MjA2NjkzMzE5OX0.fev6iqQHY1dyTlistxR9_KvQ4D8wO4Bf6z_sLBxcJ1c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
