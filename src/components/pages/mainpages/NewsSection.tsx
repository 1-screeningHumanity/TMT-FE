'use client'
import { newsType } from '@/types/newsType'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { useState, useEffect } from 'react'
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
        disableOnInteraction: false,
      }}
    >
      {data.map((news) => (
        <SwiperSlide key={news.id}>
          <a href={news.originallink} className="m-4">
            <section className="relative flex flex-col bg-slate-50 overflow-hidden w-1/3 h-auto">
              <div className="w-full aspect-w-1 aspect-h-1">
                <img
                  src={news.image}
                  alt={news.description}
                  className="object-cover w-full h-full"
                />
              </div>
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
