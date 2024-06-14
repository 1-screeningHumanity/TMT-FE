'use client'

import { postSignOut } from "@/actions/member";
import { signOut } from "next-auth/react";

export default function ButtonOfSignout(){

  const handleSignOut = async () => {
    const res = await postSignOut();
    await signOut();
  }

  return <button className="bg-[#7d00d0] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6" onClick={() => handleSignOut()}>로그아웃</button>
}