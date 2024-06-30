'use client'

import { getSocketData } from '@/actions/stock/getSocketData'
import { tradeReservation, tradeStock } from '@/actions/trade'
import { TradeType, staticStockType } from '@/types/Stock'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { socketStockCode } from '@/utils/socketStockCode'
import timeCheck from '@/utils/timeCheck'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { TradeMoneyProps } from '@/types/Trade'
export default function TradeMoney({
  stockCode,
  stockNameResult,
  staticStockPrice,
  myMoney,
}: TradeMoneyProps) {
  const check = timeCheck()
  let now_price = 0
  if (socketStockCode.includes(stockCode) && check === true) {
    const sockData = getSocketData(stockCode)
    now_price = sockData.now_price as number
  } else {
    now_price = parseInt(staticStockPrice?.stck_prpr)
  }
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
      <motion.div
        className=" flex flex-col p-3 overflow-auto h-screen"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <span className="p-3 ">
          현재 보유 금액
          <span className="block text-2xl font-bold">
            {formatNumberWithCommas(myMoney)} 원
          </span>
        </span>
        <span className="pl-3">
          예상금액
          <span className="block text-2xl font-bold text-purple-600">
            {formatNumberWithCommas(totalPrice)} 원
          </span>
        </span>
        <div className="items-center justify-center mt-2 h-screen">
          <div className="text-center">
            <input
              type="number"
              className="border rounded-xl w-full h-12 p-2 m-2"
              onChange={handlePriceChange}
              defaultValue={now_price}
            />
            <input
              type="number"
              className="border rounded-xl w-full h-12 p-2 m-2"
              onChange={handleAmountChange}
              defaultValue={1}
            />
          </div>
          <div className="flex m-5 mt-2 justify-between ">
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
      </motion.div>
    </section>
  )
}
