'use client'
import { useState } from 'react'
import DetailCharts from './DetailCharts'
import SimpleCharts from './SimpleCharts'

export default function DetalCheckbox({ data }: { data: any }) {
  const [detail, setDetail] = useState(false)
  const handleChangeDetail = () => {
    if (detail === false) {
      setDetail(true)
    }

    if (detail === true) {
      setDetail(false)
    }
  }
  return (
    <>
      <label className="flex items-center my-3 mx-10">
        <span className="text-xl">자세히 보기</span>
        <div className="relative flex items-center ml-2">
          <input
            className="mt-0"
            type="checkbox"
            id="switch"
            onChange={handleChangeDetail}
          />
          <label htmlFor="switch" className="switch_label">
            <span className="onf_btn" />
          </label>
        </div>
      </label>

      {detail ? <DetailCharts data={data} /> : <SimpleCharts data={data} />}
    </>
  )
}
