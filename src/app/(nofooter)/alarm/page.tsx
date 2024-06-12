import Headers from '@/components/ui/Headers'
import IsReadCheck from '@/components/pages/alarm/IsReadCheck'
import { alarmListAPI } from '@/actions/alarm/fcm'
import AlarmList from '@/components/pages/alarm/AlarmList'

export default async function Alarm() {
  const alarmList = await alarmListAPI()
  console.log(alarmList)

  return (
    <>
      <Headers title="알림센터" />
      <hr />
      <IsReadCheck />
      <AlarmList />
    </>
  )
}
