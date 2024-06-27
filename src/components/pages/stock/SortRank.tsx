import Image from 'next/image'
import upPrice from '/public/assets/images/upPrice.svg'
import downPrice from '/public/assets/images/downPrice.svg'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { StockSortType } from '@/types/StcokSortType'
import Link from 'next/link'
export default function SortRank({
  sortResult,
}: {
  sortResult: StockSortType[]
}) {
  return (
    <>
      <hr />
      <div className="flex h-14 justify-center items-center font-bold text-lg text-center ">
        <div className="w-6/12 ">종목명</div>
        <div className="w-3/12 ">현재가 </div>
        <div className="w-3/12 ">등락률</div>
      </div>
      <hr />
      {sortResult.map((item: any) => (
        <Link href={`/stock/${item.stockCode}`}>
          <div className="flex h-16  items-center ">
            <span className="w-1/12 p-2 text-xl">{item.data_rank}</span>
            <div className="w-5/12 ml-2 text-xl justify-center ">
              <span>{item.hts_kor_isnm} </span>
            </div>

            <span className="w-3/12 text-center ">
              {formatNumberWithCommas(parseInt(item.stck_prpr))}
            </span>
            <div className="w-3/12 flex flex-col items-center">
              {item.prdy_ctrt.includes('-') ? (
                <div className="flex">
                  <span className="w-3 h-3 mt-2">
                    <Image src={downPrice} alt="하락" />
                  </span>

                  <span style={{ color: '#0000ff' }}>{item.prdy_ctrt}%</span>
                </div>
              ) : (
                <div className="flex">
                  <span className="w-3 h-3 mt-2">
                    <Image src={upPrice} alt="상승" />
                  </span>

                  <span style={{ color: '#ff0000' }}>{item.prdy_ctrt}%</span>
                </div>
              )}
              <span>{formatNumberWithCommas(parseInt(item.prdy_vrss))}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
