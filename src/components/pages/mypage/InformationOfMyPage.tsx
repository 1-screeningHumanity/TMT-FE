import { userGrade, userInformation } from "@/actions/myPage";
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

  return (
      <div className="w-full flex justify-around pt-4 pb-8 rounded-2xl bg-white">
        <div className="flex flex-col gap-2">
          {wonInfo && <div className="text-2xl">{formatNumberWithCommas(wonInfo)}원</div>}
          {cashInfo && <div className="text-lg">{formatNumberWithCommas(cashInfo)}캐시</div>}
        </div>
        <div className="flex items-center">
          {userInfo && <div className="text-2xl mr-2">{userInfo}</div>}
          {/* {gradeInfo && <div>{gradeInfo}</div>} */}
          {gradeInfo == "Silver" ? <Image src={"/assets/images/silver-medal.svg"} width={30} height={30} alt={"grade"} /> : null}
          {gradeInfo == "Gold" ? <Image src={"/assets/images/gold-medal.svg"} width={30} height={30} alt={"grade"} /> : null}
          {gradeInfo == "Diamond" ? <Image src={"/assets/images/gem-stone.svg"} width={30} height={30} alt={"grade"} /> : null}
        </div>
      </div>
  )
}