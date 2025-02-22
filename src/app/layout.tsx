import { Inter } from 'next/font/google'
import { unstable_ViewTransition as ViewTransition } from 'react'

import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'

import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://codebyleo.dev'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'codebyleo',
    template: '%s | codebyleo'
  },
  description:
    'A personal portfolio and blog website showcasing my thoughts, projects, and journey in software development.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialised bg-background tracking-tight text-foreground`}
      >
        <div className="min-h-screen w-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="mx-auto w-full max-w-6xl px-4 py-12">
              <ViewTransition name="auto">{children}</ViewTransition>
            </main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
