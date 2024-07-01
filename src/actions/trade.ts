import { TradeType } from '@/types/Stock'
import { DeleteAPI, PostAPI } from './fetchAPI'
import { getAccessToken } from './tokens'

async function cancleReservationBuy(id: number) {
  const TOKEN = await getAccessToken()
  const res = await DeleteAPI(`/trade/reservation/buy/${id}`, undefined, TOKEN)
  return res
}

async function cancleReservationSale(id: number) {
  const TOKEN = await getAccessToken()
  const res = await DeleteAPI(`/trade/reservation/sale/${id}`, undefined, TOKEN)
  return res
}
async function tradeStock(trade: string, tradeMoney: TradeType) {
  const token = await getAccessToken()
  const response = await PostAPI(`/trade/${trade}`, tradeMoney, token)
  return response
}
async function tradeReservation(trade: string, tradeMoney: TradeType) {
  const token = await getAccessToken()
  const response = await PostAPI(
    `/trade/reservation/${trade}`,
    tradeMoney,
    token,
  )
  return response
}
async function checkTradePassword(payingPassword: string) {
  const token = await getAccessToken()
  const response = await PostAPI(
    `/member/pay-password/check`,
    { payingPassword },
    token,
  )
  return response
}

export {
  cancleReservationBuy,
  cancleReservationSale,
  tradeStock,
  tradeReservation,
  checkTradePassword,
}
