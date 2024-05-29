import Headers from '@/components/ui/Headers'
import StockNamePrice from '@/components/pages/stock/StockNamePrice'
import Charts from '@/components/pages/stock/Charts'
import CompanyInfo from '@/components/pages/stock/CompanyInfo'
import Trade from '@/components/pages/stock/Trade'
import { getStockName } from '@/actions/stock/stock'
import { useEffect } from 'react'

export default async function Page({
  params,
}: {
  params: { StockCode: string }
}) {
  const stockNameResult = await getStockName(params.StockCode)
  console.log(stockNameResult?.stockName)
  return (
    <main>
      <Headers />
      <StockNamePrice
        stockName={stockNameResult?.stockName}
        stockCode={params.StockCode}
      />
      <Charts />
      <CompanyInfo />
      <Trade />
    </main>
  )
}
