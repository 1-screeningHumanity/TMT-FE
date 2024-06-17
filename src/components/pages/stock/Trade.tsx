'use client'
import { getInvestors, getStockName } from '@/actions/stock/stock'
import SocketTradeModal from '@/components/ui/SockTradeModal'
import TradeModal from '@/components/ui/TradeModal'
import { staticStockType } from '@/types/Stock'
import { socketStockCode } from '@/utils/socketStockCode'
import timeCheck from '@/utils/timeCheck'
import React, { use, useEffect } from 'react'
import { useState } from 'react'

export default function Trade({
  stockCode,
  stockName,
  staticStockPrice,
}: {
  stockCode: string
  stockName: string
  staticStockPrice: staticStockType
}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [socketFlag, setSocketFlag] = useState(false)
  const check = timeCheck()
  useEffect(() => {
    if (socketStockCode.includes(stockCode) && check === true) {
      setSocketFlag(true)
    }
  }, [stockCode])
  return (
    <>
      <div className="mt-5 bottom-0 left-0 right-0 flex justify-between mx-5 mb-20">
        <button
          className="w-5/12 h-14 font-bold text-white rounded-2xl"
          style={{ backgroundColor: '#0B0B0B' }}
          onClick={() => setModalOpen(true)}
        >
          팔기
        </button>
        <button
          className="w-5/12 h-14 font-bold text-white rounded-2xl"
          style={{ backgroundColor: '#7D12FF' }}
          onClick={() => setModalOpen(true)}
        >
          사기
        </button>
      </div>
      {socketFlag ? (
        <SocketTradeModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          stockCode={stockCode}
          stockNameResult={stockName}
          staticStockPrice={staticStockPrice}
        />
      ) : (
        <TradeModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          stockCode={stockCode}
          stockNameResult={stockName}
          staticStockPrice={staticStockPrice}
        />
      )}
    </>
  )
}
