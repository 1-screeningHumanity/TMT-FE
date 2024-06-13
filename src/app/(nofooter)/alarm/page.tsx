import Headers from '@/components/ui/Headers'
import IsReadCheck from '@/components/pages/alarm/IsReadCheck'
export default async function Alarm(props: any) {
  return (
    <>
      <Headers title="알림센터" />
      <hr />
      <IsReadCheck />
    </>
  )
}
