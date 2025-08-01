
// app/page.tsx
import React from 'react';
import EmailCaptureForm from '../components/EmailCaptureForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 max-w-3xl leading-tight">
        Turn your ideas into income.
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Clarity OS shows <strong>exactly</strong> where your money is coming from — so you can build, scale, or start with total confidence.
      </p>

      <ul className="mt-6 text-gray-700 text-base space-y-1">
        <li>✅ See what’s working</li>
        <li>✅ Stop wasting time</li>
        <li>✅ Grow smarter than your competitors</li>
      </ul>

      <div className="mt-8 w-full max-w-md">
        <EmailCaptureForm />
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Want to be part of the first wave? Join the early access waitlist — unlock a smarter way to grow.
      </p>
    </main>
  );
}
