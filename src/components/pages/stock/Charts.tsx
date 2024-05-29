'use client'
import { useState } from 'react'
import DetailCharts from './DetailCharts'
import SimpleCharts from './SimpleCharts'

export default function Charts() {
  const [detail, setDetail] = useState(false)
  const [date, setDate] = useState('')

  const handleChangeDetail = () => {
    if (detail === false) {
      setDetail(true)
    }
    if (detail === true) {
      setDetail(false)
    }
  }
  const handleDate = (when: string) => {
    if (when === 'day') {
      setDate('day')
    }
    if (when === 'week') {
      setDate('week')
    }
    if (when === 'month') {
      setDate('month')
    }

    if (when === 'year') {
      setDate('year')
    }
  }

  return (
    <>
      <label className="ml-2 ">
        <input type="checkbox" onChange={() => handleChangeDetail()} />
        <span className="ml-2">자세히 보기</span>
      </label>
      {detail ? <DetailCharts /> : <SimpleCharts />}
      <div
        className="flex justify-between items-center mt-5 w-full h-16 rounded-2xl"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        <button
          className="w-1/4 h-10 text-white mr-1 rounded-2xl"
          style={{ backgroundColor: '#7D00D0' }}
          onClick={() => handleDate('day')}
        >
          일
        </button>
        <button
          className="w-1/4 h-10 text-white rounded-2xl mr-1"
          style={{ backgroundColor: '#7D00D0' }}
          onClick={() => handleDate('week')}
        >
          주
        </button>
        <button
          className="w-1/4 h-10 text-white mr-1 rounded-2xl"
          style={{ backgroundColor: '#7D00D0' }}
          onClick={() => handleDate('month')}
        >
          월
        </button>

        <button
          className="w-1/4 h-10 text-white rounded-2xl"
          style={{ backgroundColor: '#7D00D0' }}
          onClick={() => handleDate('year')}
        >
          년
        </button>
      </div>
    </>
  )
}
