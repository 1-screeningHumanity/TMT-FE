import {
  getStaticStockPrice,
  getStockData,
  getStockName,
} from '@/actions/stock/stock'
import Charts from '@/components/pages/stock/Charts'
import CompanyInfo from '@/components/pages/stock/CompanyInfo'
import PageGuideUI from '@/components/pages/stock/PageGuide/PageGuideUI'
import StockNews from '@/components/pages/stock/StockNews'
import Trade from '@/components/pages/stock/Trade'
import { StockChartDataType } from '@/types/Stock'
import timeCheck from '@/utils/timeCheck'

export default async function Page(params: any) {
  const stockCode = params.params.StockCode
  let nowLink = params.searchParams.when

  const stockNameResult = await getStockName(stockCode)
  if (nowLink === undefined) {
    nowLink = 'year'
  }
  const staticStockPrice = await getStaticStockPrice(stockCode)
  let stockData: StockChartDataType[] = []
  if (nowLink !== 'real-time') {
    stockData = await getStockData(stockCode, nowLink)
  } else {
    stockData = await getStockData(stockCode, 'year')
  }

  // console.log
  return (
    <main>
      <PageGuideUI />
      <Charts
        params={{
          stockCode: stockCode,
          stockData: stockData,
          nowLink: nowLink,
          staticStockPrice: { staticStockPrice },
        }}
      />
      {/* <CompanyInfo /> */}
      <Trade
        stockCode={stockCode}
        stockName={stockNameResult?.stockName}
        staticStockPrice={staticStockPrice}
      />
      <StockNews stockName={stockNameResult?.stockName} />
    </main>
  )
}
