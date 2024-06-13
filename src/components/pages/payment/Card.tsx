import React from 'react'

function Card({cash, point}:{cash:string, point?:string}) {
  return (
    <div className="border-[1px] w-40 h-20 flex items-center justify-center flex-col gap-2 hover:bg-slate-200 font-bold rounded-md">
      <p>{cash}캐시</p>
      { point && <p>{point}원</p> }
      </div>
  )
}

export default Card