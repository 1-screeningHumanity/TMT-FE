import { AskingPriceData } from '@/lib/stock/AskingPriceData'
import { AskingPriceDataTypes } from '@/types/AskingPriceDataType'

export default function page() {
  const data = formattingData(AskingPriceData)

  console.log(data)
  function formattingData(data: AskingPriceDataTypes) {
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
    const bidp_arr = [
      [data.bidp1, data.bidp_rsqn1],
      [data.bidp2, data.bidp_rsqn2],
      [data.bidp3, data.bidp_rsqn3],
    ]
    const bidp_rsqn_arr = [
      Number(data.bidp_rsqn1),
      Number(data.bidp_rsqn2),
      Number(data.bidp_rsqn3),
    ]
    const max_bidp_rsqn = Math.max(...bidp_rsqn_arr)
    return { askp_arr, max_askp_rsqn, bidp_arr, max_bidp_rsqn }
  }
  return (
    <main>
      호가
      {data.askp_arr.map((askp) => (
        <div className="flex my-3">
          <div
            className="w-2/5 h-28 mx-3 relative"
            key={askp + 'askp'}
            style={{ backgroundColor: '#D9D9D9' }}
          >
            <div
              className="h-28 absolute right-0 items-center flex justify-center text-2xl"
              style={{
                backgroundColor: '#ff0000',
                opacity: 0.5,
                // transform: 'rotate(180deg)',
                width: `${(Number(askp[1]) / data.max_askp_rsqn) * 100}%`,
              }}
            >
              {askp[1]}
            </div>
          </div>
          <div
            className="w-1/5 h-auto text-center justify-center flex items-center text-6xl"
            style={{ backgroundColor: '#D9D9D9' }}
          >
            +
          </div>
          {askp[0]}원
        </div>
      ))}
      <div className="flex my-3">
        <div className="w-2/5 h-28 mx-3" style={{ backgroundColor: '#D9D9D9' }}>
          현재가
        </div>
        <div
          className="w-1/5 h-auto text-center justify-center flex items-center text-6xl"
          style={{ backgroundColor: '#D9D9D9' }}
        ></div>
      </div>
      {data.bidp_arr.map((bidp) => (
        <div className="flex my-3">
          <div
            className="w-2/5 h-28 mx-3 relative"
            key={bidp + 'bidp'}
            style={{ backgroundColor: '#D9D9D9' }}
          >
            <div
              className="h-28 absolute right-0 items-center flex justify-center text-2xl"
              style={{
                backgroundColor: '#0000ff',
                opacity: 0.5,
                // transform: 'rotate(180deg)',
                width: `${(Number(bidp[1]) / data.max_bidp_rsqn) * 100}%`,
              }}
            >
              {bidp[1]}
            </div>
          </div>
          <div
            className="w-1/5 h-auto text-center justify-center flex items-center text-6xl"
            style={{ backgroundColor: '#D9D9D9' }}
          >
            -
          </div>
          {bidp[0]}원
        </div>
      ))}
    </main>
  )
}
