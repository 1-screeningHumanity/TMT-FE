'use client'

import MyRankBox from "./MyRankBox";
import RankBox from "./RankBox";
import RankHeader from "./RankHeader";
import { getPreviousDay4PM } from "@/utils/time";
import { getAssetRank, getMyAssetRank } from "@/actions/userRank";
import { assetRankDataType } from "@/types/rankBoxType";
import { dailyAggregateTimeRange } from "@/utils/aggregateTimeCheck";
import PopOverBox from "@/components/ui/PopOverBox";
import { use, useEffect, useRef, useState } from "react";
import { set } from "firebase/database";

export default function AssetRank() {

  const [date, setDate] = useState<string>();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [myRankInfo, setMyRankInfo] = useState<assetRankDataType | null>(null);
  const [assetRank, setAssetRank] = useState<assetRankDataType[]>([]);
  const [page, setPage] = useState<number>(0);
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setDate(getPreviousDay4PM());
    setIsValid(dailyAggregateTimeRange());

    async function fetchData(){
      if(!isValid){
        const myRankResponse = await getMyAssetRank();
        setMyRankInfo(myRankResponse?.data ?? null);
      
        const res = await getAssetRank(page);
        setAssetRank(res?.data?.content ?? []);
      }
    }
    fetchData();

    const observer = new IntersectionObserver(
      (entries) => {
        // if (entries[0].isIntersecting) {
        //   setPage(page +1)
        // }
        console.log("entries" , entries[0].isIntersecting)
      },
      { threshold: 1 },
    )
    if (observerRef.current) {
      observer.observe(observerRef.current)
    }
    
  }, [page]);

  return(
    <>
      <p className="text-[#7d12ff] text-center leading-10 mt-4">{date} 기준입니다.</p>
      <PopOverBox text="매일 15시 40분 ~ 16시 40분은 자산순위 집계시간입니다."/>
      <RankHeader columns={['순위','변동','닉네임','자산']}/> 
        { isValid ? <div className="text-center my-20">현재는 순위 집계 시간입니다.</div> : 
          <>
            { myRankInfo &&
              <MyRankBox rank={myRankInfo?.ranking} changingRank={myRankInfo?.changeRanking} nickname={myRankInfo?.nickname} profit={myRankInfo?.won} isAsseted/>
              }
              {
                <div ref={observerRef}>
                  {assetRank.map((data : assetRankDataType) => 
                    <RankBox rank={data?.ranking} changingRank={data?.changeRanking} nickname={data?.nickname} profit={data?.won} isAsseted/>
                  )}
                </div>
              }
          </>
        }
    </>
  )
}