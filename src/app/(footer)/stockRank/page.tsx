import { sortAPI } from '@/actions/stock/sort'
import { dateFormmating } from '@/utils/time'
import { StockSortType } from '@/types/StcokSortType'
import SortButton from '@/components/pages/stock/SortButton'
import SortRank from '@/components/pages/stock/SortRank'
// import { searchParams } from 'next/navigation'

export default async function Page(props: any) {
  let option = props?.searchParams.sort
  if (option == undefined) {
    option = 'soaring-stocks'
  }
  const sortResult: StockSortType[] = await sortAPI(option)

  let date = dateFormmating(sortResult[0]?.dateTime)

  return (
    <main>
      <SortButton />
      <span className="ml-2 text-center">{date} 기준입니다.</span>
      <SortRank sortResult={sortResult} />
    </main>
  )
}
