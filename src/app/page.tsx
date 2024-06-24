import { KosdaqAPI, KospiAPI, sortAPI } from '@/actions/stock/mainpage';
import DomesticIndex from '@/components/pages/mainpages/DomesticIndex';
import TopRank from '@/components/pages/mainpages/TopRank';
import MyStatus from '@/components/pages/mainpages/MyStatus';
import MyWallet from '@/components/pages/mainpages/MyWallet';
import { Suspense, createElement } from 'react';
import dynamic from 'next/dynamic';

const SkeletonCard = dynamic(() => import('@/components/skeletons/SkeletonCard'), { ssr: false });

const getData = async () => {
  const data = await Promise.all([
    KospiAPI(),
    KosdaqAPI(),
    sortAPI('soaring-stocks'),
    sortAPI('plummeting-stocks'),
  ]);
  console.log(data);
  return data;
};

export default async function Home() {
  const data = await getData();
  const delayIncrement = 200;
  const sections = [
    {
      id: 1,
      title: '나의 순위',
      data: [],
      component: MyStatus,
    },
    {
      id: 2,
      title: '현재보유 총자산',
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
  ];

  return (
    <main className="space-y-5 py-[5rem] min-h-[100vh] container bg-slate-100">
      {sections.map((section) => (
        <Suspense key={section.id} fallback={<SkeletonCard />}>
          <section>
          {/* <section key={section.id}> */}
          {/* <section className="animateIn" style={{ animationDelay: `${(section.id - 1) * delayIncrement}ms` }}> */}
            {createElement(section.component, {
              data: section.data,
              delay: section.id * delayIncrement,
            })}
          </section>
        </Suspense>
      ))}
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </main>
  );
}
