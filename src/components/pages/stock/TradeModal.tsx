'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TradeModalProps } from '@/types/Trade'
import TradeMoney from './TradeMoney'
import TradePassword from './TradePassword'
import { socketStockCode } from '@/utils/socketStockCode'
import timeCheck from '@/utils/timeCheck'

export default function TradeModal({
  modalOpen,
  setModalOpen,
  stockCode,
  stockNameResult,
  staticStockPrice,
  myMoney,
}: TradeModalProps) {
  const [socketFlag, setSocketFlag] = useState<boolean>(false)
  const closeModal = () => {
    setModalOpen(false)
  }
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const check = timeCheck()
  useEffect(() => {
    if (socketStockCode.includes(stockCode) && check === true) {
      setSocketFlag(true)
    }
  }, [])
  const [step, setStep] = useState<number>(1)

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
            className="fixed inset-x-0 top-1/3 bottom-0 flex flex-col border rounded-t-3xl bg-white"
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

            <div className=" flex justify-center p-2">
              <div
                className=" h-3 w-12 justify-center flex items-center mr-2"
                style={{ backgroundColor: step === 1 ? '#0539f5' : '#d9d9d9' }}
              ></div>
              <div
                className="h-3 w-12 justify-center flex items-center ml-2"
                style={{ backgroundColor: step === 2 ? '#0539f5' : '#d9d9d9' }}
              ></div>
            </div>
            {step === 1 && <TradePassword step={step} setStep={setStep} />}
            {step === 2 && (
              <TradeMoney
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                stockCode={stockCode}
                stockNameResult={stockNameResult}
                staticStockPrice={staticStockPrice}
                myMoney={myMoney}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
