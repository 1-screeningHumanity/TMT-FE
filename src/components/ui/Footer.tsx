'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { footer } from "@/lib/footer"

export default function Footer() {

  const router = usePathname();
  console.log("router :", router);

  return (
  <div className="w-full fixed bottom-0 right-0 left-0 flex justify-around mb-2 mt-10">
    {footer.map((data) => (
    <Link href="#" className="text-xs text-slate-400 flex items-center flex-col justify-center gap-2 w-16" key={data.id}>
      <Image width="30" height="30" src={data.src} alt={data.alt} />
      {data.name}
    </Link>
    ))}
  </div>
  )
}
