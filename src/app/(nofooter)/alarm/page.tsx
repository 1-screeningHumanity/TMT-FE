import Headers from '@/components/ui/Headers'
import IsReadCheck from '@/components/pages/alarm/IsReadCheck'
import { alarmListAPI } from '../../../actions/alarm/fcm'
import AlarmList from '@/components/pages/alarm/AlarmList'
import { AlarmListData } from '@/lib/alarm/AlarmList'
import { AlarmListType } from '@/types/Alarm'

export default async function Alarm(props: any) {
  console.log('props in alarm.tsx :', props)
  const alarmList = await alarmListAPI()
  const alarmData: AlarmListType[] = alarmList.data
  // const alarmList = await AlarmListData
  console.log('alarmList', alarmList)

  return (
    <>
      <Headers title="알림센터" />
      <hr />
      <IsReadCheck />
      <AlarmList alarmList={alarmData} />
    </>
  )
}
