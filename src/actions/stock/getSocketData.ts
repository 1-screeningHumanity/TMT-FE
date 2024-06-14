'use client'
import downPrice from '/public/assets/images/downPrice.svg'
import upPrice from '/public/assets/images/upPrice.svg'

import { SocketStockDataType } from '@/types/Stock'
import { useEffect, useState } from 'react'

let red = '#ff0000'
let blue = '#0000ff'
export const getSocketData = (stockCode: string) => {
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth() + 1
  let date = today.getDate()
  let todayDate = `${year}-${month}-${date}`

  const [parsedData, setParsedDate] = useState<SocketStockDataType[]>([])
  // 순서대로 주식, 종목코드, 현재가 , 대비율, 주식 시가, 최고가 , 최저가
  const [color, setColor] = useState('black')
  const [symbol, setSymbol] = useState('')

  useEffect(() => {
    if (!window.EventSource) {
      console.error('EventSource is not supported in this environment.')
      return
    }
    // 초기연결
    const eventSource = new EventSource(
      `http://10.10.10.85:8080/api/stream/${stockCode}`,
      // `http://43.200.120.99:9000/stream/${stockCode}`,
    )
    // 연결되었을때
    eventSource.onopen = () => {
      console.log('connection opened')
    }
    // 메세지 받았을 때
    eventSource.onmessage = (event) => {
      const data = event.data
      const parsedData = data.split(':')

      if (parsedData[0] != 'keep-alive') {
        setParsedDate(parsedData)
        if (parsedData[3].includes('-')) {
          setColor(blue)
          setSymbol(downPrice.src) // Convert StaticImageData to string
        } else {
          setColor(red)
          setSymbol(upPrice.src) // Convert StaticImageData to string
        }
      }
    }
    // 에러 발생시
    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error)
      eventSource.close()
    }
  }, [parsedData])
  return {
    color,
    symbol,
    now_price: parsedData[2],
    prdy_ctrt: parsedData[3],
    stck_oprc: parsedData[4],
    stck_hgpr: parsedData[5],
    stck_lwpr: parsedData[6],
    todayDate,
  }
}
