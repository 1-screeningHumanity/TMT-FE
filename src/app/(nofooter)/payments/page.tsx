
import {getCashInitalData, postKakaopayReady} from "@/actions/payments"
import CashCard from "@/components/pages/payment/CashCard";
import Headers from "@/components/ui/Headers";
import PayMethod from "@/components/ui/PayMethod"
import ButtonOfPayments from "@/components/ui/buttons/ButtonOfPayments";


export default async function payments(){

  const cashData = await getCashInitalData();
  const currentCash = cashData.data.cash;
  console.log("currentCash : ", currentCash);

  return(

    // postKakaopayReady(itemName, quantity, totalAmount);


    <section>

      <Headers title="결제하기"/>
      <CashCard />
      <PayMethod/>
      {/* <h1 className="mt-28 text-center text-xl font-bold mb-20">총 결제금액 : <span>{totalAmount.toLocaleString()}</span> 캐시(￦)</h1> */}

      <ButtonOfPayments />
    </section>
  )
}