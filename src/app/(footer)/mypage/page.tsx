import ContentsOfMyPage from "@/components/ui/ContentsOfMyPage";
import Headers from "@/components/ui/Headers";
import { getSession } from "next-auth/react";

export default function mypage(){

  return (
    <div>
      <Headers title="마이페이지"/>
      <ContentsOfMyPage />
    </div>
  )
}