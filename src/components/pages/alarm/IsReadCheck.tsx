'use client'

import { alarmDeleteAPI, alarmListAPI, alarmReadAPI } from '@/actions/alarm/fcm'
import { AlarmListType } from '@/types/Alarm'
import { beforeMinute } from '@/utils/formattinfTime'
import { useEffect, useState } from 'react'

export default function IsReadCheck() {
  const [noread, setNoread] = useState(false)
  const [filterAlarmList, setFilterAlarmList] = useState<AlarmListType[]>([])
  const [alarmList, setAlarmList] = useState<AlarmListType[]>([])
  const [action, setAction] = useState(false)
  const [checked, setChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const handleChangeDetail = () => {
    setNoread(!noread)
  }

  const getData = async () => {
    try {
      const res = await alarmListAPI()
      setAlarmList(res.data)
    } catch (err) {
      console.log('err in IsReadCheck : ', err)
    }
  }

  useEffect(() => {
    getData()
  }, [action])

  useEffect(() => {
    const filteredList = noread
      ? alarmList.filter((item) => item.readStatus === 44)
      : alarmList
    setFilterAlarmList(filteredList)
  }, [noread, alarmList])

  const handleCheckboxChange = (alarmId: number) => {
    setCheckedItems((prev) =>
      prev.includes(alarmId)
        ? prev.filter((id) => id !== alarmId)
        : [...prev, alarmId],
    )
    console.log('checkedItems : ', checkedItems)
  }
  const handleAllChecked = (checked: boolean) => {
    if (checked) {
      setCheckedItems(filterAlarmList.map((item) => item.notificationLogId))
    } else {
      setCheckedItems([])
    }
  }
  const handleDeleteAlarm = async () => {
    console.log('checkedItems : ', checkedItems)
    const res = await alarmDeleteAPI(checkedItems)
    setAction(!action)
  }
  const handleAllDeleteAlarm = async () => {
    const confirm = window.confirm('전체 삭제하시겠습니까?')
    if (confirm) {
      const res = await alarmDeleteAPI(
        filterAlarmList.map((item) => item.notificationLogId),
      )
      setAction(!action)
    }
    setChecked(false)
  }
  const handleReadAlarm = async (alarmId: number) => {
    setAction(!action)
    console.log('send alarmId : ', alarmId)
    if (checked === false) {
      await alarmReadAPI([alarmId])
    }
  }
  const handleCheckReadAlarm = async () => {
    await alarmReadAPI(checkedItems)
    getData()
  }

  const handleAllReadAlarm = async () => {
    const confirm = window.confirm('전체 읽기하시겠습니까?')
    if (confirm) {
      await alarmReadAPI(filterAlarmList.map((item) => item.notificationLogId))
      setAction(!action)
    }
    setChecked(false)
  }
  return (
    <>
      <div className="flex">
        <label className="mt-5 flex">
          <input
            className="ml-2"
            type="checkbox"
            id="switch"
            checked={noread}
            onChange={handleChangeDetail}
          />
          <label htmlFor="switch" className="switch_label">
            <span className="onf_btn" />
          </label>
          <span className="font-semibold ml-3 text-lg">
            안 읽은 알림만 보기
          </span>
        </label>
        <label className="mt-5 mr-5 flex absolute right-0">
          <input
            type="checkbox"
            className="w-6"
            onChange={() => setChecked(!checked)}
          />
          <span className="font-semibold text-lg ml-2">선택</span>
        </label>
      </div>
      {checked && (
        <div className="flex justify-between mt-3">
          <button
            className="bg-red-200 w-20 h-10 p-2 rounded-lg mx-2"
            onClick={() => handleAllChecked}
          >
            전체 선택
          </button>
          <button
            className="bg-red-200 w-20 h-10 p-2 rounded-lg mx-2"
            onClick={handleDeleteAlarm}
          >
            삭제
          </button>
          <button
            className="bg-red-200 w-20 h-10  p-2 rounded-lg mx-2"
            onClick={handleAllDeleteAlarm}
          >
            전체 삭제
          </button>
          <button
            className="bg-red-200 w-20 h-10  p-2 rounded-lg mx-2"
            onClick={handleCheckReadAlarm}
          >
            읽기
          </button>
          <button
            className="bg-red-200 w-20 h-10  p-2 rounded-lg mx-2"
            onClick={handleAllReadAlarm}
          >
            전체 읽기
          </button>
        </div>
      )}

      {filterAlarmList.length > 0 &&
        filterAlarmList.map((item) => (
          <label
            key={item.notificationLogId}
            className="flex items-center mx-5 my-8"
            onClick={() => handleReadAlarm(item.notificationLogId)}
          >
            {checked && (
              <input
                type="checkbox"
                className="mr-3"
                style={{ display: 'none' }}
                checked={checkedItems.includes(item.notificationLogId)}
                onChange={() => handleCheckboxChange(item.notificationLogId)}
              />
            )}
            <div
              className="flex-grow flex h-36 p-5 border-b rounded-2xl"
              style={{
                backgroundColor: checkedItems.includes(item.notificationLogId)
                  ? '#c3dadb'
                  : '#e6f4f5',
              }}
            >
              <div className="relative w-full">
                <div className="flex justify-between">
                  <div className="text-2xl font-bold">{item.title}</div>
                  {item.readStatus === 44 && (
                    <span className="h-4 w-4 bg-sky-600 rounded-full"></span>
                  )}
                </div>
                <div className="text-xl mt-2">{item.content}</div>
                <div className="absolute right-0 ">
                  {beforeMinute(item.notificationLogCreateAt)}
                </div>
              </div>
            </div>
          </label>
        ))}
    </>
  )
}
