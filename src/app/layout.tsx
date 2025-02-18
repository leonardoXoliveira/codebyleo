import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'codebyleo',
  description:
    'A personal website showcasing my projects, thoughts, and journey in software development.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  )
}
