import ContentsOfMyPage from "@/components/pages/mypage/ContentsOfMyPage";
import ButtonOfDeleteMember from "@/components/ui/buttons/ButtonOfDeleteMember";
import InformationOfMyPage from "@/components/pages/mypage/InformationOfMyPage";
import ChartOfMyPage from "@/components/pages/mypage/ChartOfMyPage";
import ButtonOfSignout from "@/components/ui/buttons/ButtonOfSignout";

export default async function mypage(){

  return (
    <div >
      <InformationOfMyPage />
      <ChartOfMyPage />
      <ContentsOfMyPage />
      <ButtonOfSignout />
      <ButtonOfDeleteMember />
    </div>
  )
}