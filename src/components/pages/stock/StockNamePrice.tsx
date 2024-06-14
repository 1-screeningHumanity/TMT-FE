'use client'
import Image from 'next/image'
import { getSocketData } from '@/actions/stock/getSocketData'
import { use, useEffect, useState } from 'react'
import { socketStockCode } from '@/utils/socketStockCode'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { SocketStockDataType, staticStockType } from '@/types/Stock'

export default function StockNamePrice({
  stockName,
  stockCode,
  stockPrice,
}: {
  stockName: string
  stockCode: string
  stockPrice: staticStockType
}) {
  let data
  if (socketStockCode.hasOwnProperty(stockCode)) {
    data = getSocketData(stockCode)
  }
  let color = ''

  if (stockPrice?.prdy_vrss_sign == '2' || stockPrice?.prdy_vrss_sign == '1') {
    color = '#ff0000'
  } else if (
    stockPrice?.prdy_vrss_sign == '4' ||
    stockPrice?.prdy_vrss_sign == '5'
  ) {
    color = '#0000ff'
  }
  const date = new Date()
  console.log(date)

  console.log(data)
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
          {data != undefined ? (
            <div className="flex flex-col items-end absolute mr-8 right-0">
              <span className="text-xl text-white">
                {formatNumberWithCommas(stockPrice?.stck_prpr)}
              </span>
              <div className="flex">
                {data?.color === '#ff0000' ? (
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

                <span className="text-lg ml-1" style={{ color: data?.color }}>
                  {String(data?.prdy_ctrt)}%
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-end absolute mr-8 right-0">
              <span className="text-xl text-white">
                {formatNumberWithCommas(stockPrice?.stck_prpr)}
              </span>
              <div className="flex">
                {color === '#ff0000' ? (
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

                <span className="text-lg ml-1" style={{ color: color }}>
                  {String(stockPrice?.prdy_ctrt)}%
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
