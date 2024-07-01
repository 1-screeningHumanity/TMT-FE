import { getCurruntDate, getLastFriday4PM } from "@/utils/time";
import RankHeader from "./RankHeader";
import { getMyWeeklyRevenueRank, getWeeklyRevenueRank } from "@/actions/userRank";
import MyRankBox from "./MyRankBox";
import { weeklyRankDataType } from "@/types/rankBoxType";
import RankBox from "./RankBox";
import { isWithinFridayWindow } from "@/utils/aggregateTimeCheck";
import PopOverBox from "@/components/ui/PopOverBox";

export default async function WeeklyRank() {

  const date = getLastFriday4PM();
  const isValid = isWithinFridayWindow();

  let myRankInfo = null;
  let WeeklyRank = [];

  if(!isValid){
    const myRankResponse = await getMyWeeklyRevenueRank();
    myRankInfo = myRankResponse?.data;
  
    const res = await getWeeklyRevenueRank();
    WeeklyRank = res?.data.content;
  }


  return(
    <>
      <p className="text-[#7d12ff] text-center leading-10 mt-4">{date} 기준입니다.</p>
      <PopOverBox text="매주 금요일 15시 40분 ~ 16시 40분은 주간순위 집계시간입니다."/>
      <RankHeader columns={['순위','변동','닉네임','수익률']} /> 
      { isValid ? <div className="text-center my-20">현재는 순위 집계 시간입니다.</div> :
        <>
          <MyRankBox rank={myRankInfo?.ranking} changingRank={myRankInfo?.rankingChange} nickname={myRankInfo?.nickname} profit={myRankInfo?.profit} isAsseted={false}/>
          {
            WeeklyRank.map((data : weeklyRankDataType) =>
              <RankBox rank={data?.ranking} changingRank={data?.changeRanking} nickname={data?.nickname} profit={data?.profit} isAsseted={false}/>
            )
          }
        </>
      }
    </>
  )
}
