'use client'

import Image from "next/image";

export default function PayMethod() {

  return(
    <div className="w-80 mx-auto mt-10">
    <h1 className="text-lg font-bold">결제수단 선택</h1>
    <div className="flex mt-5 gap-2">
      <div className="border-2 w-40 h-24 flex items-center justify-center flex-col border-black text-xs font-bold">
        <Image src="/assets/images/kakaoPay.svg" width="120" height="120" alt="kakaoPay" className="m-2"/>
        카카오페이
      </div>
      <div className="border-2 w-40 h-24 flex items-center justify-center flex-col text-xs font-bold text-[#e5e7eb]" onClick={() => alert("아직 지원하지 않는 서비스입니다.")}>
      <Image src="/assets/images/cardPay.svg" width="50" height="50" alt="kakaoPay" className="m-2"/>
        신용카드
      </div>
    </div>
    <div className="text-yellow-300 relative top-2 left-10">▲</div>
    <div className="h-10 bg-yellow-300 flex items-center justify-center rounded-2xl">
      <span className="font-bold">카카오페이</span>로 간편하고 안전하게 결제 !
    </div>
  </div>
  )
}