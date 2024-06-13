import ButtonToMyPage from "@/components/ui/buttons/ButtonToMyPage";
import Image from "next/image";

export default function payments_complete(){

  return(
    <section>
      <Image src="/assets/images/paymentComplete.svg" width="100" height="100" alt="payments_complete" className="mx-auto mt-40" />
      <div className="flex flex-col text-center mt-20 text-xl font-bold">
        결제가 완료되었습니다
        <span className="text-sm text-gray-400">결제 내역은 마이페이지에서 확인 가능합니다</span>
      </div>
      <ButtonToMyPage />
      <Image src={"/assets/images/line.svg"} alt="line" width={500} height={0} />
    </section>
  )
}