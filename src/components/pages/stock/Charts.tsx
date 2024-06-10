'use client'
import { useEffect, useState } from 'react'
import DetailCharts from './DetailCharts'
import SimpleCharts from './SimpleCharts'
import { socketStockCode } from '@/utils/socketStockCode'

export default function Charts({ params }: { params: { StockCode: string } }) {
  const [detail, setDetail] = useState(false)
  const [date, setDate] = useState('')
  const [socketFlag, setSocketFlag] = useState(false)
  useEffect(() => {
    if (socketStockCode.hasOwnProperty(params.StockCode)) {
      setSocketFlag(true)
    }
  }, [params.StockCode])

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

      {detail ? <SimpleCharts /> : <DetailCharts />}

      <div
        className="flex justify-between bottom-0 items-center mt-5 w-full h-8 rounded-2xl"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        {/* Content here */}

        {socketFlag && (
          <button
            className="w-1/4 h-8 text-white mr-1 rounded-2xl"
            style={{ backgroundColor: '#D7D7D7' }}
            onClick={() => handleDate('day')}
          >
            실시간
          </button>
        )}
        <button
          className="w-1/4 h-8 text-white mr-1 rounded-2xl"
          style={{ backgroundColor: '#D7D7D7' }}
          onClick={() => handleDate('day')}
        >
          일
        </button>
        <button
          className="w-1/4 h-8 text-white rounded-2xl mr-1"
          style={{ backgroundColor: '#D7D7D7' }}
          onClick={() => handleDate('week')}
        >
          주
        </button>
        <button
          className="w-1/4 h-8 text-white mr-1 rounded-2xl"
          style={{ backgroundColor: '#D7D7D7' }}
          onClick={() => handleDate('month')}
        >
          월
        </button>

        <button
          className="w-1/4 h-8 text-white rounded-2xl"
          style={{ backgroundColor: '#D7D7D7' }}
          onClick={() => handleDate('year')}
        >
          년
        </button>
      </div>
    </>
  )
}
