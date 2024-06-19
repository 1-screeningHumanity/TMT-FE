'use client'

import { deleteMember } from "@/actions/member";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ButtonOfResign(){

  const router = useRouter();

  const handleResign = async () => {
    await deleteMember();
    router.push("/");
    await signOut();
  }

  return <button className="bg-[#d9d9d9] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6 hover:bg-[#9c9b9b]" onClick={() => handleResign()}>회원탈퇴</button>
}