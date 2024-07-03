'use client'

import { getCurruntDate, getLastFriday4PM } from "@/utils/time";
import RankHeader from "./RankHeader";
import { getMyWeeklyRevenueRank, getWeeklyRevenueRank } from "@/actions/userRank";
import MyRankBox from "./MyRankBox";
import { weeklyRankDataType } from "@/types/rankBoxType";
import RankBox from "./RankBox";
import { isWithinFridayWindow } from "@/utils/aggregateTimeCheck";
import PopOverBox from "@/components/ui/PopOverBox";
import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";

export default function WeeklyRank() {
  const [myRankInfo, setMyRankInfo] = useState<weeklyRankDataType | null>(null)
  const [WeeklyRank, setWeeklyRank] = useState<weeklyRankDataType[]>([])
  const [page, setPage] = useState<number>(0)
  const observerRef = useRef<HTMLDivElement>(null)
  const date = getLastFriday4PM();
  const isValid = isWithinFridayWindow();

  const fetchRankData = async () => {
    if(!isValid){
      const res = await getWeeklyRevenueRank(page);
      const resData = res?.data?.content;

      setWeeklyRank((prev) => {
        const newRank = resData.filter((rank: weeklyRankDataType) => {
          return !prev.some((prevRank) => prevRank?.nickname == rank?.nickname)
        });
        return [...prev, ...newRank];
      });
    }
  }

  const fetchMyRankData = async () => {
    if(!isValid){
      const myRankResponse = await getMyWeeklyRevenueRank();
      setMyRankInfo(myRankResponse?.data ?? null);
    }
  }

  const moreData = () => {
    console.log("데이터 호출")
    setPage((prev) => prev + 1)
  };
  useEffect(() => {
    fetchMyRankData();
    fetchRankData();
  }, [page]);

  useEffect(() => {
    fetchRankData();
    const observer = new IntersectionObserver((entries) => {
      if(entries[0]?.isIntersecting){
        moreData();
      }
    });
    if(observerRef?.current){
      observer?.observe(observerRef?.current);
    }
  }, [page]);

  return(
    <>
      <p className="text-[#7d12ff] text-center leading-10 mt-4">{date} 기준입니다.</p>
      <PopOverBox text="매주 금요일 15시 40분 ~ 16시 40분은 주간순위 집계시간입니다."/>
      <RankHeader columns={['순위','변동','닉네임','수익률']} /> 
      { isValid ? <div className="text-center my-20">현재는 순위 집계 시간입니다.</div> :
        <>
        { myRankInfo &&
          <MyRankBox rank={myRankInfo?.ranking} changingRank={myRankInfo?.changeRanking} nickname={myRankInfo?.nickname} profit={myRankInfo?.profit} isAsseted={false}/>
        }
          {
            <section>
              {
                WeeklyRank.map((data : weeklyRankDataType) =>
                  <RankBox rank={data?.ranking} changingRank={data?.changeRanking} nickname={data?.nickname} profit={data?.profit} isAsseted={false}/>
                )
              }
              <div ref={observerRef} />
            </section>
          }
        </>
      }
    </>
  )
}
