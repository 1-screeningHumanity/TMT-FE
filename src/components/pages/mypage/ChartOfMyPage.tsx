'use client'

import EChartsReact from "echarts-for-react"
import { useState } from "react"

export default function ChartOfMyPage() {
  const [options, setOptions] = useState({
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        data: [
          { value: 1048, name: '삼성전자' },
          { value: 735, name: 'DB손해보험' },
          { value: 580, name: '노브랜드' },
          { value: 484, name: '동양생명' },
          { value: 300, name: '대동전자' }
        ],
        type: 'pie',
        radius: '67%',
      },
    ],
  })

  return (
    <EChartsReact
      option={options}
      opts={{ renderer: 'svg' }}
    />
  )
}
