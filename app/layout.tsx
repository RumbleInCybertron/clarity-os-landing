export const metadata = {
  title: 'Clarity OS',
  description: 'Attribution clarity for startups and scale-ups',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
