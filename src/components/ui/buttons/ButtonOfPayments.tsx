'use client'

export default function ButtonOfPayments(){
  return <button className="bg-yellow-400 w-full h-14 fixed bottom-0 right-0 left-0 mt-20" onClick={()=> location.href="/payments/complete"}>결제하기</button>
}