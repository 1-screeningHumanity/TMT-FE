'use client'
import { AlarmList } from '@/lib/alarm/AlarmList'
import { AlarmListType } from '@/types/Alarm'
import Image from 'next/image'
import { useState } from 'react'

export default function Alarm() {
  const [noread, setNoread] = useState(false)
  const [alarmList, setAlarmList] = useState<AlarmListType[]>([])

  const handleChangeDetail = () => {
    if (noread === false) {
      setNoread(true)
      setAlarmList(AlarmList.filter((item) => item.isRead === '44'))
    }

    if (noread === true) {
      setNoread(false)
      setAlarmList(AlarmList)
    }
  }

  return (
    <>
      {/* {noread === true ? } */}
      <div className="ml-3 my-3 relative flex items-center">
        <Image
          width="50"
          height="50"
          src="https://img.icons8.com/material-rounded/50/back--v1.png"
          alt="back--v1"
        />
        <span className="text-3xl font-bold absolute left-1/2 transform -translate-x-1/2">
          알림센터
        </span>
      </div>
      <hr />

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
          <span className="font-semibold ml-3 text-lg">
            안 읽은 알림만 보기
          </span>
        </label>
      </div>
      {alarmList.map((item) => (
        <div
          key={item.id}
          className=" bg-slate-200 relative  h-36  items-center p-5 border-b mx-5 my-8 rounded-2xl"
        >
          <div className="text-2xl">{item.content}</div>
          {item.isRead === '44' && (
            <span className="h-4 w-4 absolute bg-sky-600 rounded-full right-0 top-0 m-2">
              {''}
            </span>
          )}

          <div className="absolute bottom-0 mb-3">{item.time}</div>
        </div>
      ))}
    </>
  )
}
