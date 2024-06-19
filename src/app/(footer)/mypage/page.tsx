import ContentsOfMyPage from "@/components/ui/ContentsOfMyPage";
import Headers from "@/components/ui/Headers";
import { getSession } from "next-auth/react";
import ButtonOfDeleteMember from "@/components/ui/buttons/ButtonOfDeleteMember";
import { cashInfoAPI, wonInfoAPI } from "@/actions/wallet";
import { userGrade, userInformation } from "@/actions/myPage";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";

export default async function mypage(){

  const resWon = await wonInfoAPI();
  const wonInfo = resWon?.data?.won;

  const resCash = await cashInfoAPI();
  const cashInfo = resCash?.data?.cash;

  const resUser = await userInformation();
  const userInfo = resUser?.data?.nickanme;

  const resGrade = await userGrade();
  const gradeInfo = resGrade?.data?.grade;

  return (
    <div>
      <Headers title="마이페이지"/>
      {wonInfo && <div>내가 보유한 원: {formatNumberWithCommas(wonInfo)}원</div>}
      {cashInfo && <div>내가 보유한 캐시: {formatNumberWithCommas(cashInfo)}캐시</div>}
      {userInfo && <div>내 닉네임: {userInfo}</div>}
      {gradeInfo && <div>내 등급: {gradeInfo}</div>}
      <ContentsOfMyPage />
      <ButtonOfDeleteMember />
    </div>
  )
}