'use client'

import { useRouter } from "next/navigation";

export default function ButtonToSignin(){

  const router = useRouter();

  return <input type="submit" value={"로그인"} className="bg-[#7d00d0] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6" onClick={() => router.push("/member/signin")}/>
}