'use client'

import Link from "next/link";

export default function ButtonOfCharge(){


  return <Link className="bg-[#7d00d0] text-white w-full h-14 fixed bottom-0 right-0 left-0 mt-20 flex items-center justify-center" href={"/charge/complete"}>교환하기</Link>
}