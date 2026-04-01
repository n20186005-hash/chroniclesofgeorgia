import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '乔治亚编年史 - Chronicles of Georgia',
  description: '探索乔治亚3000年历史的纪念碑柱群，位于第比利斯海畔的壮观景点',
  keywords: '乔治亚编年史,第比利斯,纪念碑,历史景点,旅游',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}