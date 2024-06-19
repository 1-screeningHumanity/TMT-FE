'use client'

import { postCharge } from "@/actions/charge";
import { useRouter } from "next/navigation";

export default function ButtonOfCharge({price, cash} : {price: string, cash: number}){

  const router = useRouter();

  async function handleCharge(){
    const res = await postCharge(Number(price));
    if(Number(price) > Number(cash)){
      const comparison = confirm("캐시가 부족합니다. 충전하러 가시겠습니까?")
      if(comparison === true){
        router.push("/payments")
        return
      }else if( !comparison && res.isSuccess === true){
        router.push("/charge/complete")
      }
    }
  }
  return <button className="bg-[#7d00d0] text-white w-full h-14 fixed bottom-0 right-0 left-0 mt-20 flex items-center justify-center" 
  onClick={handleCharge}
  >
    교환하기</button>
}