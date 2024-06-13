'use client'

import Link from "next/link"

export default function ButtonOfPayments(){
  return <Link className="bg-yellow-400 w-full h-14 fixed bottom-0 right-0 left-0 mt-20 flex items-center justify-center" href={"/payments/complete"}>결제하기</Link>
}