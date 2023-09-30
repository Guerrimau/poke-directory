import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Pokemon App',
  authors: [{ name: "Gerardo Mayboca" }],
  description: 'Pokemon Database',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
