'use client'

import CashCard from "@/components/pages/payment/CashCard";
import Headers from "@/components/ui/Headers";
import ButtonOfCharge from "@/components/ui/buttons/ButtonOfCharge";
import Image from "next/image";
import { useState } from "react";

export default function charge(){

  const [totalCash, setTotalCash] = useState<number>(0); 
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleTotalAmount = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTotalAmount(Number(e.target.value));
  };


  return (
    <section>
      <Headers title="교환하기"/>

      
      <h1 className="text-center mt-8 text-lg font-bold">현재 보유 원 : {"0"} 원</h1>
      <CashCard />
      {/* <div className="grid grid-cols-2 mt-20 gap-4 w-5/6 mx-auto">
        <div className="border-[1px] w-40 h-20 flex items-center justify-center flex-col gap-2 hover:bg-slate-200" onClick={()=>{setTotalAmount(100000); setTotalCash(1000);}}>100,000 원<span className="text-xs text-slate-400">1,000캐시</span></div>
        <div className="border-[1px] w-40 h-20 flex items-center justify-center flex-col gap-2 hover:bg-slate-200" onClick={()=>{setTotalAmount(500000); setTotalCash(5000);}}>500,000 원<span className="text-xs text-slate-400">5,000캐시</span></div>
        <div className="border-[1px] w-40 h-20 flex items-center justify-center flex-col gap-2 hover:bg-slate-200" onClick={()=>{setTotalAmount(1000000); setTotalCash(10000);}}>1,000,000 원<span className="text-xs text-slate-400">10,000캐시</span></div>
        <div className="border-[1px] w-40 h-20 flex items-center justify-center flex-col gap-2 hover:bg-slate-200" onClick={()=>{setTotalAmount(5000000); setTotalCash(50000);}}>5,000,000 원<span className="text-xs text-slate-400">50,000캐시</span></div>
      </div> */}

      <h1 className="mt-14 text-center text-xl font-bold mb-10">차감될 캐시 : {totalCash.toLocaleString()} 캐시</h1>
      <h1 className="mt-10 text-center text-xl font-bold mb-36">교환 금액 : {totalAmount.toLocaleString()} 원</h1>
      <div className="relative" onClick={() => location.href="/payments"}>
        <div className="absolute right-6 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-yellow-300 flex items-center justify-center ">
            <Image src="/assets/images/nextPageIcon.svg" alt="nextPage" width={30} height={30}/>
          </div>
          <p className="text-xs mt-2 text-slate-400 animate-bounce">충전하러가기</p> 
        </div>
      </div>
      <ButtonOfCharge />
    </section>
  )
}