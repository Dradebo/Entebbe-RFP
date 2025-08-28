import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Entebbe Club - Premier Golf Club in Uganda',
  description: 'Experience the finest golfing in Uganda at Entebbe Club. World-class facilities, stunning course, and exceptional service for members and guests.',
  keywords: 'golf club, Uganda, Entebbe, golf course, membership, tee times',
  authors: [{ name: 'Entebbe Club' }],
  openGraph: {
    title: 'Entebbe Club - Premier Golf Club in Uganda',
    description: 'Experience the finest golfing in Uganda at Entebbe Club.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}