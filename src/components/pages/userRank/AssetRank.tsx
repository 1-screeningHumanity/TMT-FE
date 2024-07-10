'use client'

import MyRankBox from './MyRankBox'
import RankBox from './RankBox'
import RankHeader from './RankHeader'
import { getPreviousDay4PM } from '@/utils/time'
import { getAssetRank, getMyAssetRank } from '@/actions/userRank'
import { assetRankDataType } from '@/types/rankBoxType'
import { dailyAggregateTimeRange } from '@/utils/aggregateTimeCheck'
import PopOverBox from '@/components/ui/PopOverBox'
import { use, useEffect, useRef, useState } from 'react'
import { set } from 'firebase/database'

export default function AssetRank() {
  const [myRankInfo, setMyRankInfo] = useState<assetRankDataType | null>(null)
  const [assetRank, setAssetRank] = useState<assetRankDataType[]>([])
  const [page, setPage] = useState<number>(0)
  const observerRef = useRef<HTMLDivElement>(null)
  const date = getPreviousDay4PM()
  const isValid = dailyAggregateTimeRange()

  const fetchRankData = async (currentPage: number) => {
    if (!isValid) {
      const res = await getAssetRank(currentPage)
      const resData = res?.data?.content

      setAssetRank((prev) => {
        const newRank = resData.filter((rank: assetRankDataType) => {
          return !prev.some((prevRank) => prevRank?.ranking == rank?.ranking)
        })
        return [...prev, ...newRank]
      })
    }
  }
  const fetchMyRank = async () => {
    if (!isValid) {
      const myRankResponse = await getMyAssetRank()
      setMyRankInfo(myRankResponse?.data ?? null)
    }
  }
  const moreData = () => setPage((prev) => prev + 1)
  useEffect(() => {
    fetchMyRank()
    fetchRankData(page)
  }, [])

  useEffect(() => {
    fetchRankData(page)
  }, [page])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        moreData()
      }
    })

    if (observerRef?.current) {
      observer?.observe(observerRef?.current)
    }

    return () => {
      if (observerRef?.current) {
        observer?.unobserve(observerRef?.current)
      }
    }
  }, [])

  return (
    <>
      <p className="text-[#7d12ff] text-center leading-10 mt-4">
        {date} 기준입니다.
      </p>
      <PopOverBox text="매일 15시 40분 ~ 16시 40분은 자산순위 집계시간입니다." />
      <RankHeader columns={['순위', '변동', '닉네임', '자산']} />
      {isValid ? (
        <div className="text-center my-20">현재는 순위 집계 시간입니다.</div>
      ) : (
        <>
          {myRankInfo && (
            <MyRankBox
              rank={myRankInfo?.ranking}
              changingRank={myRankInfo?.changeRanking}
              nickname={myRankInfo?.nickname}
              profit={myRankInfo?.won}
              isAsseted
            />
          )}
          {
            <section>
              {assetRank.map((data: assetRankDataType) => (
                <RankBox
                  ranking={data?.ranking}
                  rank={data?.ranking}
                  changingRank={data?.changeRanking}
                  nickname={data?.nickname}
                  profit={data?.won}
                  key={data?.nickname}
                  isAsseted
                />
              ))}
              <div ref={observerRef} />
            </section>
          }
        </>
      )}
    </>
  )
}
