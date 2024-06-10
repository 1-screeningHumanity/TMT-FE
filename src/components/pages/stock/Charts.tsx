'use client'
import { useEffect, useState } from 'react'
import DetailCharts from './DetailCharts'
import SimpleCharts from './SimpleCharts'
import { socketStockCode } from '@/utils/socketStockCode'
import { getStockData } from '@/actions/stock/stock'
import { StockChartDataType } from '@/types/Stock'
import { usePathname, useRouter } from 'next/navigation'

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
  const [detail, setDetail] = useState(false)
  let flag = false
  if (socketStockCode.hasOwnProperty(params.stockCode)) {
    flag = true
  }
  const router = useRouter()
  const pathname = usePathname()
  console.log(pathname)

  const handleChangeDetail = () => {
    if (detail === false) {
      setDetail(true)
    }

    if (detail === true) {
      setDetail(false)
    }
  }

  return (
    <>
      <label className="flex items-center my-3 mx-10">
        <span className="text-xl">자세히 보기</span>
        <div className="relative flex items-center ml-2">
          <input
            className="mt-0"
            type="checkbox"
            id="switch"
            onChange={handleChangeDetail}
          />
          <label htmlFor="switch" className="switch_label">
            <span className="onf_btn" />
          </label>
        </div>
      </label>

      {detail ? <DetailCharts /> : <SimpleCharts />}

      <div
        className="flex justify-between bottom-0 items-center mt-5 w-full h-8 rounded-2xl"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        {flag && (
          <button
            className="w-1/4 h-8 text-white mr-1 rounded-2xl"
            style={{ backgroundColor: '#D7D7D7' }}
            onClick={() => console.log('')}
          >
            실시간
          </button>
        )}
        <button
          className="w-1/4 h-8 text-white mr-1 rounded-2xl"
          style={{ backgroundColor: '#D7D7D7' }}
          onClick={() => router.push(`/stock/${stockCode}/?when=day`)}
        >
          일
        </button>
        <button
          className="w-1/4 h-8 text-white rounded-2xl mr-1"
          style={{ backgroundColor: '#D7D7D7' }}
          onClick={() => router.push(`/stock/${stockCode}/?when=week`)}
        >
          주
        </button>
        <button
          className="w-1/4 h-8 text-white mr-1 rounded-2xl"
          style={{ backgroundColor: '#D7D7D7' }}
          onClick={() => router.push(`/stock/${stockCode}/?when=month`)}
        >
          월
        </button>

        <button
          className="w-1/4 h-8 text-white rounded-2xl"
          style={{ backgroundColor: '#D7D7D7' }}
          onClick={() => router.push(`/stock/${stockCode}/?when=year`)}
        >
          년
        </button>
      </div>
    </>
  )
}
