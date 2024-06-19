import { KosdaqAPI, KospiAPI } from '@/actions/stock/mainpage'
import { kospiType } from '@/types/Mainpage'
import { dateFormmating } from '@/utils/time'
import Kospi from './Kospi'
import Kosdaq from './Kosdaq'

export default async function SearchBar() {
  const kospiData: kospiType = await KospiAPI()
  const kosdaqData: kospiType = await KosdaqAPI()
  const date = dateFormmating(kospiData.dateTime)
  return (
    <section>
      <div>
        <span className="font-bold text-xl  ml-5 ">국내 시장 지표</span>
        <div className="ml-5 my-1 text-sm">{date} 기준</div>
      </div>
      <div className="flex mb-3">
        <Kospi data={kospiData} />
        <Kosdaq data={kosdaqData} />
      </div>
    </section>
  )
}
