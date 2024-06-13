"use client";

import Link from "next/link";


export default function ButtonToMyPage(){

  return <Link className="bg-[#7d00d0] w-80 mx-auto mt-40 text-white h-10 rounded-lg block flex items-center justify-center" href={"/mypage"}>마이페이지</Link>
}