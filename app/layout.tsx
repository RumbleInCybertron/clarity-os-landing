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
      </body>
    </html>
  );
}
