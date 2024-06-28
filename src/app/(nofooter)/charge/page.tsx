import { cashInfoAPI, wonInfoAPI } from "@/actions/wallet";
import CashCard from "@/components/pages/payment/CashCard";
import WonCard from "@/components/pages/payment/WonCard";
import Headers from "@/components/ui/Headers";
import ButtonOfCharge from "@/components/ui/buttons/ButtonOfCharge";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import Image from "next/image";
import Link from "next/link";

export default async function charge({searchParams} : {searchParams: {[key: string]: string}}){

  const price = searchParams.price

  const resWon = await wonInfoAPI();
  const wonInfo = resWon?.data.won;
  const resCash = await cashInfoAPI();
  const cashInfo = resCash?.data.cash;

  console.log("wonInfo :", wonInfo, "cashInfo :", cashInfo)

  return (
    <section>
      <div className="flex justify-end mx-10">
        <Link
          className="rounded-full bg-[#f6f7f9] flex justify-center items-center w-5 h-5"
          href={'/mypage'}
          >
          <Image
            width={20}
            height={20}
            src="/assets/images/multiply.svg"
            alt="cancel"
          />
        </Link>
      </div>
      <div className="w-60 mx-auto text-center">
        <h3 className="mt-14 mb-10 text-sm flex items-end">보유 캐시 : <span className="text-2xl text-[#7d00d0]">{cashInfo > 0 ? formatNumberWithCommas(cashInfo) : 0} 캐시</span></h3>
      </div>
      <WonCard />


      <h3 className="mt-16 mb-14 text-sm flex items-end justify-center h-10 mx-auto">충전 후 금액 : <span className="text-2xl text-[#7d00d0]">{price ? formatNumberWithCommas(wonInfo + (Number(price) * 100)) : formatNumberWithCommas(wonInfo)} 원</span></h3>
      <ButtonOfCharge price={price} cash={cashInfo}/>
    </section>
  )
}