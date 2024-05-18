import Headers from '@/components/ui/Headers'
import StockNamePrice from '@/components/pages/stock/StockNamePrice'
import Charts from '@/components/pages/stock/Charts'
import OptionButtons from '@/components/pages/stock/OptionButtons'
import CompanyInfo from '@/components/pages/stock/CompanyInfo'

export default function Page() {
  return (
    <main>
      <Headers />
      <StockNamePrice />
      <Charts />
      <OptionButtons />
      <CompanyInfo />
    </main>
  )
}
