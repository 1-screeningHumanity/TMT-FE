import { socketStockCode } from '@/utils/socketStockCode'
import { getStockData } from '@/actions/stock/stock'
import { StockChartDataType } from '@/types/Stock'

import { CallStockPrice } from '@/lib/stock/CallStockPrice'
import Link from 'next/link'
import DetailCheckbox from './DetailCheckbox'

export default function Charts({
  params,
}: {
  params: {
    stockCode: string
    stockData: StockChartDataType[]
    nowLink: string
  }
}) {
  const stockCode = params.stockCode
  const nowlink = params.nowLink
  let flag = false
  if (socketStockCode.hasOwnProperty(params.stockCode)) {
    flag = true
  }

  return (
    <>
      <DetailCheckbox data={params.stockData} />
      <div
        className="flex justify-between bottom-0 items-center mt-5 w-full h-8 rounded-2xl"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        {/* {flag && (
          <button
            className="w-1/4 h-8 text-white mr-1 rounded-2xl"
            style={{ backgroundColor: '#D7D7D7' }}
            onClick={() => console.log('')}
          >
            실시간
          </button>
        )} */}
        {CallStockPrice.map((item) => (
          <Link
            key={item.id}
            href={`/stock/${stockCode}?when=${item.when}`}
            className="w-1/4 h-8 text-white text-center   mr-1 rounded-2xl"
            style={{
              backgroundColor: nowlink === item.when ? '#cccccc' : '#f2f2f2',
              color: nowlink === item.when ? '#ffffff' : '#000000',
            }}
          >
            <span className="items-center justify-center">{item.name}</span>
          </Link>
        ))}
      </div>
    </>
  )
}
