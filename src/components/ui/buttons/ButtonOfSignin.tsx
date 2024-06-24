'use client'

import { useRouter } from "next/navigation"

export default function ButtonOfSignin(){

  const router = useRouter();
  return <input type="submit" value={"로그인"} className="bg-[#7d12ff] text-white text-sm font-semibold rounded-lg w-full h-10 mx-auto block my-6" onClick={() => router.push("/member/signin")}/>
}