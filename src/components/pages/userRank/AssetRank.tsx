import { get } from "http";
import MyRankBox from "./MyRankBox";
import RankBox from "./RankBox";
import RankHeader from "./RankHeader";
import { dateFormmating, getCurruntDate, getPreviousDay4PM } from "@/utils/time";
import { getAssetRank, getMyAssetRank } from "@/actions/userRank";
import { assetRankDataType } from "@/types/rankBoxType";
import { dailyAggregateTimeRange } from "@/utils/aggregateTimeCheck";
import ToolTipBox from "@/components/ui/ToolTipBox";

export default async function AssetRank() {

  const date = getPreviousDay4PM();
  const isValid = dailyAggregateTimeRange();

  const myRankResponse = await getMyAssetRank();
  const myRankInfo = myRankResponse?.data;

  const res = await getAssetRank();
  const assetRank = res?.data;

  return(
    <>
      <p className="text-[#7d12ff] text-center leading-10 mt-4">{date} 기준입니다.</p>
      <ToolTipBox text="매일 16시 ~ 17시 30분은 집계시간입니다."/>
      <RankHeader columns={['순위','변동','닉네임','자산']}/> 
        { isValid ? <div className="text-center my-20">현재는 순위 집계 시간입니다.</div> : 
          <>
            <MyRankBox rank={myRankInfo?.ranking} changingRank={myRankInfo?.changeRanking} nickname={myRankInfo?.nickname} profit={myRankInfo?.won} isAsseted/>
              {
                assetRank.map((data : assetRankDataType) => 
                  <RankBox rank={data?.ranking} changingRank={data?.changeRanking} nickname={data?.nickname} profit={data?.won} isAsseted/>
                )
              }
          </>
        }
        
      

    </>
  )
}