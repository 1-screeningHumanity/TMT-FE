
import Footer from '@/components/ui/Footer'
import Headers from '@/components/ui/Headers'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Headers />
      {children}
      <Footer />
    </>
  )
}
