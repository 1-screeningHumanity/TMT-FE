import ContentsOfMyPage from "@/components/pages/mypage/ContentsOfMyPage";
import Headers from "@/components/ui/Headers";
import { getSession } from "next-auth/react";
import ButtonOfDeleteMember from "@/components/ui/buttons/ButtonOfDeleteMember";
import { cashInfoAPI, wonInfoAPI } from "@/actions/wallet";
import { userGrade, userInformation } from "@/actions/myPage";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import Footer from "@/components/ui/Footer";
import InformationOfMyPage from "@/components/pages/mypage/InformationOfMyPage";
import ChartOfMyPage from "@/components/pages/mypage/ChartOfMyPage";
import ButtonOfSignout from "@/components/ui/buttons/ButtonOfSignout";

export default async function mypage(){

  return (
    <div className="mb-20">
      <Headers title="마이페이지"/>
      <InformationOfMyPage />
      <ChartOfMyPage />
      <ContentsOfMyPage />
      <ButtonOfSignout />
      <ButtonOfDeleteMember />
    </div>
  )
}