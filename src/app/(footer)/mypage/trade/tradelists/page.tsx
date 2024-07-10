import { getTradeList } from "@/actions/tradeList";
import Headers from "@/components/ui/Headers";
import { TradeListsType } from "@/types/TradeListsType";
import { parseDate } from "@/utils/parseDate";


export default async function tradeLists(){

  const data = await getTradeList();
  const tradeLists = data?.data;

  return (
    <section>
      <div className="w-80 bg-[#7d12ff] text-white h-10 mx-auto flex items-center justify-center rounded-md mt-5">최근 거래</div>
      <section className="flex gap-2 text-md overflow-x-scroll text-center mt-5 border-b-2 py-2 font-[Pretendard-Regular] pl-4 w-full">
        <span className="w-3/12 shrink-0">체결시각</span> 
        <span className="w-4/12 shrink-0">종목명</span> 
        <span className="w-2/12 shrink-0">체결액</span> 
        <span className="w-2/12 shrink-0">수량</span> 
        <span className="w-2/12 shrink-0">총 금액</span> 
        <span className="w-3/12 shrink-0">사기 / 팔기</span> 
      </section>
      <div className="overflow-x-scroll mb-20">
      { tradeLists.length == 0 ? <div className="text-center mt-5">거래 내역이 없습니다.</div> : 
      tradeLists.map((trade : TradeListsType) => (
        <div key={trade.id} className="flex gap-2 text-md text-center mt-2 py-4 font-[Pretendard-Regular] pl-4 leading-8">
          <span className="w-3/12 shrink-0">{parseDate(trade.time)}</span>
          <span className="w-4/12 shrink-0">{trade.stockName}</span>
          <span className="w-2/12 shrink-0">{trade.price.toLocaleString()}</span>
          <span className="w-2/12 shrink-0">{trade.amount}</span>
          <span className="w-2/12 shrink-0">{trade.totalPrice.toLocaleString()}</span>
          <span className={`w-3/12 shrink-0 ${trade.status == "SALE" ? "text-blue-400" : "text-red-400"}`}>{trade.status == "BUY" ? "사기" : "팔기"}</span>
        </div>
      ))}
      </div>
    </section>
  )
}