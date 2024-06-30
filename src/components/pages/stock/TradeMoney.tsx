'use client'

import { tradeReservation, tradeStock } from '@/actions/trade'
import { TradeType, staticStockType } from '@/types/Stock'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { useState } from 'react'

export default function TradeMoney({
  stockCode,
  stockNameResult,
  staticStockPrice,
  myMoney,
}: {
  stockCode: string
  stockNameResult: string
  staticStockPrice: staticStockType
  myMoney: number
}) {
  const now_price = parseInt(staticStockPrice?.stck_prpr)

  const [price, setPrice] = useState(now_price)
  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(now_price)

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
    setTotalPrice(Number(e.target.value) * amount)
  }
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
    setTotalPrice(price * Number(e.target.value))
  }

  const handleBuyButtonClick = async (trade: string) => {
    console.log(now_price)
    const data: TradeType = {
      stockCode: stockCode,
      price: price,
      amount: amount,
      stockName: stockNameResult,
    }
    if (now_price != price) {
      // console.log(socketPrsice)
      const response = await tradeReservation(trade, data)
      const howToTrade = trade == 'buy' ? '사기' : '팔기'
      if (response.isSuccess == true) {
        alert(
          `${stockNameResult} ${[price]}원에 ${amount}주 예약 ${howToTrade} 성공`,
        )
      } else {
        alert(response.message)
      }
    } else {
      const response = await tradeStock(trade, data)
      const howToTrade = trade == 'buy' ? '사기' : '팔기'
      if (response.isSuccess == true) {
        alert(
          `${stockNameResult} ${[price]}원에 ${amount}주 ${howToTrade} 성공`,
        )
      } else {
        alert(response.message)
      }
    }
  }

  return (
    <section>
      <span className="text-center mt-10 text-xl font-bold">
        현재 보유 금액 : {formatNumberWithCommas(myMoney)}
      </span>
      <span className="text-center mt-10 text-xl font-bold">
        예상 금액 : {totalPrice}
      </span>
      <div className="items-center justify-center mt-5 h-screen">
        <div className="text-center">
          <div className="flex justify-between w-3/5 m-auto ">
            <span className="text-3xl font-bold mx-3 whitespace-nowrap">
              단가
            </span>
            <input
              type="number"
              className="border w-4/5"
              onChange={handlePriceChange}
              defaultValue={now_price}
            />
          </div>
          <div className="flex justify-between w-3/5 m-auto my-10">
            <span className="text-3xl font-bold mx-3 whitespace-nowrap">
              수량
            </span>
            <input
              type="number"
              className="border w-4/5"
              onChange={handleAmountChange}
              defaultValue={1}
            />
          </div>
        </div>
        <div className="flex m-5 mt-2 justify-between absolute bottom-0 inset-x-0">
          <button
            className="w-5/12 h-14 font-bold text-white rounded-2xl"
            style={{ backgroundColor: '#0B0B0B' }}
            onClick={() => handleBuyButtonClick('sale')}
          >
            팔기
          </button>
          <button
            className="w-5/12 h-14 font-bold text-white rounded-2xl"
            style={{ backgroundColor: '#7D12FF' }}
            onClick={() => handleBuyButtonClick('buy')}
          >
            사기
          </button>
        </div>
      </div>
    </section>
  )
}
