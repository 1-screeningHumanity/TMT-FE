import 'regenerator-runtime/runtime'
import SearchBarUI from '@/components/ui/SearchBarUI'
import Headers from '@/components/ui/Headers'
import Footer from '@/components/ui/Footer'

import DomesticIndex from '@/components/pages/mainpages/DomesticIndex'
import TopRank from '@/components/pages/mainpages/TopRank'
import ButtonOfSignin from '@/components/ui/buttons/ButtonOfSignin'
import ButtonToSignin from '@/components/ui/buttons/ButtonToSignin'
import ButtonOfSignup from '@/components/ui/buttons/ButtonOfSignup'
import News from '@/components/pages/mainpages/News'

export default async function Home() {
  return (
    <>
      <Headers title="홈" />
      <main>
        <div className="mx-2 h-[80dvh] space-y-5 mb-40">
          <SearchBarUI />
          <DomesticIndex />
          <TopRank />
          {/* <ButtonOfSignin /> */}
          {/* {/* <ButtonOfSignup /> */}
          <News />
        </div>
      </main>
      <Footer />
    </>
  )
}
