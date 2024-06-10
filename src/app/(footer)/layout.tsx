import Footer from '@/components/ui/Footer'
import Headers from '@/components/ui/Headers'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Headers />
      <main className="flex-grow pb-16">{children}</main>
      <Footer />
    </div>
  )
}
