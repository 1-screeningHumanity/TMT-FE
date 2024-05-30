import { getInvestors } from '@/actions/stock/stock'
import { InvestorsDataType } from '@/types/Stock'

export default async function Page({
  params,
}: {
  params: { StockCode: string }
}) {
  // const data = InvestorsData
  const data: InvestorsDataType[] = await getInvestors(params.StockCode)

  const colorFormatting = (value: string) => {
    if (value.includes('-')) {
      return '#0000ff'
    } else {
      return '#ff0000'
    }
  }
  const colorDate = (prdy_vrss_sign: string) => {
    if (prdy_vrss_sign === '2') {
      return '#0000ff'
    } else {
      return '#ff0000'
    }
  }
  const parsedDate = (date: string) => {
    return date
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1-$2-$3')
      .replace(/(\-{1,2})$/g, '')
  }
  return (
    <div className="mt-5">
      <table className="border-collapse border border-slate-400 w-full ">
        <thead
          className="h-20 border-black"
          style={{ backgroundColor: '#E9C8FF' }}
        >
          <tr>
            <th scope="col" className="border border-white text-xl">
              날짜
            </th>
            <th scope="col" className="border border-white text-xl">
              개인
            </th>
            <th scope="col" className="border border-white text-xl ">
              외국인
            </th>
            <th scope="col" className="border border-white text-xl">
              기관
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.stck_bsop_date}>
              <th
                scope="row"
                className="border border-slate-300 h-12"
                style={{ color: colorDate(String(item.prdy_vrss_sign)) }}
              >
                {parsedDate(item.stck_bsop_date)}
              </th>
              <td
                className="border border-slate-300 text-center"
                style={{ color: colorFormatting(String(item.prsn_ntby_qty)) }}
              >
                {item.prsn_ntby_qty}
              </td>
              <td
                className="border border-slate-300 text-center"
                style={{ color: colorFormatting(String(item.frgn_ntby_qty)) }}
              >
                {item.frgn_ntby_qty}
              </td>
              <td
                className="border border-slate-300 text-center"
                style={{ color: colorFormatting(String(item.orgn_ntby_qty)) }}
              >
                {item.orgn_ntby_qty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
