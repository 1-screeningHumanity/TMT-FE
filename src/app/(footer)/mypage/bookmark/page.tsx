import { GetBookMartListAPI } from "@/actions/bookmark";
import BookMarkBox from "@/components/ui/BookMarkBox"
import TitleOfPages from "@/components/ui/TitleOfPages"
import { bookmarkDataType } from "@/types/bookmarkDataType";

export default async function bookmark(){

  const res = await GetBookMartListAPI();
  const bookmarkList = res?.data;

  return (
    <div>
      <TitleOfPages title="즐겨찾기"/>
      { bookmarkList?.length === 0 ? <p className="text-center my-10 text-slate-500">즐겨찾기한 종목이 없습니다.</p> :
        bookmarkList?.map((item : bookmarkDataType) => 
          <BookMarkBox key={item.id} stockName={item.stockName} stockCode={item.stockCode} price={item.price} prdy_ctrt={item.prdy_ctrt}/>
        )
      }
    </div>
  )
}