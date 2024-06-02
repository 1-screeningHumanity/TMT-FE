'use client'

import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";

export default function PayPassword ({setPassword} : {setPassword : Dispatch<SetStateAction<string>> }){
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyUp = (e : React.KeyboardEvent<HTMLInputElement>, index : number) => {
    const target = e.target as HTMLInputElement;
    if (target.value.length === target.maxLength) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
    setPassword(inputRefs.current.map((input) => input?.value).join(""));
  };

  return(
    <>
      <div className="flex mx-10 justify-between my-10 items-center">
        <div className="rounded-full bg-[#f6f7f9] flex justify-center items-center w-4 h-4" >
          <Image width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/back.png" alt="back"/>
        </div>
        <h1 className="text-lg text-[#7d00d0] font-extrabold">결제비밀번호</h1>
        <div className="rounded-full bg-[#f6f7f9] flex justify-center items-center w-5 h-5">
            <Image width="20" height="20" src="https://img.icons8.com/ios/20/000000/multiply.png" alt="cancel"/>
        </div>
      </div>
      <div className="text-center mt-24 mb-20">
        <p className="font-bold text-lg">거래를 안전하게 관리하기 위해<br/> 
        결제 비밀번호를 등록해주세요.</p>
        <p className="text-sm text-[#98999b] mt-4">숫자 4자를 입력해주세요.</p>
      </div>

        <div className="mx-auto w-fit">
          <input className="w-14 h-14 border-[2px] mx-3 text-center text-xl" maxLength={1} required type="password" ref={(el) => {inputRefs.current[0] = el}} onKeyUp={(e) => handleKeyUp(e, 0)}/>
          <input className="w-14 h-14 border-[2px] mx-3 text-center text-xl" maxLength={1} required type="password" ref={(el) => {inputRefs.current[1] = el}} onKeyUp={(e) => handleKeyUp(e, 1)}/>
          <input className="w-14 h-14 border-[2px] mx-3 text-center text-xl" maxLength={1} required type="password" ref={(el) => {inputRefs.current[2] = el}} onKeyUp={(e) => handleKeyUp(e, 2)}/>
          <input className="w-14 h-14 border-[2px] mx-3 text-center text-xl" maxLength={1} required type="password" ref={(el) => {inputRefs.current[3] = el}} onKeyUp={(e) => handleKeyUp(e, 3)}/>
        </div>

    </>
  )
}