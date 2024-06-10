'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { footer } from '@/lib/footer'

export default function Footer() {
  const router = usePathname()

  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-white pt-2 z-10">
      {footer.map((data) => (
        <Link
          href={data.href}
          className="text-xs text-slate-400 flex items-center flex-col justify-center gap-2 w-16"
          key={data.id}
        >
          <Image width="30" height="30" src={data.src} alt={data.alt} />
          {data.name}
        </Link>
      ))}
    </div>
  )
}
