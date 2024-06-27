import { get } from "http";
import MyRankBox from "./MyRankBox";
import RankBox from "./RankBox";
import RankHeader from "./RankHeader";
import { getCurruntDate, getPreviousDay4PM } from "@/utils/time";
import { getDailyRevenueRank, getMyDailyRevenueRank } from "@/actions/userRank";
import { dailyRankDataType } from "@/types/rankBoxType";
import { dailyAggregateTimeRange } from "@/utils/aggregateTimeCheck";
import ToolTipBox from "@/components/ui/ToolTipBox";

export default async function DailyRank() {

  const date = getPreviousDay4PM();
  const isValid = dailyAggregateTimeRange();

  const myRankResponse = await getMyDailyRevenueRank();
  const myRankInfo = myRankResponse?.data;

  const res = await getDailyRevenueRank();
  const DailyRank = res?.data;

  return(
    <>
      <p className="text-[#7d12ff] text-center leading-10 mt-4">{date} 기준입니다.</p>
      <ToolTipBox text="매일 16시 ~ 17시 30분은 집계시간입니다."/>
      <RankHeader columns={['순위','변동','닉네임','수익률']} /> 
      { isValid ? <div className="text-center my-20">현재는 순위 집계 시간입니다.</div> : 
        <>
          <MyRankBox rank={myRankInfo?.todayRanking} changingRank={myRankInfo?.changeRanking} nickname={myRankInfo?.nickname} profit={myRankInfo?.profit} isAsseted={false}/>
          {
            DailyRank.map((data : dailyRankDataType) =>
              <RankBox rank={data?.todayRanking} changingRank={data?.changeRanking} nickname={data?.nickname} profit={data?.profit} isAsseted={false}/>
            )
          }
        </>
      }

    </>
  )
}