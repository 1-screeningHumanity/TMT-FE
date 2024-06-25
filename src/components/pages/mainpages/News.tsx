import { mainNewsAPI } from '@/actions/search'
import { newsType } from '@/types/newsType'
import Image from 'next/image'

export default async function News() {
  const randomArr = [
    '시장 동향',
    '투자 전략',
    '증권 분석',
    '뉴스',
    '주가 예측',
    '배당주',
    '테마주',
    '증시 전망',
    '투자',
    '종목',
    '주식',
    '오늘의 특징주',
    '오늘의 이슈',
    '주식 추천',
    '상한가',
    '하한가',
    '상승',
    '하락',
    '코스피',
    '코스닥',
  ]
  const randomIndex = Math.floor(Math.random() * randomArr.length)
  const newsData: newsType[] = await mainNewsAPI(randomArr[randomIndex])
  console.log(newsData)

  return (
    <>
      <main className="flex flex-wrap justify-around">
        {newsData.map((news: newsType) => (
          <a href={news.originallink} key={news.id} className="m-4">
            <section className="relative flex flex-col  w-[300px] h-[300px] bg-slate-50 overflow-hidden">
              <img
                src={news.image} //  null 이 올수도 있음
                alt={news.description}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                <div dangerouslySetInnerHTML={{ __html: news.title }}></div>
              </div>
            </section>
          </a>
        ))}
      </main>
    </>
  )
}
