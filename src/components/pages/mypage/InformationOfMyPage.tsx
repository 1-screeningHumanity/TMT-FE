import { userGrade, userInformation } from "@/actions/myPage";
import { getMyDailyRevenueRank } from "@/actions/userRank";
import { cashInfoAPI, wonInfoAPI } from "@/actions/wallet";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import Image from "next/image";

export default async function InformationOfMyPage(){


  const resWon = await wonInfoAPI();
  const wonInfo = resWon?.data?.won;

  const resCash = await cashInfoAPI();
  const cashInfo = resCash?.data?.cash;

  const resUser = await userInformation();
  const userInfo = resUser?.data?.nickanme;

  const resGrade = await userGrade();
  const gradeInfo = resGrade?.data?.grade;

  const resRank =  await getMyDailyRevenueRank()
  const profitInfo = resRank?.data?.profit;

  return (
    <>
      <div className="w-11/12 mx-auto flex justify-around py-4  rounded-2xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-slate-400 text-sm">회원님의 현재 보유 예수금</h3>
          <div className="text-2xl">{wonInfo &&  formatNumberWithCommas(wonInfo)} 원</div>
        </div>
        <div className="flex items-center">
          {userInfo && <div className="text-xl mr-2">{userInfo}</div>}
          {/* {gradeInfo && <div>{gradeInfo}</div>} */}
          {gradeInfo == "Silver" ? <Image src={"/assets/images/silver-medal.svg"} width={25} height={25} alt={"grade"} /> : null}
          {gradeInfo == "Gold" ? <Image src={"/assets/images/gold-medal.svg"} width={25} height={25} alt={"grade"} /> : null}
          {gradeInfo == "Diamond" ? <Image src={"/assets/images/gem-stone.svg"} width={25} height={25} alt={"grade"} /> : null}
        </div>
      </div>
      <div className="bg-[#f1f1f1] h-20 flex justify-around items-center w-11/12 mx-auto rounded-xl mt-2 ">
        <div className="text-lg text-center pl-4">
          <h3 className="text-sm text-slate-400 mb-1">현재 보유 캐시</h3>
          <p className="text-[#4a79f0]">{cashInfo && formatNumberWithCommas(cashInfo)} 캐시</p>
        </div>
        <div>|</div>
        <div className="text-lg text-center pr-4">
          <h3 className="text-sm text-slate-400 mb-1">일간 수익률</h3>
          <p className="text-[#4a79f0]">{profitInfo} %</p>
        </div>
      </div>
    </>
  )
}