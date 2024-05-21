'use client'

import Image from "next/image"
import { useState } from "react";

export default function InputOfPassword({placeholder} : {placeholder : string}){
  const [showPassword, setShowPassword] = useState(true);



  return(
    <div className="relative">
      <input placeholder={placeholder} type={showPassword ? "password" : "text"} name="password" required className="border-[2px] rounded-lg w-80 h-10 mx-auto block my-4 px-4 text-sm placeholder-[#aea0e5]"/>
      { showPassword ?
        <Image width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/visible--v1.png" alt="visible--v1" className="absolute right-14 top-2" onClick={()=>{setShowPassword(false)}}/> :
        <Image width="20" height="20" src="https://img.icons8.com/material/20/closed-eye.png" alt="closed-eye" className="absolute right-14 top-2" onClick={()=>{setShowPassword(true)}}/>
      }
  </div>
  )
}