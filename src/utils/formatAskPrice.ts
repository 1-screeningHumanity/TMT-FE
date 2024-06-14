import { AskingPriceDataTypes } from '@/types/Stock'

export default function formattingData(data: AskingPriceDataTypes): any {
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
