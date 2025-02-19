import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { unstable_ViewTransition as ViewTransition } from 'react'
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
    'A personal website showcasing my projects, thoughts, and journey in software development.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground antialised tracking-tight`}
      >
        <div className="min-h-screen w-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="mx-auto w-full max-w-7xl px-4">
              <ViewTransition name="auto">{children}</ViewTransition>
            </main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
