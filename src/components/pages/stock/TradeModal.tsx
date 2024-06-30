'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SocketStockDataType, TradeType, staticStockType } from '@/types/Stock'
import { wonInfoAPI } from '@/actions/wallet'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'

import { TradeModalProps } from '@/types/Trade'
import { getAccessToken } from '@/actions/tokens'
import TradeMoney from './TradeMoney'
import TradePassword from './TradePassword'

export default function TradeModal({
  modalOpen,
  setModalOpen,
  stockCode,
  stockNameResult,
  staticStockPrice,
  myMoney,
}: TradeModalProps) {
  const closeModal = () => {
    setModalOpen(false)
  }
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className="bg-black/60 fixed inset-0 z-[100] flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="fixed inset-x-0 top-1/2 bottom-0 flex flex-col border rounded-t-3xl bg-white"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={handleModalClick}
          >
            <div
              className="right-0 top-0 absolute m-5 cursor-pointer"
              onClick={closeModal}
            >
              <Image
                src="/assets/images/close.svg"
                alt="close"
                width={25}
                height={25}
              />
            </div>
            <TradePassword />
            {/* <TradeMoney
              stockCode={stockCode}
              stockNameResult={stockNameResult}
              staticStockPrice={staticStockPrice}
              myMoney={myMoney}
            /> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
