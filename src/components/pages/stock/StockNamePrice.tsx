'use client'
import Image from 'next/image'
import { getSocketData } from '@/actions/stock/getSocketData'
import { useState } from 'react'
import { socketStockCode } from '@/utils/socketStockCode'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { SocketStockDataType } from '@/types/Stock'

export default function StockNamePrice({
  stockName,
  stockCode,
}: {
  stockName: string
  stockCode: string
}) {
  const data: any = getSocketData(stockCode)
  const [socketFlag, setSocketFlag] = useState(false)
  // console.log(data)
  if (socketStockCode.hasOwnProperty(stockCode) && !socketFlag) {
    setSocketFlag(true)
  }
  return (
    <>
      <div
        className="mx-3 mt-3 rounded-lg"
        style={{ backgroundColor: '#ABABAB' }}
      >
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
            <span className="text-xl text-white">
              {formatNumberWithCommas(data.now_price)}
            </span>
            <div className="flex">
              {data.color === '#ff0000' ? (
                <Image
                  src="/assets/images/upPrice.svg"
                  alt="부호"
                  width={20}
                  height={10}
                />
              ) : (
                <Image
                  src="/assets/images/downPrice.svg"
                  alt="부호"
                  width={20}
                  height={10}
                />
              )}

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
