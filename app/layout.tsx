import React from 'react';
import '../styles/globals.css'

export const metadata = {
  title: 'Clarity OS',
  description: 'Attribution clarity for startups and scale-ups',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <div className="bg-gold text-jet p-4 rounded-xl text-center text-xl">
          🧪 Tailwind is working and reading your custom theme!
        </div>
      </body>
    </html>
  );
}
