import { mainNewsAPI } from '@/actions/search'
import { newsType } from '@/types/newsType'
import Image from 'next/image'
import NewsSection from './NewsSection'

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
          <NewsSection newsData={news} />
        ))}
      </main>
    </>
  )
}
