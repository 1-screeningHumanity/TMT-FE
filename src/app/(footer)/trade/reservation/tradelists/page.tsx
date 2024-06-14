import { getReservationTradeList } from "@/actions/tradeList";
import Headers from "@/components/ui/Headers";
import { ReservationTradeLists } from "@/lib/trade/ReservationTradeLists";
import { parseDate } from "@/utils/parseDate";

export default async function reservationTradeLists(){

  const data = await getReservationTradeList();
  const reservationTradeLists = data.data;

  console.log("reservationTradeLists :", reservationTradeLists);
  
  return (
    <section>
      <Headers title="예약 매수/매도 내역"/>
      <div className="w-80 bg-[#7d00d0] text-white h-10 mx-auto flex items-center justify-center rounded-md mt-5">예약 내역</div>
      <header className="flex gap-2 text-lg overflow-x-scroll text-center mt-5 border-b-2 py-2 font-[Pretendard-Regular] pl-4">
        <span className="w-24 shrink-0">예약시각</span> 
        <span className="w-24 shrink-0">종목명</span> 
        <span className="w-20 shrink-0">예약금액</span> 
        <span className="w-20 shrink-0">수량</span> 
        <span className="w-20 shrink-0">총 금액</span> 
        <span className="w-24 shrink-0">매수 / 매도</span> 
        <span className="w-20 shrink-0">취소</span> 
      </header>
      <div className="overflow-x-scroll mb-20">
      {ReservationTradeLists.map((trade, index) => (
        <div key={index} className="flex gap-2 text-lg text-center mt-2 py-2 font-[Pretendard-Regular] pl-4 pr-4">
          <span className="w-24 shrink-0">{parseDate(trade.time)}</span>
          <span className="w-24 shrink-0">{trade.stockName}</span>
          <span className="w-20 shrink-0">{trade.price.toLocaleString()}</span>
          <span className="w-20 shrink-0">{trade.amount}</span>
          <span className="w-20 shrink-0">{trade.totalPrice.toLocaleString()}</span>
          <span className={`w-24 shrink-0 ${trade.status == "매도" ? "text-blue-400" : "text-red-400"}`}>{trade.status}</span>
          <button className="w-20 bg-red-500 text-white shrink-0">취소</button>
        </div>
      ))}
      </div>
    </section>
  )
}