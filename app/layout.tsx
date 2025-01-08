import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title.en,
    template: `%s | ${siteMetadata.title.en}`,
  },
  description: siteMetadata.description.en,
  openGraph: {
    title: siteMetadata.title.en,
    description: siteMetadata.description.en,
    url: './',
    siteName: siteMetadata.title.en,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={siteMetadata.theme}
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 