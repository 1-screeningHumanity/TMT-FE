'use client'

import { myPortfolio } from '@/actions/myPage'
import { portfolioType } from '@/types/portfolioType'
import EChartsReact from 'echarts-for-react'
import { useEffect, useState } from 'react'

export default function ChartOfMyPage() {
  const [portfolio, setPortfolio] = useState<portfolioType[]>([])
  const [options, setOptions] = useState({
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        data: [] as { value: number; name: string }[], // Initialize with correct type
        type: 'pie',
        radius: ['50%', '70%'],
      },
    ],
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await myPortfolio()
      setPortfolio(res?.data || [])
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (portfolio.length > 0) {
      const chartData = portfolio
        .filter(
          (item) =>
            item.stockPrice !== null &&
            item.stockName !== null &&
            item.totalAmount !== null,
        ) // Filter out null values
        .map((item) => ({
          value: (item.stockPrice as number) * (item.totalAmount as number), // Multiply stockPrice and totalAmount
          name: item.stockName as string, // Assert non-null type
        }))

      setOptions((prevOptions) => ({
        ...prevOptions,
        series: [
          {
            ...prevOptions.series[0],
            data: chartData,
          },
        ],
      }))
    }
  }, [portfolio]) // Add portfolio as a dependency to update options when portfolio changes

  return <EChartsReact option={options} opts={{ renderer: 'svg' }} />
}
