import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import React from 'react'

function Card({cash, won, onClick}:{cash:number, won?:string, onClick?:()=>void}) {
  return (
    <div className="border-[1px] w-40 h-20 flex items-center justify-center flex-col gap-2 hover:bg-slate-200 font-bold rounded-md" onClick={onClick}>
      <p>{formatNumberWithCommas(cash)}캐시</p>
      { won && <p>{formatNumberWithCommas(won)}원</p> }
      </div>
  )
}

export default Card