'use client'

export default function ButtonOfCharge(){
  return <button className="bg-[#7d00d0] text-white w-full h-14 fixed bottom-0 right-0 left-0 mt-20" onClick={()=> location.href="/charge/complete"}>교환하기</button>
}