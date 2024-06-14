'use client'
import { getBidAskSocketData } from '@/actions/stock/getBidAskSocketData'
import { AskingPriceData } from '@/lib/stock/AskingPriceData'
import { AskingPriceDataTypes } from '@/types/Stock'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'

export default function AskPrice({ stockCode }: { stockCode: string }) {
  const socketData = getBidAskSocketData(stockCode)
  const data = formattingData(socketData as any)
  // const data = formattingData(AskingPriceData)
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
      {data.askp_arr.map((askp: any, index: number) => {
        const widthPercentage = (Number(askp[1]) / data.max_askp_rsqn) * 100
        const textColor = widthPercentage >= 95 ? 'white' : 'black'
        return (
          <div className="flex my-3" key={index}>
            <div
              className="h-16 mx-3 relative flex items-center rounded-2xl text-center"
              style={{
                backgroundColor: '#F2F2F2',
                width: 'calc(66.6667% - 12px)',
              }}
            >
              <span
                className="z-10 text-white ml-2 font-semibold"
                style={{ color: textColor }}
              >
                {formatNumberWithCommas(askp[1])}
              </span>
              <div
                className="h-16 absolute right-0 bg-gradient-to-r from-sky-500 to-white rounded-2xl"
                style={{
                  // width: `${(Number(askp[1]) / data.max_askp_rsqn) * 100}%`,
                  width: `${widthPercentage}%`,
                }}
              ></div>
              <div className=" w-1/2 absolute right-0 text-center mx-1">
                <span className="font-black">
                  {formatNumberWithCommas(askp[0])}
                </span>
              </div>
            </div>
          </div>
        )
      })}

      {data.bidp_arr.map((bidp: any, index: number) => {
        const widthPercentage = (Number(bidp[1]) / data.max_bidp_rsqn) * 100
        const textColor = widthPercentage >= 95 ? 'white' : 'black'
        return (
          <div className="flex my-3 justify-end" key={index}>
            <div
              className="h-16 mx-3 relative flex items-center rounded-2xl"
              style={{
                backgroundColor: '#F2F2F2',
                width: 'calc(66.6667% - 12px)',
              }}
            >
              <div
                className="h-16 absolute left-0 bg-gradient-to-l from-red-500 to-white rounded-2xl"
                style={{
                  width: `${(Number(bidp[1]) / data.max_bidp_rsqn) * 100}%`,
                }}
              ></div>
              <div className=" w-1/2 absolute text-center ">
                <span className="font-black">
                  {formatNumberWithCommas(bidp[0])}
                </span>
              </div>
              <span
                className="z-10 absolute right-0 text-white ml-2 font-semibold mr-2"
                style={{ color: textColor }}
              >
                {formatNumberWithCommas(bidp[1])}
              </span>
            </div>
          </div>
        )
      })}
    </main>
  )
}
