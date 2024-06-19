import { getReservationTradeList } from "@/actions/tradeList";
import Headers from "@/components/ui/Headers";
import ButtonOfCancleTrade from "@/components/ui/buttons/ButtonOfCancleTrade";
import { ReservationTradeLists } from "@/lib/trade/ReservationTradeLists";
import { parseDate } from "@/utils/parseDate";

export default async function reservationTradeLists(){
  
  const data = await getReservationTradeList();
  console.log("data :", data);
  const reservationTradeLists = data?.data;
  console.log("reservationTradeLists :", reservationTradeLists);
  
  return (
    <section>
      <Headers title="예약 매수/매도 내역"/>
      <div className="w-80 bg-[#7d00d0] text-white h-10 mx-auto flex items-center justify-center rounded-md mt-5">예약 내역</div>
      <div className="flex gap-2 text-lg overflow-x-scroll text-center mt-5 border-b-2 py-2 font-[Pretendard-Regular] pl-4 w-full">
        <span className="w-3/12 shrink-0">예약시각</span> 
        <span className="w-4/12 shrink-0">종목명</span> 
        <span className="w-2/12 shrink-0">예약금액</span> 
        <span className="w-2/12 shrink-0">수량</span> 
        <span className="w-2/12 shrink-0">총 금액</span> 
        <span className="w-3/12 shrink-0">사기 / 팔기</span> 
        <span className="w-3/12 shrink-0">취소</span> 
      </div>
      <div className="overflow-x-scroll mb-20">
      {reservationTradeLists.map((trade : any, index : number) => (
        <div key={index} className="flex gap-2 text-lg text-center mt-2 py-4 font-[Pretendard-Regular] pl-4 leading-8">
          <span className="w-3/12 shrink-0">{parseDate(trade.time)}</span>
          <span className="w-4/12 shrink-0">{trade.stockName}</span>
          <span className="w-2/12 shrink-0">{trade.price.toLocaleString()}</span>
          <span className="w-2/12 shrink-0">{trade.amount}</span>
          <span className="w-2/12 shrink-0">{trade.totalPrice.toLocaleString()}</span>
          <span className={`w-3/12 shrink-0 ${trade.status == "SALE" ? "text-blue-400" : "text-red-400"}`}>{trade.status == "SALE" ? "사기" : "팔기"}</span>
          <ButtonOfCancleTrade id={trade.id} status={trade.status}/>
        </div>
      ))}
      </div>
    </section>
  )
}