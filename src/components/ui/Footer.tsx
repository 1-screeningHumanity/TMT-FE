'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {

  const router = usePathname();
  console.log("router :", router);

  return (
  <div className="w-full fixed bottom-0 right-0 left-0 flex justify-around mb-2 mt-10">
    <Link href="#" className="text-xs text-slate-400 flex items-center flex-col justify-center gap-2 w-16">
      <Image width="30" height="30" src="https://img.icons8.com/material-outlined/24/sorting-answers.png" alt="sorting-answers" />
      카테고리
    </Link>
    <Link href="#" className="text-xs text-slate-400 flex items-center flex-col justify-center gap-2 w-16">
      <Image width="30" height="30" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
      검색
    </Link>
    <Link href="#" className="text-xs text-slate-400 flex items-center flex-col justify-center gap-2 w-16">
      <Image width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/home--v1.png" alt="home--v1"/>
      홈
    </Link>
    <Link href="#" className="text-xs text-slate-400 flex items-center flex-col justify-center gap-2 w-16">
      <Image width="30" height="30" src="https://img.icons8.com/ios/50/bar-chart--v1.png" alt="bar-chart--v1"/>
      순위
    </Link>
    <Link href="#" className="text-xs text-slate-400 flex items-center flex-col justify-center gap-2 w-16">
      <Image width="30" height="30" src="https://img.icons8.com/parakeet-line/48/user.png" alt="user"/>
      마이페이지
    </Link>
  </div>
  )
}
