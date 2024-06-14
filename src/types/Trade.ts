import { staticStockType } from '@/types/Stock'
interface TradeType {
  stockCode: string
  price: number
  amount: number
  stockName: string
}

interface TradeModalProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  stockCode: string
  stockNameResult: string
  staticStockPrice: staticStockType
}

export type { TradeType, TradeModalProps }
