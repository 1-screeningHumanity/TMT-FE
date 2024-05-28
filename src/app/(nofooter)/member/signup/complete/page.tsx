import Image from "next/image";

export default function complete (){
  return(
    <section>
      <Image src={"/assets/images/logo3.svg"} alt="logo3" width={300} height={200} className="mx-auto pr-20 mt-60 mb-6"/>
      <div className="text-lg font-bold w-80 mx-auto">
        회원가입이 완료되었습니다<br/>
        결제비밀번호를 등록하셔야 서비스 이용이 가능합니다
      </div>
      <button className="bg-[#7d00d0] text-white text-md font-semibold rounded-lg w-80 h-10 mx-auto block my-20 font-[Pretendard-Regular]">
        다음으로
      </button>
    </section>
  )
}