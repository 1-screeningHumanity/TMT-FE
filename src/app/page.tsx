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
    <main>
      <Headers title="홈" />
      <div className="mx-2 h-[80dvh] space-y-5">
        <SearchBarUI />
        <section>
          <span className="font-bold text-xl  ml-5 ">국내 시장 지표</span>
          <div className="ml-5 my-1 text-sm">{date} 기준</div>
        </section>
        <section className="flex mb-3">
          <Kospi data={kospiData} />
          <Kosdaq data={kosdaqData} />
        </section>
        <section>
          <span className="font-bold text-xl m-5 ">오늘의 급등주 Top3</span>
          <Link
            href={{ pathname: '/stockRank', query: { sort: 'soaring-stocks' } }}
          >
            <Soaring data={top3soaring} color={'red'} />
          </Link>
        </section>
        <section>
          <Link
            href={{
              pathname: '/stockRank',
              query: { sort: 'plummeting-stocks' },
            }}
          >
            <Soaring data={top3plummeting} color={'blue'} />
          </Link>
        </section>
      </div>
      <Footer />
    </main>
  )
}
