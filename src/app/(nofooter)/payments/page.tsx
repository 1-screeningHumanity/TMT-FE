
import {postKakaopayReady} from "@/actions/payments"
import { cashInfoAPI } from "@/actions/wallet";
import CashCard from "@/components/pages/payment/CashCard";
import PayMethod from "@/components/ui/PayMethod"
import TitleOfPages from "@/components/ui/TitleOfPages";
import ButtonOfPayments from "@/components/ui/buttons/ButtonOfPayments";
import ButtonToMyPage from "@/components/ui/buttons/ButtonToMyPage";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";


export default async function payments({searchParams} : {searchParams: {[key: string]: string}}){

  const price = searchParams?.price;
  const cashData = await cashInfoAPI();
  const currentCash = cashData?.data.cash;

  return(
    
    <section>
      <h1 className="text-center my-10 text-xl font-medium">현재 보유 캐시 : {currentCash > 0 ? formatNumberWithCommas(currentCash) : 0} 캐시(￦)</h1>
      <CashCard />
      <PayMethod/>
      <h1 className="mt-16 text-center text-xl font-medium mb-20">결제 후 잔액 : <span>{price ? Number(currentCash) + Number(price) : Number(currentCash)}</span> 캐시(￦)</h1>
      <ButtonOfPayments price={price} />
    </section>
  )
}