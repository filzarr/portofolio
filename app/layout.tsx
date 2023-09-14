
import Navbar from '@/components/navbar'
import type { AppProps } from 'next/app'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FRR',
  description: 'Filza Rizki Ramadhan',
  viewport: 'width=device-width, initial-scale=1',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <head>
      </head>
      <body className={inter.className}>

        {children}

      </body>
    </html>
  )
}
