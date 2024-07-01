'use client'
import { mainNewsAPI } from '@/actions/search'
import { newsType } from '@/types/newsType'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function News() {
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
  const [data, setData] = useState<newsType[] | null>(null)
  useEffect(() => {
    async function fetchData() {
      const res = await mainNewsAPI(randomArr[randomIndex])
      setData(res)
    }
    fetchData()
  }, [])
  const bgWhite = '/assets/images/bgWhite.svg'
  return (
    <>
      <section className="flex  justify-around">
        <Swiper
          className="w-full h-auto"
          loop={true}
          spaceBetween={50}
          slidesPerView={1.5}
          centeredSlides={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
          }}
        >
          {data?.map((news) => (
            <SwiperSlide key={news.id}>
              <a
                href={news.originallink}
                className="m-4 overflow-hidden w-1/3 h-auto"
              >
                <section className=" flex flex-col  bg-slate-50">
                  <img
                    src={news.image == null ? bgWhite : news.image}
                    alt={news.description}
                    className="object-fill justify-center items-center"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                    <span
                      dangerouslySetInnerHTML={{ __html: news.title }}
                      className="line-clamp-2"
                    ></span>
                  </div>
                </section>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}
