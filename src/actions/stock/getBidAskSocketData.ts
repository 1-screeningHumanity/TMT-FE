'use client'
import { AskingPriceDataTypes } from '@/types/Stock'
import { useEffect, useState } from 'react'

export const getBidAskSocketData = (stockCode: string) => {
  let today = new Date()

  const [parsedData, setParsedDate] = useState<AskingPriceDataTypes[]>([])
  // 순서대로 주식, 종목코드, 현재가 , 대비율, 주식 시가, 최고가 , 최저가

  useEffect(() => {
    if (!window.EventSource) {
      console.error('EventSource is not supported in this environment.')
      return
    }
    // 초기연결
    const eventSource = new EventSource(
      // `http://10.10.10.85:8080/api/stream/${stockCode}/asking-price`,
      `${process.env.SOCKET_URL}/stream/${stockCode}/asking-price`,
    )
    // 연결되었을때
    eventSource.onopen = () => {
      console.log('connection opened')
    }
    // 메세지 받았을 때
    eventSource.onmessage = (event) => {
      const data = event.data
      const bid_ask = data.split('-')[1]

      //getBidAskSocketData.tsx:34 005930:74300:74400:74500:184471:158973:35009:74200:74100:74000:296970:629951:922555:698764:3773096
      const splitedData = bid_ask.split(':')
      setParsedDate(splitedData)
    }
    // 에러 발생시
    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error)
      eventSource.close()
    }
  }, [])

  return {
    askp1: parsedData[1],
    askp2: parsedData[2],
    askp3: parsedData[3],
    askp_rsqn1: parsedData[4],
    askp_rsqn2: parsedData[5],
    askp_rsqn3: parsedData[6],
    bidp1: parsedData[7],
    bidp2: parsedData[8],
    bidp3: parsedData[9],
    bidp_rsqn1: parsedData[10],
    bidp_rsqn2: parsedData[11],
    bidp_rsqn3: parsedData[12],
    total_askp_rsqn: parsedData[13],
    total_bidp_rsqn: parsedData[14],
  }
}
