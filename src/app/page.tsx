import 'regenerator-runtime/runtime'
import SearchBarUI from '@/components/ui/SearchBarUI'
import Headers from '@/components/ui/Headers'
import Footer from '@/components/ui/Footer'
import Kospi from '@/components/pages/mainpages/Kospi'
import { KosdaqAPI, KospiAPI, sortAPI } from '@/actions/stock/mainpage'
import { kospiType } from '@/types/Mainpage'
import Kosdaq from '@/components/pages/mainpages/Kosdaq'
import { dateFormmating } from '@/utils/time'
import Soaring from '@/components/pages/mainpages/Soaring'
import { StockSortType } from '@/types/StcokSortType'
import Link from 'next/link'

export default async function Home() {
  const kospiData: kospiType = await KospiAPI()
  const kosdaqData: kospiType = await KosdaqAPI()
  const soaringData = await sortAPI('soaring-stocks')
  const plummetingData = await sortAPI('plummeting-stocks')
  const top3soaring: StockSortType[] = soaringData.slice(0, 3)
  const top3plummeting: StockSortType[] = plummetingData.slice(0, 3)

  const date = dateFormmating(kospiData.dateTime)

  return (
    <div>
      <Headers title="홈" />
      <SearchBarUI />
      <span className="font-bold text-xl m-3 ">국내 시장 지표</span>
      <div className="ml-3 my-1">{date} 기준</div>
      <div className="flex">
        <Kospi data={kospiData} />
        <Kosdaq data={kosdaqData} />
      </div>
      <span className="font-bold text-xl m-3">오늘의 급등주 Top3</span>
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'soaring-stocks' } }}
      >
        <Soaring data={top3soaring} color={'red'} />
      </Link>
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'plummeting-stocks' } }}
      >
        <Soaring data={top3plummeting} color={'blue'} />
      </Link>
      <Footer />
    </div>
  )
}
