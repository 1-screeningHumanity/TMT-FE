import Headers from '@/components/ui/Headers'
import StockNamePrice from '@/components/pages/stock/StockNamePrice'
import { getStaticStockPrice, getStockName } from '@/actions/stock/stock'

import SelectedTap from '@/components/pages/stock/SelectedTap'
import NotFound from '@/app/not-found'
import MainHeader from '@/components/layouts/MainHeader'

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { StockCode: string }
}>) {
  const stockNameResult = await getStockName(params.StockCode)
  const stockPrice = await getStaticStockPrice(params.StockCode)
  console.log(stockNameResult, stockPrice)
  if (stockNameResult === null || stockPrice === null) {
    return <NotFound />
  }
  return (
    <>
      <div className="fixed top-0 w-full  z-[20]">
        <MainHeader />
        <div className="relative top-16">
          <StockNamePrice
            stockName={stockNameResult?.stockName}
            stockCode={params.StockCode}
            stockPrice={stockPrice}
          />
          <div className="bg-white mx-3 h-8" />
          <SelectedTap params={params} />
        </div>
      </div>
      <main className=" relative top-[150px] overflow-y-auto">{children}</main>
    </>
  )
}
