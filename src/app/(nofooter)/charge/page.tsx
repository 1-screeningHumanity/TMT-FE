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

  return (
    <section>
      <Headers title="교환하기"/>
      <div className="w-60 mx-auto text-center">
        <h3 className="mt-10 mb-8 text-sm flex items-end">보유 캐시 : <span className="text-2xl text-[#7d00d0]">{formatNumberWithCommas(cashInfo)} 캐시</span></h3>
      </div>
      <WonCard />


      <h3 className="mt-16 mb-14 text-sm flex items-end justify-center h-10 mx-auto">충전 후 금액 : <span className="text-2xl text-[#7d00d0]">{formatNumberWithCommas(wonInfo + (Number(price) * 100))} 원</span></h3>
      <Link href={"/payments"}>
        <div className="absolute right-6 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-yellow-300 flex items-center justify-center ">
            <Image src="/assets/images/nextPageIcon.svg" alt="nextPage" width={30} height={30}/>
          </div>
          <p className="text-xs mt-2 text-slate-400 animate-bounce">충전하기</p> 
        </div>
      </Link>
      <ButtonOfCharge price={price} cash={cashInfo}/>
    </section>
  )
}