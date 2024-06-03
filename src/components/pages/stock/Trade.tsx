'use client'
import { getInvestors, getStockName } from '@/actions/stock/stock'
import TradeModal from '@/components/ui/TradeModal'
import React, { use, useEffect } from 'react'
import { useState } from 'react'

export default function Trade({
  stockCode,
  stockName,
}: {
  stockCode: string
  stockName: string
}) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="flex mx-5 mt-2 justify-between">
        <button
          className="w-5/12 h-14 font-bold text-white rounded-2xl "
          style={{ backgroundColor: '#0000ff' }}
          // onClick={() => handleBuyButtonClick('sale')}
          onClick={() => setModalOpen(true)}
        >
          팔기
        </button>
        <button
          className="w-5/12 h-14 font-bold text-white rounded-2xl"
          style={{ backgroundColor: '#ff0000' }}
          onClick={() => setModalOpen(true)}
        >
          사기
        </button>
      </div>
      <TradeModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        stockCode={stockCode}
        stockNameResult={stockName}
      />
    </>
  )
}
