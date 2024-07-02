import Link from 'next/link'
import { getReservationTradeList } from '@/actions/tradeList'
import Headers from '@/components/ui/Headers'
import ButtonOfCancleTrade from '@/components/ui/buttons/ButtonOfCancleTrade'
import { ReservationTradeListsType } from '@/types/ReservationTradeListsType'
import { parseDate } from '@/utils/parseDate'

export default async function reservationTradeLists() {
  const data = await getReservationTradeList()
  const reservationTradeLists = data?.data
  return (
    <section>
      <div className="w-80 bg-[#7d00d0] text-white h-10 mx-auto flex items-center justify-center rounded-md mt-5">
        예약 내역
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-2 text-md text-center mt-5 border-b-2 py-2 font-[Pretendard-Regular] pl-4 w-max min-w-full">
          <span className="w-3/12 shrink-0">예약시각</span>
          <span className="w-4/12 shrink-0">종목명</span>
          <span className="w-2/12 shrink-0">예약금액</span>
          <span className="w-2/12 shrink-0">수량</span>
          <span className="w-2/12 shrink-0">총 금액</span>
          <span className="w-3/12 shrink-0">사기 / 팔기</span>
          <span className="w-3/12 shrink-0">취소</span>
        </div>
        <div className="mb-20">
          {reservationTradeLists.length == 0 ? (
            <div className="text-center mt-5">예약 내역이 없습니다.</div>
          ) : (
            reservationTradeLists.map((trade: ReservationTradeListsType) => (
              <Link href={`/stock/${trade.stockCode}`} key={trade.id}>
                <div className="flex gap-2 text-md text-center mt-2 py-2 font-[Pretendard-Regular] pl-4 leading-8 w-max min-w-full">
                  <span className="w-3/12 shrink-0">
                    {parseDate(trade.time)}
                  </span>
                  <span className="w-4/12 shrink-0">{trade.stockName}</span>
                  <span className="w-2/12 shrink-0">
                    {trade.price.toLocaleString()}
                  </span>
                  <span className="w-2/12 shrink-0">{trade.amount}</span>
                  <span className="w-2/12 shrink-0">
                    {trade.totalPrice.toLocaleString()}
                  </span>
                  <span
                    className={`w-3/12 shrink-0 ${trade.status == 'SALE' ? 'text-blue-400' : 'text-red-400'}`}
                  >
                    {trade.status == 'BUY' ? '팔기' : '사기'}
                  </span>

                  <ButtonOfCancleTrade id={trade.id} status={trade.status} />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
