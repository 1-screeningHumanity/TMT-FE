
import {postKakaopayReady} from "@/actions/payments"
import CashCard from "@/components/pages/payment/CashCard";
import Headers from "@/components/ui/Headers";
import PayMethod from "@/components/ui/PayMethod"
import ButtonOfPayments from "@/components/ui/buttons/ButtonOfPayments";

async function getCashInitalData() {
  const res = await fetch(`${process.env.API_BASE_URL}/payments/cash`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;

}

export default async function payments(){

  const cashData = await getCashInitalData();

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