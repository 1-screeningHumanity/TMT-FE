import Headers from '@/components/ui/Headers'
import StockNamePrice from '@/components/pages/stock/StockNamePrice'
import Charts from '@/components/pages/stock/Charts'
import Charts2 from '@/components/pages/stock/Charts2'
import OptionButtons from '@/components/pages/stock/OptionButtons'
import CompanyInfo from '@/components/pages/stock/CompanyInfo'

export default function Page() {
  return (
    <main>
      <Headers />
      <StockNamePrice />
      <Charts />
      {/* <Charts2 /> */}
      <OptionButtons />
      <CompanyInfo />
    </main>
  )
}
