'use client'
import { getBidAskSocketData } from '@/actions/stock/getBidAskSocketData'
import { AskingPriceData } from '@/lib/stock/AskingPriceData'
import { AskingPriceDataTypes } from '@/types/Stock'

export default function page() {
  const socketData = getBidAskSocketData('005930')
  const data = formattingData(socketData as any)
  // console.log('fmkdlsnfmkls', socketData)
  function formattingData(data: AskingPriceDataTypes): any {
    const askp_rsqn_arr = [
      Number(data.askp_rsqn1),
      Number(data.askp_rsqn2),
      Number(data.askp_rsqn3),
    ]
    const max_askp_rsqn = Math.max(...askp_rsqn_arr)

    const askp_arr = [
      [data.askp3, data.askp_rsqn3],
      [data.askp2, data.askp_rsqn2],
      [data.askp1, data.askp_rsqn1],
    ]
    const bidp_rsqn_arr = [
      Number(data.bidp_rsqn1),
      Number(data.bidp_rsqn2),
      Number(data.bidp_rsqn3),
    ]
    const bidp_arr = [
      [data.bidp1, data.bidp_rsqn1],
      [data.bidp2, data.bidp_rsqn2],
      [data.bidp3, data.bidp_rsqn3],
    ]

    const max_bidp_rsqn = Math.max(...bidp_rsqn_arr)
    return { askp_arr, max_askp_rsqn, bidp_arr, max_bidp_rsqn }
  }
  return (
    <main>
      호가
      {data.askp_arr.map((askp: any, index: number) => (
        <div className="flex my-3" key={index}>
          <div
            className="w-1/3 h-20 mx-3 relative"
            style={{ backgroundColor: '#D9D9D9' }}
          >
            <div
              className="h-20  absolute right-0 items-center flex justify-center text-2xl text-white"
              style={{
                backgroundColor: '#0000ff',
                opacity: 0.5,
                // transform: 'rotate(180deg)',
                width: `${(Number(askp[1]) / data.max_askp_rsqn) * 100}%`,
              }}
            >
              {askp[1]}
            </div>
          </div>
          {askp[0]}원
        </div>
      ))}
      {data.bidp_arr.map((bidp: any, index: number) => (
        <div className="flex my-3" key={index}>
          <div
            className="w-1/3 h-20  mx-3 relative"
            // key={bidp[0] + 'bidp'}
            style={{ backgroundColor: '#D9D9D9' }}
          >
            <div
              className="h-20 absolute right-0 items-center flex justify-center text-2xl text-white"
              style={{
                backgroundColor: '#ff0000',
                opacity: 0.5,
                // transform: 'rotate(180deg)',
                width: `${(Number(bidp[1]) / data.max_bidp_rsqn) * 100}%`,
              }}
            >
              {bidp[1]}
            </div>
          </div>
          {bidp[0]}원
        </div>
      ))}
    </main>
  )
}
