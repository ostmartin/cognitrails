import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../firebase-admin/firebase';
import { Providers } from './providers';
import '@/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CogniTrails',
  description: 'CogniTrails - Empower your learning journey with personalized educational paths. Explore a world of knowledge as you create, track, and achieve your unique milestones. Start your educational odyssey today with CogniTrails.',
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container m-auto w-full'>
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}