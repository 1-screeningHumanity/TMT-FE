'use client'

import { postKakaopayReady } from "@/actions/payments";
import checkMobileDevice from "@/utils/checkMobileDevice";

export default async function ButtonOfPayments({price} : {price: string}){

  async function handlePayment(){
    const res = await postKakaopayReady(`${price}캐시`, 1, Number(price));
    console.log("postKakaopayReady res :", res);
    sessionStorage.setItem("tid", res?.data.tid);
    sessionStorage.setItem("partner_order_id", res?.data.partner_order_id);
    if(checkMobileDevice()){
      window.open(res.data.next_redirect_mobile_url)
    }else{
      window.open(res.data.next_redirect_pc_url)
    }
  }

  return <button className="bg-yellow-400 w-full h-14 fixed bottom-0 right-0 left-0 mt-20 flex items-center justify-center" 
  onClick={handlePayment}
  >결제하기</button>
}