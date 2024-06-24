import { get } from "http";
import MyRankBox from "./MyRankBox";
import RankBox from "./RankBox";
import RankHeader from "./RankHeader";
import { getCurruntDate } from "@/utils/time";

export default function DailyRank() {

  const date = getCurruntDate();

  return(
    <>
      <p className="text-[#7d12ff] text-center leading-10 mt-4">{date} 기준입니다.</p>
      <RankHeader /> 
      <MyRankBox />
      <RankBox rank={1} changingRank={4} nickname="훈태" profit={311.23} />
      <RankBox rank={1} changingRank={-4} nickname="훈태" profit={311.23} />
      <RankBox rank={1} changingRank={2} nickname="훈태" profit={311.23} />
      <RankBox rank={1} changingRank={-3} nickname="훈태" profit={311.23} />
      <RankBox rank={1} changingRank={4} nickname="훈태" profit={311.23} />
    </>
  )
}