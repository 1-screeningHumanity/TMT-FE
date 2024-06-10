import Headers from '@/components/ui/Headers'
import StockNamePrice from '@/components/pages/stock/StockNamePrice'
import { getStockName } from '@/actions/stock/stock'
import Link from 'next/link'
import SelectedTap from '@/components/pages/stock/SelectedTap'
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { StockCode: string }
}>) {
  const stockNameResult = await getStockName(params.StockCode)

  return (
    <div>
      <StockNamePrice
        stockName={stockNameResult?.stockName}
        stockCode={params.StockCode}
      />
      <div className="bg-slate-100 mx-3 h-12"> </div>
      <SelectedTap params={params} />
      {children}
    </div>
  )
}
