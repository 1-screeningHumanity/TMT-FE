'use client'
import {
  DeleteBookMarkAPI,
  GetBookMarkAPI,
  PostBookMarkAPI,
} from '@/actions/bookmark'
import bookmark from '@/app/(footer)/mypage/bookmark/page'
import { bookmarkDataType } from '@/types/Stock'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useToast } from './use-toast'
import { getSession } from 'next-auth/react'
import { tree } from 'next/dist/build/templates/app-page'
export default function Bookmark(stockCode: {
  stockCode: string
  stockName: string
}) {
  const StockCode = stockCode.stockCode
  const StockName = stockCode.stockName
  const [IsBookmark, setIsBookmark] = useState<boolean>(false)
  const { toast } = useToast()
  const getBookmark = async () => {
    const session = await getSession()
    if (session != undefined) {
      const res = await GetBookMarkAPI(StockCode)
      setIsBookmark(res.data.isBookmark)
    }
  }

  useEffect(() => {
    getBookmark()
  }, [IsBookmark])

  const handleBookmark = async () => {
    if (IsBookmark === false) {
      const bookmarkData: bookmarkDataType = {
        stockCode: StockCode,
        stockName: StockName,
      }

      const res = await PostBookMarkAPI(bookmarkData)
      if (res.isSuccess !== true) {
        toast({
          title: '즐겨찾기 등록에 실패하였습니다.',
          variant: 'destructive',
        })
      } else {
        setIsBookmark(true)
      }
    } else {
      const res = await DeleteBookMarkAPI(StockCode)
      if (res.isSuccess != true) {
        toast({
          title: '즐겨찾기 삭제에 실패하였습니다.',
          variant: 'destructive',
        })
      } else {
        setIsBookmark(false)
      }
    }
  }

  return (
    <div className="w-12 h-12 " onClick={handleBookmark}>
      {IsBookmark ? (
        <Image
          src="/assets/images/bookmark.svg"
          alt="bookmark"
          width={48}
          height={48}
          className="object-contain p-2"
          style={{ width: '48px', height: '48px' }}
        />
      ) : (
        <Image
          src="/assets/images/unbookmark.svg"
          alt="bookmark"
          width={48}
          height={48}
          className="object-contain p-2"
          style={{ width: '48px', height: '48px' }}
        />
      )}
    </div>
  )
}
