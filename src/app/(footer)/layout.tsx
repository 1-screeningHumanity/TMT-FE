import Footer from '@/components/ui/Footer'
import Headers from '@/components/ui/Headers'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Headers />
      <main className="flex-grow mb-100">{children}</main>
      <Footer />
    </div>
  )
}
