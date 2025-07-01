'use client';

import { useState } from 'react';
import { supabase } from '@/../lib/supabase';


export default function EmailCaptureForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.from('emails').insert({ email });

    if (error) {
      setError('Submission failed. Please try again.');
    } else {
      setSubmitted(true);
      setEmail('');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      {submitted ? (
        <p className="text-green-600">Thanks! We'll be in touch soon.</p>
      ) : (
        <>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            {loading ? 'Submitting...' : 'Notify Me'}
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </>
      )}
    </form>
  );
}
