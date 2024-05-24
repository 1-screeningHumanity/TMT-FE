import { InvestorsData } from '@/lib/stock/InvestorsData'
import { InvestorsDataType } from '@/types/InvestorsDataType'

export default function Page() {
  const data = InvestorsData

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
  return (
    <div>
      <table className="border-collapse border border-slate-400 w-full ">
        <thead>
          <tr>
            <th scope="col" className="border border-slate-300 ">
              날짜
            </th>
            <th scope="col" className="border border-slate-300 ">
              개인
            </th>
            <th scope="col" className="border border-slate-300 ">
              외국인
            </th>
            <th scope="col" className="border border-slate-300 ">
              기관
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th
                scope="row"
                className="border border-slate-300"
                style={{ color: colorDate(String(item.prdy_vrss_sign)) }}
              >
                {item.stck_bsop_date}
              </th>
              <td
                className="border border-slate-300"
                style={{ color: colorFormatting(String(item.prsn_ntby_qty)) }}
              >
                {item.prsn_ntby_qty}
              </td>
              <td
                className="border border-slate-300"
                style={{ color: colorFormatting(String(item.frgn_ntby_qty)) }}
              >
                {item.frgn_ntby_qty}
              </td>
              <td
                className="border border-slate-300"
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
