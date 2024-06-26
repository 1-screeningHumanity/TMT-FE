import { mainNewsAPI } from '@/actions/search'
import { newsType } from '@/types/newsType'

export default async function StockNews(stockName: { stockName: string }) {
  const StockName = stockName.stockName

  const newsData: newsType[] = await mainNewsAPI(StockName)
  return (
    <section className="flex flex-wrap justify-center p-2 mt-2">
      <span className="font-bold text-2xl text-center">관련뉴스</span>
      {newsData.map((news) => (
        <a href={news.originallink} className="m-4 flex w-full items-start">
          <div className="w-28 h-28 flex-shrink-0">
            <img
              src={news.image} // Placeholder for null images
              alt={news.description}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-4 flex-grow">
            <span
              dangerouslySetInnerHTML={{ __html: news.title }}
              className="font-bold line-clamp-2"
            ></span>
            <p
              className="text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: news.description }}
            ></p>
          </div>
        </a>
      ))}
    </section>
  )
}
