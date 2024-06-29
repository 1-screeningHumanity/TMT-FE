import Logo from '@/components/layouts/Logo'
import SubHeader from '@/components/layouts/SubHeader'
import Link from 'next/link'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="fixed z-[30] w-full h-[100vh] overflow-y-scroll">
      <nav className="w-full fixed top-0 z-50">
        <ul
          className="p-6 flex justify-between items-center bg-slate-100"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <Link href={'/'}>
            <Logo />
          </Link>
        </ul>
      </nav>
      {children}
    </section>
  )
}
