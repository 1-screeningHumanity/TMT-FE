'use client'

import { signIn } from "next-auth/react"

export default function ButtonOfSigninFromNaver(){

  return <button className="w-28 rounded-md h-10 bg-green-500 flex justify-center items-center text-white font-bold text-xl" onClick={() => {signIn("naver", { redirect: true, callbackUrl: "/" })}}>N</button>
}