import Image from 'next/image'
import downPrice from '/public/downPrice.png'
import upPrice from '/public/upPrice.png'
import { StockPriceData } from '@/lib/stock/StockPriceData'
import { StockPrice } from '@/types/StockPriceDataType'

export default function StockNamePrice() {
  const data: StockPrice = StockPriceData
  let color = 'black'
  let symbol
  if (data.prdy_vrss_sign === '1' || data.prdy_vrss_sign === '2') {
    color = 'red'
    symbol = upPrice
  }
  if (data.prdy_vrss_sign === '4' || data.prdy_vrss_sign === '5') {
    color = 'blue'
    symbol = downPrice
  }
  return (
    <div className="flex">
      <div className="ml-3 mt-5 h-10 w-10">
        <Image
          src="https://img.icons8.com/color/20/star--v1.png"
          alt="bookmark"
          width={48}
          height={48}
          objectFit="contain"
        />
      </div>

      <div className="ml-2 mt-3 flex justify-between items-center relative w-full">
        <span className="mt-2 text-3xl font-bold">삼성전자</span>
        <div className="flex flex-col items-end absolute mr-8 right-0">
          <span className="text-xl" style={{ color }}>
            {data.price.toLocaleString()}
          </span>
          <div className="flex items-center ">
            <Image src={symbol || ''} alt="부호" />
            <span className="text-lg ml-1" style={{ color }}>
              {data.prdy_ctrt}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
