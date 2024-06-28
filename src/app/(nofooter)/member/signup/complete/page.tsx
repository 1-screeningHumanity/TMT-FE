import ButtonOfNextPage from "@/components/ui/buttons/ButtonOfNextPage";
import Image from "next/image";

export default function complete (){

  

  return(
    <section>
      <Image src={"/assets/images/logo3.svg"} alt="logo3" width={300} height={200} className="mx-auto pr-20 mt-40 mb-6"/>
      <div className="text-lg font-medium w-80 mx-auto">
        회원가입이 완료되었습니다<br/>
        결제비밀번호를 등록하셔야 서비스 이용이 가능합니다
      </div>
      <ButtonOfNextPage href="/member/paypassword" children="다음으로" />
    </section>
  )
}