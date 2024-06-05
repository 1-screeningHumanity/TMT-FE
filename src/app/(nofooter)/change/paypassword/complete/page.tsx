'use client'

import Image from "next/image";

export default function complete (){
  return(
    <section>
      <Image src={"/assets/images/logo3.svg"} alt="logo3" width={300} height={200} className="mx-auto pr-20 mt-60 mb-6"/>
      <div className="text-lg font-bold w-80 mx-auto">
        결제비밀번호 변경완료 <br/>
        <span className="text-xs text-[#3a3f52] w-80 mx-auto">결제비밀번호가 변경되었습니다</span>
      </div>
      <button className="bg-[#7d00d0] text-white text-md font-semibold rounded-lg w-80 h-10 mx-auto block my-20 font-[Pretendard-Regular]" onClick={()=> location.href="/"} >
        메인페이지로
      </button>
    </section>
  )
}