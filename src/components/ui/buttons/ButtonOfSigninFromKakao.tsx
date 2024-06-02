'use client'

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function ButtonOfSigninFromKakao(){

  return <button className="w-28 rounded-md h-10 bg-yellow-300 flex justify-center items-center" onClick={() => {signIn("kakao", { redirect: true, callbackUrl: "/" })}}>
          <Image src={"/assets/images/kakaoLogo.svg"} alt="kakaoLogo" width={20} height={20}/>
        </button>
}