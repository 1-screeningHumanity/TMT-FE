'use client'
import Image from 'next/image'
import { getSocketData } from '@/actions/stock/getSocketData'
import { useEffect, useState } from 'react'
import { socketStockCode } from '@/utils/socketStockCode'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { SocketStockDataType, staticStockType } from '@/types/Stock'
import { getStaticStockPrice } from '@/actions/stock/stock'
import { set } from 'firebase/database'

export default function StockNamePrice({
  stockName,
  stockCode,
}: {
  stockName: string
  stockCode: string
}) {
  const [Price, setPrice] = useState<staticStockType>()
  const [socketFlag, setSocketFlag] = useState(false)
  const [socketData, setSocketdata] = useState<any>()
  let data
  useEffect(() => {
    fetchPrice()
  }, [])
  // const data: any = getSocketData(stockCode)
  const fetchPrice = async () => {
    const data = await getStaticStockPrice(stockCode)
    console.log('정적인 가격!!!!!', data)
    setPrice(data)
  }

  if (socketStockCode.hasOwnProperty(stockCode)) {
    data = getSocketData(stockCode)

    if (data.now_price != undefined) {
      console.log('실시간 가격!!!!!', data)
    }
  }
  console.log('비ㄴ데이터', data)
  console.log(Price)
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
                {formatNumberWithCommas(Price?.stck_prpr)}
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
                {formatNumberWithCommas(Price?.stck_prpr)}
              </span>
              {/* <div className="flex">
              {Price?.color === '#ff0000' ? (
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

              <span className="text-lg ml-1" style={{ color: Price?.color }}>
                {String(Price?.prdy_ctrt)}%
              </span>
            </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
