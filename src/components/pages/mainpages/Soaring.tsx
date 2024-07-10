import { StockSortType } from '@/types/StcokSortType'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

export default function Soaring({
  data,
  color,
}: {
  data: StockSortType[] | undefined
  color: string
}) {
  const SoaringData = data
  return (
    <section className={`my-5 rounded-md bg-white border-[0.5px]`}>
      <div className="w-full h-10 flex justify-center items-center text-center border-b-2 border-white font-semibold px-2">
        <span className="w-1/12"></span>
        <span className="w-5/12">종목명</span>
        <span className="w-3/12">현재가</span>
        <span className="w-3/12">등락률</span>
      </div>
      {SoaringData?.map((soar) => (
        <ul
          className="w-full h-auto min-h-8 flex justify-center items-center text-center px-2"
          key={soar.id}
        >
          <li className="w-1/12">{soar.data_rank}</li>
          <li className="w-5/12 break-words">{soar.hts_kor_isnm}</li>
          <li className="w-3/12">{formatNumberWithCommas(soar.stck_prpr)}</li>
          <li
            className="w-3/12 flex gap-2 items-center"
            style={{ color: color }}
          >
            {color === 'RED' ? (
              <ArrowUpIcon size={10} />
            ) : (
              <ArrowDownIcon size={10} />
            )}
            {soar.prdy_ctrt}
          </li>
        </ul>
      ))}
    </section>
  )
}
