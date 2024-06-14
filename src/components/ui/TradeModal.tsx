'use client'
import { tradeStock } from '@/actions/stock/stock'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staticStockType } from '@/types/Stock'
import { wonInfoAPI } from '@/actions/wallet'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'

interface TradeModalProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  stockCode: string
  stockNameResult: string
  staticStockPrice: staticStockType
}

export default function TradeModal({
  modalOpen,
  setModalOpen,
  stockCode,
  stockNameResult,
  staticStockPrice,
}: TradeModalProps) {
  const now_price = parseInt(staticStockPrice.stck_prpr)
  const [price, setPrice] = useState(now_price)
  const [amount, setAmount] = useState(1)

  const [myMoney, setMyMoney] = useState(0)
  console.log(stockCode)

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
  }
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }
  const handleBuyButtonClick = async (trade: string) => {
    const data = {
      stockCode: stockCode,
      price: price,
      amount: amount,
      stockName: stockNameResult,
    }

    console.log('data', data)
    try {
      const response = await tradeStock(trade, data)
      console.log(response)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  const wonInfo = async () => {
    const res = await wonInfoAPI()
    setMyMoney(res.data.won as number)
  }
  useEffect(() => {
    wonInfo()
  }, [])

  console.log('내돈내놔 ! ', myMoney)
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className="bg-black/60 absolute inset-0 z-50 flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-x-0 top-1/2 bottom-0 flex flex-col border rounded-t-3xl bg-white"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div
              className="right-0 top-0 absolute m-5 cursor-pointer"
              onClick={closeModal}
            >
              <Image
                src="https://img.icons8.com/sf-black-filled/64/x.png"
                alt="close"
                width={50}
                height={50}
              />
            </div>
            <span className="text-center mt-10 text-xl font-bold">
              현재 보유 금액 : {formatNumberWithCommas(myMoney)}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
