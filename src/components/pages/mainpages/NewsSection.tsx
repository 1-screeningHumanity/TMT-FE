'use client'
import { newsType } from '@/types/newsType'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function NewsSection(newsData: { newsData: newsType[] }) {
  const data = newsData.newsData

  return (
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
      {data.map((news) => (
        <SwiperSlide key={news.id}>
          <a href={news.originallink} className="m-4">
            <section className="relative flex flex-col  bg-slate-50 overflow-hidden w-[250px] h-[250px] ">
              <img
                src={news.image} //  null 이 올수도 있음
                alt={news.description}
                className="object-cover "
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                <div dangerouslySetInnerHTML={{ __html: news.title }}></div>
              </div>
            </section>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
