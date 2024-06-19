'use client'

import { cancleReservationBuy, cancleReservationSale } from "@/actions/trade";
import { Toast } from "../toast";
import { toast } from "../use-toast";




export default function ButtonOfCancleTrade( {id, status} : {id : number, status : string} ) {

  async function handleCancleTrade(tradeId: number) {
    if (status == "매수") {
      const res = await cancleReservationBuy(tradeId)
      console.log("res :", res);
      if(res.isSuccess) {
        toast({
          title: "취소되었습니다.",
          variant: "default",
        })
      } else {
        toast({
          title: "삭제할 예약 매수가 없습니다.",
          variant: "destructive",
        })
      }
    }else{
      const res = await cancleReservationSale(tradeId)
      if(res.isSuccess) {
        toast({
          title: "취소되었습니다.",
          variant: "default",
        })
      } else {
        toast({
          title: "삭제할 예약 매도가 없습니다.",
          variant: "destructive",
        })
      }
  }
}

  return (
      <button className="w-3/12 bg-red-500 text-white shrink-0" onClick={() => handleCancleTrade(id)}>취소</button>
  );
}