import { StockSortType } from '@/types/StcokSortType'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'

export default function Soaring({
  data,
  color,
}: {
  data: StockSortType[]
  color: string
}) {
  const SoaringData = data
  return (
    <section
      className="mx-5 my-3 bg-red-100 rounded-xl"
      style={{
        background:
          color === 'red' ? ' rgba(255, 0, 0, 0.1)' : ' rgba(0, 0, 255, 0.1)',
      }}
    >
      <div className="w-full h-12 flex justify-center items-center text-center border-b-2 border-white font-semibold">
        <span className="w-1/12"></span>
        <span className="w-5/12">종목명</span>
        <span className="w-3/12">현재가</span>
        <span className="w-3/12">등락률</span>
      </div>
      {SoaringData.map((soar) => (
        <ul
          className="w-full h-auto min-h-8 flex justify-center items-center text-center"
          key={soar.id}
        >
          <li className="w-1/12">{soar.data_rank}</li>
          <li className="w-5/12 break-words">{soar.hts_kor_isnm}</li>
          <li className="w-3/12">{formatNumberWithCommas(soar.stck_prpr)}</li>
          <li className="w-3/12" style={{ color: color }}>
            {soar.prdy_ctrt}
          </li>
        </ul>
      ))}
    </section>
  )
}
