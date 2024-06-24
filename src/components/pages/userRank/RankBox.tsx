import { rankBoxType } from "@/types/rankBoxType";
import Link from "next/link";




export default function RankBox({ rank, changingRank, nickname, profit } : rankBoxType ) {

  return(
    <Link href={`/profile/${nickname}`} className="flex justify-around border-[1px] text-lg h-14 bg-slate-50 items-center mt-2">
      <div>{rank}위</div>
      <div className={`${changingRank > 0 ? "text-red-400" : "text-blue-400"}`}>{changingRank > 0 ? "▲" : "▼"} {changingRank}</div>
      <div>{nickname}</div>
      <div>{profit} %</div>
    </Link>
  )
}