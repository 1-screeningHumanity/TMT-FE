'use client'
import { StockYearData } from '@/lib/stock/StockYearData'
import { StockChartDataType } from '@/types/StockCharDataType'
import { color } from 'echarts'
import ReactECharts from 'echarts-for-react'

export default function Charts() {
  const upColor = '#ff0000'
  const downColor = '#0000ff'
  const data0 = splitData(StockYearData)
  const volumes = splitVol(StockYearData)

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
      values.push([
        parseFloat(rawData[i].stck_oprc),
        parseFloat(rawData[i].stck_clpr),
        parseFloat(rawData[i].stck_lwpr),
        parseFloat(rawData[i].stck_hgpr),
      ])
    }
    console.log(categoryData)
    console.log(values)
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
      data: ['차트', '5일선', '20일선', '60일선', '120일선'],
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
        left: '10%',
        right: '8%',
        height: '50%',
      },
      {
        left: '10%',
        right: '8%',
        bottom: '20%',
        top: '72%',
        height: '30%',
      },
    ],
    xAxis: [
      {
        type: 'category',
        data: data0.categoryData,
        boundaryGap: false,
        axisLine: {
          onZero: false,
        },
        splitLine: {
          show: false,
        },
        axisPointer: {
          show: true,
        },
        min: 'dataMin',
        max: 'dataMax',
      },
      {
        type: 'category',
        gridIndex: 1,
        data: data0.categoryData,
        boundaryGap: false,
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { lineStyle: { color: '#777' } },
        min: 'dataMin',
        max: 'dataMax',
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
        type: 'inside',
        xAxisIndex: [0, 1],
        start: 50,
        end: 100,
      },
    ],
    series: [
      {
        name: '거래량',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          // color: '#7fbe9e', // 거래량 색
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
        name: '차트',
        type: 'candlestick',
        data: data0.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upColor,
          borderColor0: downColor,
        },
        markPoint: {
          label: {
            formatter: function (param: any) {
              return param != null ? param.name : ''
            },
            // color: 'black',
          },
          data: [
            {
              name: '최고',
              type: 'max',
              valueDim: 'highest',
            },
            {
              name: '최저',
              type: 'min',
              valueDim: 'lowest',
            },
          ],
          tooltip: {
            formatter: function (param: any) {
              return param.name + '<br>' + (param.data.coord || '')
            },
          },
        },
        markLine: {
          symbol: ['none', 'none'],
          data: [
            [
              {
                name: 'from lowest to highest',
                type: 'min',
                valueDim: 'lowest',
                symbol: 'circle',
                symbolSize: 10,
                label: {
                  show: false,
                },
                emphasis: {
                  label: {
                    show: false,
                  },
                },
              },
              {
                type: 'max',
                valueDim: 'highest',
                symbol: 'circle',
                symbolSize: 10,
                label: {
                  show: false,
                },
                emphasis: {
                  label: {
                    show: false,
                  },
                },
              },
            ],
            {
              name: 'min line on close',
              type: 'min',
              valueDim: 'lowest',
            },
            {
              name: 'max line on close',
              type: 'max',
              valueDim: 'highest',
            },
          ],
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
      {
        name: '120일선',
        type: 'line',
        data: calculateMA(120),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1,
        },
      },
    ],
  }

  // if (option && typeof option === 'object') {
  //   myChart.setOption(option)
  // }

  // window.addEventListener('resize', myChart.resize)
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
