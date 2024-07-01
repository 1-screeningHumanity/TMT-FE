import ContentsOfUserRank from '@/components/pages/userRank/ContentsOfUserRank'
import Headers from '@/components/ui/Headers'
import TitleOfPages from '@/components/ui/TitleOfPages'

export default function Page() {
  return (
    <div className="overflow-y-scroll">
      <TitleOfPages title="순위" />
      <ContentsOfUserRank />
    </div>
  )
}
