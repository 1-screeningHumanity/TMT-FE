import { GetAPI } from '../FetchAPI'

async function getStockName(stockCode: string) {
  const response = await GetAPI(`/stockitem/${stockCode}/name`)

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
export { getStockName, getChartData, getInvestors }
