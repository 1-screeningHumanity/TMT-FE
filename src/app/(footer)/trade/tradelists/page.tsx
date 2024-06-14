import { getTradeList } from "@/actions/tradeList";
import Headers from "@/components/ui/Headers";
import { TradeLists } from "@/lib/trade/TradeLists";
import { parseDate } from "@/utils/parseDate";


export default async function tradeLists(){

  const data = await getTradeList();
  const tradeLists = data.data;

  console.log("tradeLists :", tradeLists);

  return (
    <section>
      <Headers title="매수/매도 내역"/>
      <div className="w-80 bg-[#7d00d0] text-white h-10 mx-auto flex items-center justify-center rounded-md mt-5">최근 거래</div>
      <section className="flex gap-2 text-lg overflow-x-scroll text-center mt-5 border-b-2 py-2 font-[Pretendard-Regular] pl-4">
        <span className="w-24 shrink-0">체결시각</span> 
        <span className="w-24 shrink-0">종목명</span> 
        <span className="w-20 shrink-0">체결액</span> 
        <span className="w-20 shrink-0">수량</span> 
        <span className="w-20 shrink-0">총 금액</span> 
        <span className="w-24 shrink-0">매수 / 매도</span> 
      </section>
      <div className="overflow-x-scroll mb-20">
      {TradeLists.map((trade, index) => (
        <div key={index} className="flex gap-2 text-lg text-center mt-2 py-2 font-[Pretendard-Regular] pl-4">
          <span className="w-24 shrink-0">{parseDate(trade.time)}</span>
          <span className="w-24 shrink-0">{trade.stockName}</span>
          <span className="w-20 shrink-0">{trade.price.toLocaleString()}</span>
          <span className="w-20 shrink-0">{trade.amount}</span>
          <span className="w-20 shrink-0">{trade.totalPrice.toLocaleString()}</span>
          <span className={`w-24 shrink-0 ${trade.status == "매도" ? "text-blue-400" : "text-red-400"}`}>{trade.status}</span>
        </div>
      ))}
      </div>
    </section>
  )
}