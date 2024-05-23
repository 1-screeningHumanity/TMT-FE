'use client'
import { useState } from 'react'
import DetailCharts from './DetailCharts'
import SimpleCharts from './SimpleCharts'

export default function Charts() {
  const [detail, setDetail] = useState(false)
  const handleChangeDetail = () => {
    if (detail === false) {
      setDetail(true)
    }
    if (detail === true) {
      setDetail(false)
    }
  }
  console.log(detail)
  return (
    <>
      <label className="ml-2 ">
        <input type="checkbox" onChange={() => handleChangeDetail()} />
        <span className="ml-2">자세히 보기</span>
      </label>
      {detail ? <DetailCharts /> : <SimpleCharts />}
      {/* <SimpleCharts />
      <DetailCharts /> */}
    </>
  )
}
