'use client'

import Image from 'next/image'
import Link from 'next/link'
import { footerSignedIn, footerSignedOut } from '@/lib/footer'
import Navi01 from './icons/Navi01'
import Navi02 from './icons/Navi02'
import Navi03 from './icons/Navi03'
import Navi04 from './icons/Navi04'
import Navi05 from './icons/Navi05'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { footerType } from '@/types/footerType'

export default function Footer() {

  const [footer, setFooter] = useState<footerType[]>();
  const session = useSession()
  const isSignIn = session?.data?.user?.isSuccess

  useEffect(() => {
    if (isSignIn) {
      setFooter(footerSignedIn);
    } else {
      setFooter(footerSignedOut);
    }
  }, [isSignIn])


  return (
    <footer className="fixed bottom-0  w-full bg-white p-4 z-10">
      <ul className='flex justify-between items-center'>
        {footer?.map((data : footerType) => (
          <li key={data.id}>
            <Link
              href={data.href}
              className="text-xs flex items-center flex-col justify-center gap-2 w-16"
            >
              {data.id === 1 && <Navi01 />}
              {data.id === 2 && <Navi02 />}
              {data.id === 3 && <Navi03 />}
              {data.id === 4 && <Navi04 />}
              {data.id === 5 && <Navi05 />}
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
