'use client'

import { useState } from 'react'

export default function EmailCaptureForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Important

    try {
      const res = await fetch('https://api.derek.haus/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          source: 'clarity', 
          message: '' 
        })
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.error || 'Something went wrong')
      }

      alert("Thank you for subscribing! You are officially on the list.")
      setEmail('')
    } catch (err: any) {
      console.error('Subscription failed:', err.message);
      alert(`Subscription failed: ${err.message}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border px-4 py-2 rounded w-full"
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {status === 'loading' ? 'Submitting...' : 'Subscribe'}
      </button>
      {status === 'error' && <p className="text-red-500">{error}</p>}
      {status === 'success' && <p className="text-green-500">Thank you!</p>}
    </form>
  )
}
