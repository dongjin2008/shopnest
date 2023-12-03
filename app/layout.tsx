import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import CartProvider from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopNest',
  description: 'E-commerce made with Next.js and Prisma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <Toaster
            toastOptions={{
              style: {
                background: '#383A3E',
                color: '#6CC3E4',
                borderColor: '#6CC3E4',
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  )
}
