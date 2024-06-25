import { newsType } from '@/types/newsType'

export default function NewsSection(newsData: { newsData: newsType }) {
  const news = newsData.newsData
  return (
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
  )
}
