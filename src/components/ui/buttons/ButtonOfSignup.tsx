'use client'

import { useRouter } from "next/navigation";

export default function ButtonToSignup(){

  const router = useRouter();

  return <input type="submit" value={"회원가입"} className="bg-[#7d12ff] text-white text-sm font-semibold rounded-lg w-full h-10 mx-auto block my-6" onClick={() => router.push("/member/signup")}/>
}