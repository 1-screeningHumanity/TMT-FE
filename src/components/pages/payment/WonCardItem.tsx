import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import React from 'react'

function Card({cash, won, onClick}:{cash:number, won?:number, onClick?:()=>void}) {
  return (
    <div className="border-[1px] border-[#d9d9d9] w-80 h-20 flex items-center justify-center flex-col gap-2 hover:bg-slate-200 bg-[#edf1fc] rounded-md" onClick={onClick}>
      <p className='text-xl'>{formatNumberWithCommas(won)}원</p>
      { won && <p className='text-sm text-red-800'>{formatNumberWithCommas(cash)}캐시</p> }
      </div>
  )
}

export default Card