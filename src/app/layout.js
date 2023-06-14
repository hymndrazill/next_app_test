"use client"
import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children,session }) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
      <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  )
}
