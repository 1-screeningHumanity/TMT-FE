import ContentsOfMyPage from "@/components/ui/ContentsOfMyPage";
import Headers from "@/components/ui/Headers";
import { getSession } from "next-auth/react";
import ButtonOfDeleteMember from "@/components/ui/buttons/ButtonOfDeleteMember";

export default function mypage(){

  return (
    <div>
      <Headers title="마이페이지"/>
      <ContentsOfMyPage />
      <ButtonOfDeleteMember />
    </div>
  )
}