
import {postKakaopayReady} from "@/actions/payments"
import { cashInfoAPI } from "@/actions/wallet";
import CashCard from "@/components/pages/payment/CashCard";
import PayMethod from "@/components/ui/PayMethod"
import TitleOfPages from "@/components/ui/TitleOfPages";
import ButtonOfPayments from "@/components/ui/buttons/ButtonOfPayments";
import ButtonToMyPage from "@/components/ui/buttons/ButtonToMyPage";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import { CircleDollarSignIcon, Coins, CoinsIcon, DollarSignIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default async function payments({searchParams} : {searchParams: {[key: string]: string}}){

  const price = searchParams?.price;
  const cashData = await cashInfoAPI();
  const currentCash = cashData?.data.cash;

  return(
    
    <section>
      <div className="flex justify-end items-center mx-10">
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
      <h1 className="text-center my-10 text-lg font-medium">현재 보유 캐시 : <span className="text-xl text-rose-500 font-bold">{currentCash > 0 ? formatNumberWithCommas(currentCash) : 0} 캐시(￦)</span></h1>
      <CashCard />
      <PayMethod/>
      <h1 className="mt-16 text-center text-lg font-medium mb-20">결제 후 잔액 : <span className="text-xl text-rose-500 font-bold">{price ? Number(currentCash) + Number(price) : Number(currentCash)} 캐시(￦)</span></h1>
      <ButtonOfPayments price={price} />
    </section>
  )
}