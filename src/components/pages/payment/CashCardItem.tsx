import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import React from 'react'

function Card({cash, onClick}:{cash:number, onClick?:()=>void}) {


  return (
    <div className="border-[1px] border-[#d9d9d9] w-40 mx-auto h-14 flex items-center justify-center flex-col gap-2 hover:bg-slate-200 rounded-md" onClick={onClick}>
      <p className='text-lg'>{formatNumberWithCommas(cash)}캐시</p>
    </div>
  )
}

export default Card