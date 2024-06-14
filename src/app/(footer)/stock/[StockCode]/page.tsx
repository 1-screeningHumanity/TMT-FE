import {
  getStaticStockPrice,
  getStockData,
  getStockName,
} from '@/actions/stock/stock'
import Charts from '@/components/pages/stock/Charts'
import CompanyInfo from '@/components/pages/stock/CompanyInfo'
import Trade from '@/components/pages/stock/Trade'
import { StockChartDataType } from '@/types/Stock'

export default async function Page(params: any) {
  console.log(params)
  const stockCode = params.params.StockCode
  let nowLink = params.searchParams.when

  const stockNameResult = await getStockName(stockCode)
  if (nowLink === undefined) {
    nowLink = 'day'
  }
  const staticStockPrice = await getStaticStockPrice(stockCode)

  const stockData: StockChartDataType[] = await getStockData(stockCode, nowLink)
  const stockPrice = await getStaticStockPrice(stockCode)
  console.log(stockPrice)
  return (
    <main>
      <Charts
        params={{
          stockCode: stockCode,
          stockData: stockData,
          nowLink: nowLink,
        }}
      />
      {/* <CompanyInfo /> */}
      <Trade
        stockCode={params.StockCode}
        stockName={stockNameResult.stockName}
        // staticStockPrice = {staticStockPrice}
      />
    </main>
  )
}
