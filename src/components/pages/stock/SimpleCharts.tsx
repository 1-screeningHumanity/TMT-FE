'use client'
import { StockYearData } from '@/lib/stock/StockYearData'
import { StockChartDataType } from '@/types/StockCharDataType'
import ReactECharts from 'echarts-for-react'

export default function SimpleCharts() {
  const data = splitData(StockYearData)

  function splitData(rawData: StockChartDataType[]) {
    const categoryData = []
    const values = []
    const vol = []
    for (var i = 0; i < rawData.length; i++) {
      var date = rawData[i].stck_bsop_date.replace(
        /(\d{4})(\d{2})(\d{2})/,
        '$1/$2/$3',
      )
      categoryData.push(date)
      values.push(parseFloat(rawData[i].stck_clpr))
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
      data: data.categoryData,
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: {
      type: 'inside',
      start: 70,
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
        data: data.values,
        type: 'line',
        // areaStyle: {
        //   color: '#ff0000',
        // },
      },
    ],
  }
  return (
    <div>
      <div className="mt-10  w-full text-white">
        <ReactECharts option={option} />
      </div>
      {/* 
  <div className="mt-2 w-full h-32 bg-red-700"> 거래량</div> */}
    </div>
  )
}
