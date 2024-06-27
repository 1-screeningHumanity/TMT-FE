import { getCurruntDate, getLastFridayOfLastMonth4PM } from "@/utils/time";
import RankHeader from "./RankHeader";
import { getMonthlyRevenueRank, getMyMonthlyRevenueRank } from "@/actions/userRank";
import MyRankBox from "./MyRankBox";
import { weeklyRankDataType } from "@/types/rankBoxType";
import RankBox from "./RankBox";
import { isWithinMonthlyFridayWindow } from "@/utils/aggregateTimeCheck";
import ToolTipBox from "@/components/ui/ToolTipBox";

export default async function MonthlyRank() {

  const date = getLastFridayOfLastMonth4PM();
  const isValid = isWithinMonthlyFridayWindow();

  const myRankResponse = await getMyMonthlyRevenueRank();
  const myRankInfo = myRankResponse?.data;

  const res = await getMonthlyRevenueRank();
  const MonthlyRank = res?.data;

  return(
    <>
      <p className="text-[#7d12ff] text-center leading-10 mt-4">{date} 기준입니다.</p>
      <ToolTipBox text="매월 마지막 금요일 16시 ~ 17시 30분은 집계시간입니다."/>
      <RankHeader columns={['순위','변동','닉네임','수익률']} /> 
      {
        isValid ? <div className="text-center my-20">현재는 순위 집계 시간입니다.</div> :
        <>
          <MyRankBox rank={myRankInfo?.ranking} changingRank={myRankInfo?.changeRanking} nickname={myRankInfo?.nickname} profit={myRankInfo?.profit} isAsseted={false}/>
          {
            MonthlyRank.map((data : weeklyRankDataType) =>
              <RankBox rank={data?.ranking} changingRank={data?.changeRanking} nickname={data?.nickname} profit={data?.profit} isAsseted={false}/>
            )
          }
        </>
      }
    </>
  )
}