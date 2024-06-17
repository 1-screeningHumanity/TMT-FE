import { socketStockCode } from '@/utils/socketStockCode'
import { StockChartDataType } from '@/types/Stock'

import { CallStockPrice } from '@/lib/stock/CallStockPrice'
import Link from 'next/link'
import DetailCheckbox from './DetailCheckbox'
import RealTimeChart from './RealTimeChart'
import { getSocketData } from '@/actions/stock/getSocketData'
import timeCheck from '@/utils/timeCheck'

export default function Charts({
  params,
}: {
  params: {
    stockCode: string
    stockData: StockChartDataType[]
    nowLink: string
    staticStockPrice: any
  }
}) {
  const stockCode = params.stockCode
  const nowlink = params.nowLink
  let flag = false
  const check = timeCheck()
  if (socketStockCode.includes(params.stockCode) && check === true) {
    flag = true
  }
  console.log(flag)
  // let realTimedata
  // if (socketStockCode.includes(stockCode)) {
  //   realTimedata = getSocketData(stockCode)
  //   console.log(realTimedata)
  // }
  console.log('charts.ts in stockData', params.stockData)
  return (
    <>
      <DetailCheckbox
        data={params.stockData}
        stockCode={stockCode}
        link={nowlink}
        staticStockPrice={params.staticStockPrice}
      />
      <div
        className="flex justify-between bottom-0 items-center mt-5 w-full h-8 rounded-2xl"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        {flag && (
          <Link
            href={`/stock/${stockCode}?when=real-time`}
            className="w-1/4 h-8 text-white text-center flex justify-center items-center mr-1 rounded-2xl"
            style={{
              backgroundColor: nowlink === 'real-time' ? '#cccccc' : '#f2f2f2',
              color: nowlink === 'real-time' ? '#ffffff' : '#000000',
            }}
          >
            <span>실시간</span>
          </Link>
          // <RealTimeChart
          //   chartData={params.stockData}
          //   realTimedata={realTimedata}
          // />
        )}
        {CallStockPrice.map((item) => (
          <Link
            key={item.id}
            href={`/stock/${stockCode}?when=${item.when}`}
            className="w-1/4 h-8 text-white text-center flex justify-center items-center mr-1 rounded-2xl"
            style={{
              backgroundColor: nowlink === item.when ? '#cccccc' : '#f2f2f2',
              color: nowlink === item.when ? '#ffffff' : '#000000',
            }}
          >
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </>
  )
}
