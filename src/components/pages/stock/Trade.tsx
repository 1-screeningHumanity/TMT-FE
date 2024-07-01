'use client'
import { getAccessToken } from '@/actions/tokens'
import { wonInfoAPI } from '@/actions/wallet'
import TradeModal from '@/components/pages/stock/TradeModal'
import { toast } from '@/components/ui/use-toast'
import { staticStockType } from '@/types/Stock'
import { socketStockCode } from '@/utils/socketStockCode'
import timeCheck from '@/utils/timeCheck'
import React, { useEffect, useState } from 'react'

export default function Trade({
  stockCode,
  stockName,
  staticStockPrice,
}: {
  stockCode: string
  stockName: string
  staticStockPrice: staticStockType
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [socketFlag, setSocketFlag] = useState<boolean>(false)
  const [myMoney, setMyMoney] = useState<number>(0)
  const check = timeCheck()

  useEffect(() => {
    if (socketStockCode.includes(stockCode) && check === true) {
      setSocketFlag(true)
    }
    wonInfo()
  }, [])

  const wonInfo = async () => {
    const token = await getAccessToken()

    if (token !== 'Bearer undefined') {
      const res = await wonInfoAPI()
      setMyMoney(res.data.won as number)
    }
  }

  const LoginCheck = async () => {
    const token = await getAccessToken()

    if (token === 'Bearer undefined') {
      toast({
        title: '로그인이 필요합니다.',
        variant: 'destructive',
      })
    } else {
      setModalOpen(true)
    }
  }

  return (
    <section className="Trade">
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-white justify-center">
        <div className="mt-5 mx-5 flex justify-between ">
          <button
            className="w-5/12 h-14 font-bold text-white rounded-2xl"
            style={{ backgroundColor: '#0B0B0B' }}
            onClick={() => LoginCheck()}
          >
            팔기
          </button>
          <button
            className="w-5/12 h-14 font-bold text-white rounded-2xl"
            style={{ backgroundColor: '#7D12FF' }}
            onClick={() => LoginCheck()}
          >
            사기
          </button>
        </div>

        <TradeModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          stockCode={stockCode}
          stockNameResult={stockName}
          staticStockPrice={staticStockPrice}
          myMoney={myMoney}
        />
      </div>
    </section>
  )
}
