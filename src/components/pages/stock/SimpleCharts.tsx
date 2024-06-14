'use client'
import { getSocketData } from '@/actions/stock/getSocketData'
import { StockYearData } from '@/lib/stock/StockYearData'
import { StockChartDataType } from '@/types/Stock'
import ReactECharts from 'echarts-for-react'

export default function SimpleCharts({ data }: { data: any }) {
  const today = getSocketData('005930')
  const data0 = splitData(data, today)
  // console.log('data0', data0)
  function splitData(rawData: StockChartDataType[], socketData: any) {
    const categoryData = []
    const values = []
    for (var i = 0; i < rawData.length; i++) {
      var date = rawData[i].stck_bsop_date.replace(
        /(\d{4})(\d{2})(\d{2})/,
        '$1/$2/$3',
      )
      categoryData.push(date)
      values.push(parseFloat(rawData[i].stck_clpr))
    }
    if (socketData.todayDate == categoryData[categoryData.length - 1]) {
      categoryData.pop()
      values.pop()
      values.push([parseFloat(socketData.now_price)])
    } else {
      values.push([parseFloat(socketData.now_price)])
    }

    return {
      categoryData: categoryData,
      values: values,
    }
  }
  var option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data0.categoryData,
    },
    symbol: 'none',
    yAxis: {
      type: 'value',
      splitNumber: 2,
      axisLine: { lineStyle: { color: '#777' } },
    },
    grid: {
      left: '12%',
      right: '5%',
      height: '55%',
    },
    dataZoom: {
      type: 'inside',

      start: 90,
      end: 100,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },

    series: [
      {
        data: data0.values,
        type: 'line',
        showSymbol: false,
        // areaStyle: {
        //   color: '#ff0000',
        // },
      },
    ],
  }
  return (
    <div>
      <div className="  w-full text-white">
        <ReactECharts option={option} />
      </div>
    </div>
  )
}
