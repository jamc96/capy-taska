import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Capy-Taska: Your Chill To-Do List',
  description:
    'Stay organized with Capy-Taska! This capybara-inspired to-do list app helps you manage tasks with a laid-back vibe. Add, track, and complete your goals—capybara style!',
  openGraph: {
    images: '/profile.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className='flex min-h-screen flex-col p-4 md:p-24'>
          {children}
        </main>
      </body>
    </html>
  );
}
