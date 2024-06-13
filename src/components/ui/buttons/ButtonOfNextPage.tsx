'use client'

import Link from "next/link"

export default function ButtonOfNextPage({href, children} : {href : string, children : string}){
  return (
    <Link className="bg-[#7d00d0] text-white text-md font-semibold rounded-lg w-80 h-10 mx-auto block my-20 font-[Pretendard-Regular] flex items-center justify-center" 
    href={`${href}`}>
      {children}
    </Link>
  )
}