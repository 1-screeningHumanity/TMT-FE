import 'regenerator-runtime/runtime'
import Footer from '@/components/ui/Footer'
import DomesticIndex from '@/components/pages/mainpages/DomesticIndex'
import TopRank from '@/components/pages/mainpages/TopRank'
import News from '@/components/pages/mainpages/News'
import MainHeader from '@/components/layouts/MainHeader'
import dynamic from 'next/dynamic'
import { KosdaqAPI, KospiAPI, sortAPI } from '@/actions/stock/mainpage'
import { Suspense, createElement } from 'react'
import MyStatus from '@/components/pages/mainpages/MyStatus'
import MyWallet from '@/components/pages/mainpages/MyWallet'
import { getServerSession } from 'next-auth'
import options from './api/auth/[...nextauth]/options'
import { getSession } from 'next-auth/react'
import { getAccessToken } from '@/actions/tokens'

const SkeletonCard = dynamic(
  () => import('@/components/skeletons/SkeletonCard'),
  { ssr: false },
)

const getData = async () => {
  const data = await Promise.all([
    KospiAPI(),
    KosdaqAPI(),
    sortAPI('soaring-stocks'),
    sortAPI('plummeting-stocks'),
  ])
  return data
}
export default async function Home() {
  const data = await getData()
  const tokens = await getAccessToken()
  const token = tokens.split(' ')[1]

  const delayIncrement = 200
  const homeSections = [
    {
      id: 1,
      title: '나의 순위',
      data: [],
      component: MyStatus,
    },
    {
      id: 2,
      title: '현재 보유 자산',
      data: [],
      component: MyWallet,
    },
    {
      id: 3,
      title: '국내 시장 지표',
      data: [data[0], data[1]],
      component: DomesticIndex,
    },
    {
      id: 4,
      title: '종목별 순위',
      data: [data[2], data[3]],
      component: TopRank,
    },
  ]
  const filteredSections =
    token == undefined
      ? homeSections
      : homeSections.filter((section) => section.id > 2)

  return (
    <>
      {/* <MainHeader /> */}
      <main className="space-y-5 min-h-[100vh] container bg-slate-100">
        {/* <SearchBarUI /> */}
        {filteredSections.map((section) => (
          <Suspense key={section.id} fallback={<SkeletonCard />}>
            <section>
              {createElement(section.component, {
                data: section.data,
                delay: delayIncrement * section.id,
              })}
            </section>
          </Suspense>
        ))}
        <News />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </main>
      <Footer />
    </>
  )
}
