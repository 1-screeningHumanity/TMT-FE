'use client'

export default function ButtonOfNextPage({href, children} : {href : string, children : string}){
  return (
    <button className="bg-[#7d00d0] text-white text-md font-semibold rounded-lg w-80 h-10 mx-auto block my-20 font-[Pretendard-Regular]" 
    onClick={()=> location.href=`${href}`}>
      {children}
    </button>
  )
}