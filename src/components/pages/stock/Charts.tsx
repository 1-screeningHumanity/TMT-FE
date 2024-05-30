'use client'
import { useEffect, useState } from 'react'
import DetailCharts from './DetailCharts'
import SimpleCharts from './SimpleCharts'

export default function Charts({ params }: { params: { StockCode: string } }) {
  const [detail, setDetail] = useState(false)
  const [date, setDate] = useState('')
  const [socketFlag, setSocketFlag] = useState(false)
  const socketStockCode = [
    '005930',
    '000660',
    '373220',
    '207940',
    '005380',
    '005935',
    '000270',
    '068270',
    '005490',
    '105560',
    '035420',
    '006400',
    '051910',
    '028260',
    '055550',
    '012330',
    '003670',
    '035720',
    '247540',
    '086790',
  ]
  useEffect(() => {
    if (socketStockCode.includes(params.StockCode)) {
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
      <label className="flex ">
        <label className="m-5">
          자세히 보기
          <input
            className="ml-2"
            type="checkbox"
            id="switch"
            onChange={() => handleChangeDetail()}
          />
          <label htmlFor="switch" className="switch_label">
            <span className="onf_btn" />
          </label>
        </label>
      </label>

      {detail ? <DetailCharts /> : <SimpleCharts />}

      <div
        className="flex justify-between items-center mt-5 w-full h-8 rounded-2xl"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        {socketFlag && (
          <button
            className="w-1/4 h-8 text-white mr-1 rounded-2xl"
            style={{ backgroundColor: '#7D00D0' }}
            onClick={() => handleDate('day')}
          >
            실시간
          </button>
        )}
        <button
          className="w-1/4 h-8 text-white mr-1 rounded-2xl"
          style={{ backgroundColor: '#7D00D0' }}
          onClick={() => handleDate('day')}
        >
          일
        </button>
        <button
          className="w-1/4 h-8 text-white rounded-2xl mr-1"
          style={{ backgroundColor: '#7D00D0' }}
          onClick={() => handleDate('week')}
        >
          주
        </button>
        <button
          className="w-1/4 h-8 text-white mr-1 rounded-2xl"
          style={{ backgroundColor: '#7D00D0' }}
          onClick={() => handleDate('month')}
        >
          월
        </button>

        <button
          className="w-1/4 h-8 text-white rounded-2xl"
          style={{ backgroundColor: '#7D00D0' }}
          onClick={() => handleDate('year')}
        >
          년
        </button>
      </div>
    </>
  )
}
