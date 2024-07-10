'use client'

import { postKakaopayApprove } from "@/actions/payments";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function paymentsContinue({searchParams} : {searchParams: {[key: string]: string}}){

  const pgToken = searchParams?.pg_token;

  const [tid, setTid] = useState<string | null>(null);
  const [partner_order_id, setPartner_order_id] = useState<string | null>(null);

  useEffect(() => {
    const storedTid = localStorage.getItem("tid");
    const storedPartnerOrderId = localStorage.getItem("partner_order_id");
    setTid(storedTid);
    setPartner_order_id(storedPartnerOrderId);
  },[])

  const router = useRouter();

  async function handleContinue(){
    const res = await postKakaopayApprove( tid, partner_order_id, pgToken )
    if(res.isSuccess === true){
      router.push("/payments/complete")
  }}

  return(
    <section>
      <Image src="/assets/images/kakaoPay.svg" width={100} height={100} alt="kakaoPay logo" className="mt-4"/>
      <div className="w-2/3 text-xl font-bold mx-auto my-72">결제가 진행 중입니다. <br/> 계속 하시려면 확인 버튼을 눌러주세요.</div>
      <button className="absolute bottom-2 w-full bg-yellow-400 h-20 rounded-full text-xl font-bold" onClick={handleContinue}>확인</button>
    </section>
  )
}