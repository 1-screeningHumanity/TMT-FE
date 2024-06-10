import { getStockData, getStockName } from '@/actions/stock/stock'
import Charts from '@/components/pages/stock/Charts'
import CompanyInfo from '@/components/pages/stock/CompanyInfo'
import Trade from '@/components/pages/stock/Trade'
import { StockChartDataType } from '@/types/Stock'

export default async function Page(params: any) {
  console.log(params)
  const stockCode = params.params.StockCode
  const nowLink = params.searchParams.when

  const stockNameResult = await getStockName(stockCode)

  const stockData: StockChartDataType[] = await getStockData(stockCode, nowLink)

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
      />
    </main>
  )
}
