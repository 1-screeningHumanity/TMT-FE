import ContentsOfUserRank from "@/components/pages/userRank/ContentsOfUserRank";
import Headers from "@/components/ui/Headers";

export default function Page() { 


  return (
    <div className="mb-20">
      <Headers title="랭킹"/>
      <ContentsOfUserRank />
    </div>
  )
}