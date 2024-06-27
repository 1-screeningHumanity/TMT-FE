'use client'

import { useRouter } from "next/navigation"

export default function ButtonOfNotFound() {

  const router = useRouter()
  return (
    <button className="bg-[#7d12ff] text-white w-32 h-10 mx-auto block mt-40 rounded-full" onClick={() => router.push("/")}>홈으로</button>
  )
}