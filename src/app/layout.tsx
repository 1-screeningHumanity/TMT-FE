import type { Metadata } from 'next'
import './globals.css'
import AuthProvider from '../components/provider/AuthProvider'
import { Toaster } from '@/components/ui/toaster'
import MainHeader from '@/components/layouts/MainHeader'

export const metadata: Metadata = {
  title: '티끌 모의 태산',
  description: '모의투자 서비스 티끌 모의 태산 입니다.',
  authors: [],
  keywords:
    '모의투자, 주식, 주식투자, 주식모의투자, 주식모의투자서비스, 티끌모의태산',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          <MainHeader/>
          <main className='py-20'>
              {children}
              <Toaster />
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
