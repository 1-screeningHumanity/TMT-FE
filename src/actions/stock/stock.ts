import { GetAPI, PostAPI } from '../fetchAPI'
import { TradeType } from '@/types/Stock'
async function getStockName(stockCode: string) {
  const response = await GetAPI(`/stockitem/${stockCode}/name`)

  return response.data
}

async function getStaticStockPrice(stockCode: string) {
  const response = await GetAPI(`/stockitem/chart/${stockCode}/price`)
  return response.data
}
async function getStaticStockAskPrice(stockCode: string) {
  const response = await GetAPI(`/stockitem/${stockCode}/asking-price`)
  return response.data
}
async function getChartData({
  stockCode,
  date,
}: {
  stockCode: string
  date: string
}) {
  const response = await GetAPI(`/stcokitem/chart/${stockCode}/${date}`)
  return response.data
}

async function getInvestors(stockCode: string) {
  const response = await GetAPI(`/stockitem/${stockCode}/investors`)

  return response.data
}
async function tradeStock(trade: string, tradeMoney: TradeType) {
  const response = await PostAPI(`/trade/${trade}`, tradeMoney, 'token')
  return response.data
}

async function getStockData(stockCode: string, when: string) {
  const response = await GetAPI(`/stockitem/chart/${stockCode}/${when}`)
  return response.data
}

export {
  getStockName,
  getChartData,
  getInvestors,
  tradeStock,
  getStockData,
  getStaticStockPrice,
  getStaticStockAskPrice,
}
