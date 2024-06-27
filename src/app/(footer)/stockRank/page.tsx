'use server'
import { sortAPI } from '@/actions/stock/mainpage'
import { dateFormmating } from '@/utils/time'
import { StockSortType } from '@/types/StcokSortType'
import SortButton from '@/components/pages/stock/SortButton'
import SortRank from '@/components/pages/stock/SortRank'
import Headers from '@/components/ui/Headers'
import TitleOfPages from '@/components/ui/TitleOfPages'
// import { searchParams } from 'next/navigation'

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  // let option = props?.searchParams.sort
  const query = searchParams
  const option = query?.sort || 'soaring-stocks'
  const sortResult: StockSortType[] = await sortAPI(option)

  let date = dateFormmating(sortResult[0]?.dateTime)

  return (
    <main>
      <TitleOfPages title="급등 / 급락주" />
      <SortButton />
      <span className="text-center block text-indigo-600 my-4">{date} 기준입니다.</span>
      <SortRank sortResult={sortResult} />
    </main>
  )
}
