import { userInformation } from "@/actions/myPage";
import { rankBoxType } from "@/types/rankBoxType";
import Link from "next/link";

export default async function MyRankBox() {

  const userInfo = await userInformation();
  const nickName = userInfo?.data?.nickanme;
  console.log("nickname :", nickName);

  return(
    <Link href={"/mypage"} className="flex justify-around border-2 text-lg h-14 bg-slate-50 shadow-lg border-[#7d12ff]  items-center mt-2">
      <div>{1}위</div>
      <div>▲ {2}</div>
      <div>{nickName}</div>
      <div>{30} %</div>
    </Link>
  )
}