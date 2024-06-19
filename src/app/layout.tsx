import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../components/provider/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
