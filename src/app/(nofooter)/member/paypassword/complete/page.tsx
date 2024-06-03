'use client'

import Image from "next/image";

export default function complete (){
  return(
    <section>
      <Image src={"/assets/images/logo3.svg"} alt="logo3" width={300} height={200} className="mx-auto pr-20 mt-60 mb-6"/>
      <div className="text-lg font-bold w-80 mx-auto">
        가입을 축하드립니다 ~<br/>
        투자금 1,000,000원을<br/>
        지급했습니다 !<br/>
        <span className="text-xs text-[#3a3f52] w-80 mx-auto">모의투자로 주식을 배워볼 수 있습니다.</span>
      </div>
      <button className="bg-[#7d00d0] text-white text-md font-semibold rounded-lg w-80 h-10 mx-auto block my-20 font-[Pretendard-Regular]" onClick={()=> location.href="/member/signin"} >
        로그인
      </button>
    </section>
  )
}