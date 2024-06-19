
import {postKakaopayReady} from "@/actions/payments"
import { cashInfoAPI } from "@/actions/wallet";
import CashCard from "@/components/pages/payment/CashCard";
import Headers from "@/components/ui/Headers";
import PayMethod from "@/components/ui/PayMethod"
import ButtonOfPayments from "@/components/ui/buttons/ButtonOfPayments";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";


export default async function payments({searchParams} : {searchParams: {[key: string]: string}}){

  const price = searchParams?.price;
  const cashData = await cashInfoAPI();
  const currentCash = cashData?.data.cash;

  return(
    
    <section>
      <Headers title="결제하기"/>
      <h1 className="text-center my-14 text-xl font-bold">현재 보유 캐시 : {currentCash > 0 ? formatNumberWithCommas(currentCash) : 0} 캐시(￦)</h1>
      <CashCard />
      <PayMethod/>
      <h1 className="mt-20 text-center text-xl font-bold mb-20">결제 후 잔액 : <span>{price ? Number(currentCash) + Number(price) : Number(currentCash)}</span> 캐시(￦)</h1>
      <ButtonOfPayments price={price} />
    </section>
  )
}