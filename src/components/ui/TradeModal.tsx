'use client'
import { getStockName, tradeStock } from '@/actions/stock/stock'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'

interface TradeModalProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  stockCode: string
  stockNameResult: string
}
export default function TradeModal({
  modalOpen,
  setModalOpen,
  stockCode,
  stockNameResult,
}: TradeModalProps) {
  const [price, setPrice] = useState(0)
  const [amount, setAmount] = useState(0)
  const [stockName, setStockName] = useState('')

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
  }
  const handleamountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }

  const handleBuyButtonClick = async (trade: string) => {
    const data = {
      stockCode: stockCode,
      price: price,
      amount: amount,
      stockName: stockNameResult,
    }
    try {
      const response = await tradeStock(trade, data)
      console.log(response)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    modalOpen && (
      <form action="submit">
        <div className="bg-black/60 absolute inset-0 z-50">
          <div className="fixed inset-x-0 top-1/2 bottom-0 flex flex-col border rounded-t-3xl bg-white ">
            <div
              className="right-0 top-0 absolute m-5"
              onClick={() => closeModal()}
            >
              <Image
                src="https://img.icons8.com/sf-black-filled/64/x.png"
                alt="close"
                width={50}
                height={50}
              />
            </div>
            <div className="items-center justify-center mt-32 h-screen">
              <div className="text-center">
                <div className="flex justify-between w-3/5 m-auto ">
                  <span className="text-3xl font-bold mx-3 whitespace-nowrap">
                    단가
                  </span>
                  <input
                    type="number"
                    className="border w-4/5"
                    onChange={handlePriceChange}
                  />
                </div>
                <div className="flex justify-between w-3/5 m-auto my-10">
                  <span className="text-3xl font-bold mx-3 whitespace-nowrap">
                    수량
                  </span>
                  <input
                    type="number"
                    className="border w-4/5"
                    onChange={handleamountChange}
                  />
                </div>
              </div>
              <div className="flex m-5 mt-2 justify-between absolute bottom-0 inset-x-0">
                <button
                  className="w-5/12 h-14 font-bold text-white rounded-2xl "
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
          </div>
        </div>
      </form>
    )
  )
}
