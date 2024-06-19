import { sortAPI } from '@/actions/stock/mainpage'
import Soaring from '@/components/pages/mainpages/Soaring'
import { StockSortType } from '@/types/StcokSortType'
import Link from 'next/link'

export default async function TopRank() {
  const soaringData = await sortAPI('soaring-stocks')
  const plummetingData = await sortAPI('plummeting-stocks')
  const top3soaring: StockSortType[] = soaringData.slice(0, 3)
  const top3plummeting: StockSortType[] = plummetingData.slice(0, 3)
  return (
    <section>
      <span className="font-bold text-xl m-5 ">오늘의 급등주 Top3</span>
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'soaring-stocks' } }}
      >
        <Soaring data={top3soaring} color={'red'} />
      </Link>

      <Link
        href={{
          pathname: '/stockRank',
          query: { sort: 'plummeting-stocks' },
        }}
      >
        <Soaring data={top3plummeting} color={'blue'} />
      </Link>
    </section>
  )
}
