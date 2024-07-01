import { getStaticStockPrice, getStockName } from '@/actions/stock/stock'
import Charts from '@/components/pages/stock/Charts'
import GuideOpen from '@/components/pages/stock/PageGuide/GuideOpen'
import StockNews from '@/components/pages/stock/StockNews'
import Trade from '@/components/pages/stock/Trade'
import {
  getSecondsUntilNext9AM,
  getSecondsUntilNextMonth1st,
} from '@/utils/chachingDateTime'

async function getStockData(stockCode: string, now_link: string) {
  let when = now_link
  let revalidate
  if (now_link === 'real-time') {
    when = 'day'
  }
  if (now_link === 'day' || now_link === 'week') {
    revalidate = getSecondsUntilNext9AM()
  }
  if (now_link === 'month') {
    revalidate = getSecondsUntilNextMonth1st()
  }
  const res = await fetch(
    `${process.env.API_BASE_URL}/stockitem/chart/${stockCode}/${when}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: revalidate },
    },
  )

  return res.json()
}

export default async function Page(params: any) {
  const stockCode = params.params.StockCode
  let nowLink = params.searchParams.when

  const stockNameResult = await getStockName(stockCode)
  if (nowLink === undefined) {
    nowLink = 'year'
  }
  const staticStockPrice = await getStaticStockPrice(stockCode)
  const stockDatas = await getStockData(stockCode, nowLink)

  const stockData = stockDatas.data

  // console.log
  return (
    <main className="pb-16">
      <GuideOpen />
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
