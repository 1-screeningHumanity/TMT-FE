'use client'
import { StockYearData } from '@/lib/stock/StockYearData'
import { StockChartDataType } from '@/types/Stock'
import ReactECharts from 'echarts-for-react'

export default function DetailCharts({
  chartData,
  staticStockPrice,
}: {
  chartData: any
  staticStockPrice: any
}) {
  const upColor = '#ff0000'
  const downColor = '#0000ff'

  const data0 = splitData(chartData, staticStockPrice.staticStockPrice)
  const volumes = splitVol(chartData)

  const onClick = (params: any) => {
    console.log('params', params.data)
  }
  const onEvents = {
    click: onClick,
  }
  function splitData(rawData: StockChartDataType[], staticStockPrice: any) {
    const categoryData = []
    const values = []

    for (var i = 0; i < rawData.length; i++) {
      var date = rawData[i].stck_bsop_date.replace(
        /(\d{4})(\d{2})(\d{2})/,
        '$1/$2/$3',
      )
      categoryData.push(date)
      values.push([
        parseFloat(rawData[i].stck_oprc),
        parseFloat(rawData[i].stck_clpr),
        parseFloat(rawData[i].stck_lwpr),
        parseFloat(rawData[i].stck_hgpr),
      ])
    }
    return {
      categoryData: categoryData,
      values: values,
    }
  }

  function splitVol(Data: StockChartDataType[]) {
    const vol = []
    for (var i = 0; i < Data.length; i++) {
      vol.push(Data[i].acml_vol)
    }
    return vol
  }

  function calculateMA(dayCount: number) {
    var result = []
    for (var i = 0, len = data0.values.length; i < len; i++) {
      if (i < dayCount) {
        result.push('-')
        continue
      }
      var sum = 0
      for (var j = 0; j < dayCount; j++) {
        sum += +data0.values[i - j][1]
      }
      result.push(sum / dayCount)
    }
    return result
  }

  var option = {
    notMerge: false,

    title: {
      text: '',
      left: 0,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      hideDelay: 0,
      label: {
        color: 'red',
      },
    },
    legend: {
      top: 0,
      data0: ['차트', '5일선', '20일선', '60일선'],
    },

    axisPointer: {
      link: [
        {
          xAxisIndex: [0, 1],
        },
      ],
    },
    grid: [
      {
        left: '12%',
        right: '5%',
        height: '60%',
      },
      {
        left: '12%',
        right: '8%',
        bottom: '0%',
        height: '10%',
      },
    ],
    xAxis: [
      {
        type: 'category',
        data: data0.categoryData,
        boundaryGap: true,
        axisLine: {
          onZero: false,
        },
        splitLine: {
          show: false,
        },
        axisPointer: {
          show: true,
        },
      },
      {
        type: 'category',
        gridIndex: 1,
        data: data0.categoryData,
        boundaryGap: true,
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
      },
    ],
    yAxis: [
      {
        scale: true,
        splitNumber: 2,
        axisLine: { lineStyle: { color: '#777' } },
        splitLine: { show: true },
        axisTick: { show: false },

        axisLabel: {
          formatter: '{value}\n',
        },
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
      },
    ],
    dataZoom: [
      {
        show: true,
        type: 'inside',
        xAxisIndex: [0, 1],
        // start: 90,
        // end: 100,
        startValue: data0.categoryData.length - 10,
        endValue: data0.categoryData.length + 1,
        // startValue: 0,
        // endValue: 100,
      },
    ],
    series: [
      {
        name: '거래량',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: function (params: any) {
            var colorList
            if (
              data0.values[params.dataIndex][1] >
              data0.values[params.dataIndex][0]
            ) {
              colorList = upColor
            } else {
              colorList = downColor
            }
            return colorList
          },
        },
        barGap: '50%',
        data: volumes,
      },
      {
        resltimeSort: true,
        name: '차트',
        type: 'candlestick',
        data: data0.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upColor,
          borderColor0: downColor,
        },
      },
      {
        name: '5일선',
        type: 'line',
        data: calculateMA(5),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1,
        },
      },
      {
        name: '20일선',
        type: 'line',
        data: calculateMA(20),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1,
        },
      },
      {
        name: '60일선',
        type: 'line',
        data: calculateMA(60),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className=" w-full text-white">
        <ReactECharts option={option} onEvents={onEvents} />
      </div>
    </>
  )
}
