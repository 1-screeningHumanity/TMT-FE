import Headers from '@/components/ui/Headers'
import StockNamePrice from '@/components/pages/stock/StockNamePrice'
import { getStaticStockPrice, getStockName } from '@/actions/stock/stock'

import SelectedTap from '@/components/pages/stock/SelectedTap'

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { StockCode: string }
}>) {
  const stockNameResult = await getStockName(params.StockCode)
  const stockPrice = await getStaticStockPrice(params.StockCode)
  return (
    <>
      <div className="fixed top-0 w-full bg-white z-[20]">
        <Headers />
        <StockNamePrice
          stockName={stockNameResult?.stockName}
          stockCode={params.StockCode}
          stockPrice={stockPrice}
        />
        <div className="bg-slate-100 mx-3 h-12"> </div>
        <SelectedTap params={params} />
      </div>
      <main className=" relative top-[250px] overflow-y-auto">{children}</main>
    </>
  )
}
