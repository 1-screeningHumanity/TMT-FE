import Charts from '@/components/pages/stock/Charts'
import CompanyInfo from '@/components/pages/stock/CompanyInfo'
import Trade from '@/components/pages/stock/Trade'

export default async function Page({
  params,
}: {
  params: { StockCode: string }
}) {
  const stockCode = params.StockCode
  return (
    <main>
      <Charts params={{ StockCode: stockCode }} />
      <CompanyInfo />
      <Trade />
    </main>
  )
}
