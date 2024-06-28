'use client'
import { getBidAskSocketData } from '@/actions/stock/getBidAskSocketData'
import { AskingPriceData } from '@/lib/stock/AskingPriceData'
import { AskingPriceDataTypes, FormatAskinDataTypes } from '@/types/Stock'
import formattingData from '@/utils/formatAskPrice'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { socketStockCode } from '@/utils/socketStockCode'
import timeCheck from '@/utils/timeCheck'
import { useEffect, useState } from 'react'

export default function AskPrice({
  stockCode,
  staticAskPrice,
}: {
  stockCode: string
  staticAskPrice: FormatAskinDataTypes
}) {
  let socketData
  // let data = formattingData(socketData as any)
  let data: any

  const check = timeCheck()

  useEffect(() => {
    if (socketStockCode.includes(stockCode)) {
      socketData = getBidAskSocketData(stockCode)
      data = formattingData(socketData as any)
    }
  }, [stockCode, check])

  return (
    <>
      {data !== undefined ? (
        <>
          {data.askp_arr.map((askp: any, index: number) => {
            const widthPercentage = (Number(askp[1]) / data.max_askp_rsqn) * 100
            const textColor = widthPercentage >= 95 ? 'white' : 'black'
            return (
              <div className="flex my-3" key={index}>
                <div
                  className="h-16 mx-3 relative flex items-center rounded-2xl text-center"
                  style={{
                    backgroundColor: '#F2F2F2',
                    width: 'calc(66.6667% - 12px)',
                  }}
                >
                  <span
                    className="z-10 text-white ml-2 font-semibold"
                    style={{ color: textColor }}
                  >
                    {formatNumberWithCommas(askp[1])}
                  </span>
                  <div
                    className="h-16 absolute right-0 bg-gradient-to-r from-sky-500 to-white rounded-2xl"
                    style={{
                      width: `${widthPercentage}%`,
                    }}
                  ></div>
                  <div className=" w-1/2 absolute right-0 text-center mx-1">
                    <span className="font-black">
                      {formatNumberWithCommas(askp[0])}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}

          {data.bidp_arr.map((bidp: any, index: number) => {
            const widthPercentage = (Number(bidp[1]) / data.max_bidp_rsqn) * 100
            const textColor = widthPercentage >= 95 ? 'white' : 'black'
            return (
              <div className="flex my-3 justify-end" key={index}>
                <div
                  className="h-16 mx-3 relative flex items-center rounded-2xl"
                  style={{
                    backgroundColor: '#F2F2F2',
                    width: 'calc(66.6667% - 12px)',
                  }}
                >
                  <div
                    className="h-16 absolute left-0 bg-gradient-to-l from-red-500 to-white rounded-2xl"
                    style={{
                      width: `${widthPercentage}%`,
                    }}
                  ></div>
                  <div className=" w-1/2 absolute text-center ">
                    <span className="font-black">
                      {formatNumberWithCommas(bidp[0])}
                    </span>
                  </div>
                  <span
                    className="z-10 absolute right-0 text-white ml-2 font-semibold mr-2"
                    style={{ color: textColor }}
                  >
                    {formatNumberWithCommas(bidp[1])}
                  </span>
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <>
          {staticAskPrice.askp_arr.map((askp: any, index: number) => {
            const widthPercentage =
              (Number(askp[1]) / staticAskPrice.max_askp_rsqn) * 100
            const textColor = widthPercentage >= 95 ? 'white' : 'black'
            return (
              <div className="flex my-3" key={index}>
                <div
                  className="h-16 mx-3 relative flex items-center rounded-2xl text-center"
                  style={{
                    backgroundColor: '#F2F2F2',
                    width: 'calc(66.6667% - 12px)',
                  }}
                >
                  <span
                    className="z-10 text-white ml-2 font-semibold"
                    style={{ color: textColor }}
                  >
                    {formatNumberWithCommas(askp[1])}
                  </span>
                  <div
                    className="h-16 absolute right-0 bg-gradient-to-r from-sky-500 to-white rounded-2xl"
                    style={{
                      width: `${widthPercentage}%`,
                    }}
                  ></div>
                  <div className=" w-1/2 absolute right-0 text-center mx-1">
                    <span className="font-black">
                      {formatNumberWithCommas(askp[0])}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}

          {staticAskPrice.bidp_arr.map((bidp: any, index: number) => {
            const widthPercentage =
              (Number(bidp[1]) / staticAskPrice.max_bidp_rsqn) * 100
            const textColor = widthPercentage >= 95 ? 'white' : 'black'
            return (
              <div className="flex my-3 justify-end" key={index}>
                <div
                  className="h-16 mx-3 relative flex items-center rounded-2xl"
                  style={{
                    backgroundColor: '#F2F2F2',
                    width: 'calc(66.6667% - 12px)',
                  }}
                >
                  <div
                    className="h-16 absolute left-0 bg-gradient-to-l from-red-500 to-white rounded-2xl"
                    style={{
                      width: `${widthPercentage}%`,
                    }}
                  ></div>
                  <div className=" w-1/2 absolute text-center ">
                    <span className="font-black">
                      {formatNumberWithCommas(bidp[0])}
                    </span>
                  </div>
                  <span
                    className="z-10 absolute right-0 text-white ml-2 font-semibold mr-2"
                    style={{ color: textColor }}
                  >
                    {formatNumberWithCommas(bidp[1])}
                  </span>
                </div>
              </div>
            )
          })}
        </>
      )}
    </>
  )
}
