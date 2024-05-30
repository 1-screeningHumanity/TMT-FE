'use client'
import Image from 'next/image'
import { getSocketData } from '@/actions/stock/getSocketData'
import { useState } from 'react'

export default function StockNamePrice({
  stockName,
  stockCode,
}: {
  stockName: string
  stockCode: string
}) {
  const data = getSocketData('005930')
  const [socketFlag, setSocketFlag] = useState(false)
  const socketStockCode = [
    '005930',
    '000660',
    '373220',
    '207940',
    '005380',
    '005935',
    '000270',
    '068270',
    '005490',
    '105560',
    '035420',
    '006400',
    '051910',
    '028260',
    '055550',
    '012330',
    '003670',
    '035720',
    '247540',
    '086790',
  ]
  if (stockCode in socketStockCode) {
    setSocketFlag(true)
  }
  return (
    <>
      <div className="backGroundLinear">
        <div className="w-full h-24 rounded-xl flex items-center relative">
          <div className="p-2 ">
            <Image
              src="https://img.icons8.com/color/20/star--v1.png"
              alt="bookmark"
              width={48}
              height={48}
              objectFit="contain"
              className="p-2"
            />
          </div>
          <span className="text-3xl font-bold text-white ml-3 ">
            {stockName}
          </span>
          <div className="flex flex-col items-end absolute mr-8 right-0">
            <span className="text-xl text-white">{String(data.now_price)}</span>
            <div className="flex">
              <Image
                src={data.symbol || ''}
                alt="부호"
                width={20}
                height={10}
              />
              <span className="text-lg ml-1" style={{ color: data.color }}>
                {String(data.prdy_ctrt)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
