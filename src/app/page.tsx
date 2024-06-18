import 'regenerator-runtime/runtime'
import SearchBarUI from '@/components/ui/SearchBarUI'
import Headers from '@/components/ui/Headers'
import Footer from '@/components/ui/Footer'
import Kospi from '@/components/pages/mainpages/Kospi'
import { KosdaqAPI, KospiAPI } from '@/actions/stock/mainpage'
import { kospiType } from '@/types/Mainpage'
import Kosdaq from '@/components/pages/mainpages/Kosdaq'
import { dateFormmating } from '@/utils/time'

export default async function Home() {
  const kospiData: kospiType = await KospiAPI()
  const kosdaqData: kospiType = await KosdaqAPI()
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

      <Footer />
    </div>
  )
}
