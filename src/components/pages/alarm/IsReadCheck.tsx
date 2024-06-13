'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function IsReadCheck() {
  const [noread, setNoread] = useState(false)
  const router = useRouter()
  const handleChangeDetail = () => {
    if (noread === false) {
      setNoread(true)
      router.push('/alarm?isRead=44')
      //   setAlarmList(AlarmList.filter((item) => item.isRead === '44'))
    }
    if (noread === true) {
      setNoread(false)
      router.push('/alarm?isRead=77')
      //   setAlarmList(AlarmList)
    }
  }
  return (
    <div>
      <label className="m-5 flex">
        <input
          className="ml-2"
          type="checkbox"
          id="switch"
          onChange={() => handleChangeDetail()}
        />
        <label htmlFor="switch" className="switch_label">
          <span className="onf_btn" />
        </label>
        <span className="font-semibold ml-3 text-lg">안 읽은 알림만 보기</span>
      </label>
    </div>
  )
}
