'use client'

import { get } from "http";
import MyRankBox from "./MyRankBox";
import RankBox from "./RankBox";
import RankHeader from "./RankHeader";
import { getCurruntDate, getPreviousDay4PM } from "@/utils/time";
import { getDailyRevenueRank, getMyDailyRevenueRank } from "@/actions/userRank";
import { dailyRankDataType } from "@/types/rankBoxType";
import { dailyAggregateTimeRange } from "@/utils/aggregateTimeCheck";
import PopOverBox from "@/components/ui/PopOverBox";
import { useEffect, useRef, useState } from "react";
import { set } from "firebase/database";

export default function DailyRank() {
  const [myRankInfo, setMyRankInfo] = useState<dailyRankDataType | null>(null)
  const [DailyRank, setDailyRank] = useState<dailyRankDataType[]>([])
  const [page, setPage] = useState<number>(0)
  const observerRef = useRef<HTMLDivElement>(null)
  const date = getPreviousDay4PM();
  const isValid = dailyAggregateTimeRange();

  const fetchRankData = async (currentPage : number) => {
    if(!isValid){
      const res = await getDailyRevenueRank(currentPage);
      const resData = res?.data?.content;

      setDailyRank((prev) => {
        const newRank = resData.filter((rank: dailyRankDataType) => {
          return !prev.some((prevRank) => prevRank?.nickname == rank?.nickname)
        });
        return [...prev, ...newRank];
      });
    }
  }
  

  const fetchMyRankData = async () => {
    if(!isValid){
      const myRankResponse = await getMyDailyRevenueRank();
      setMyRankInfo(myRankResponse?.data ?? null);
    }
  }

  const moreData = () => setPage((prev) => prev + 1);

  useEffect(() => {
    fetchMyRankData();
    fetchRankData(page);
  }, []);

  useEffect(() => {
    fetchRankData(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0]?.isIntersecting){
        moreData();
      }
    });
    if(observerRef?.current){
      observer?.observe(observerRef?.current);
    }

    return () => {
      if(observerRef.current){
        observer?.unobserve(observerRef?.current);
      }
    }
  }, []);
  
  return(
    <>
      <p className="text-[#7d12ff] text-center leading-10 mt-4">{date} 기준입니다.</p>
      <PopOverBox text="매일 15시 40분 ~ 16시 40분은 일간순위 집계시간입니다."/>
      <RankHeader columns={['순위','변동','닉네임','수익률']} /> 
      { isValid ? (<div className="text-center my-20">현재는 순위 집계 시간입니다.</div>)
        : 
        (
        <>
        {
          myRankInfo &&
          <MyRankBox rank={myRankInfo?.todayRanking} changingRank={myRankInfo?.changeRanking} nickname={myRankInfo?.nickname} profit={myRankInfo?.profit} isAsseted={false}/>
        }
        {
          <section>
            {
              DailyRank.map((data : dailyRankDataType) =>
                (
                  <RankBox 
                    rank={data?.todayRanking} 
                    changingRank={data?.changeRanking} 
                    nickname={data?.nickname} 
                    profit={data?.profit} 
                    key={data?.nickname}
                    isAsseted={false}
                    />
                ))}
            <div ref={observerRef} className="h-40"/>
            {/* <button  onClick={moreData}>더부르기</button> */}
          </section>
        } 
        </>
      )}
    </>
  )
}