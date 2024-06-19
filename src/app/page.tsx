import 'regenerator-runtime/runtime'
import SearchBarUI from '@/components/ui/SearchBarUI'
import Headers from '@/components/ui/Headers'
import Footer from '@/components/ui/Footer'

import DomesticIndex from '@/components/pages/mainpages/DomesticIndex'
import TopRank from '@/components/pages/mainpages/TopRank'

export default async function Home() {
  return (
    <main>
      <Headers title="홈" />
      <div className="mx-2 h-[80dvh] space-y-5">
        <SearchBarUI />
        <DomesticIndex />
        <TopRank />
      </div>
      <Footer />
    </main>
  )
}
