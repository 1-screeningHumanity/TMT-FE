'use client'
import { StockYearData } from '@/lib/stock/StockYearData'
import { StockChartDataType } from '@/types/StockCharDataType'
import ReactECharts from 'echarts-for-react'
import { getSocketData } from '@/actions/stock/getSocketData'
import { filter } from 'echarts/types/src/export/api/util.js'
import * as echarts from 'echarts'
import { lazy, useEffect, useRef, useState } from 'react'
export default function TodayChart() {
  const upColor = '#ff0000'
  const downColor = '#0000ff'
  const getTodayData = getSocketData('005930')
  const data0 = splitData(getTodayData)

  function splitData(socketData: any) {
    const categoryData: any[] = []
    const values: number[][] = []
    if (socketData.todayDate == categoryData[categoryData.length - 1]) {
      categoryData.pop()
      values.pop()
      values.push([
        parseFloat(socketData.stck_oprc),
        parseFloat(socketData.now_price),
        parseFloat(socketData.stck_lwpr),
        parseFloat(socketData.stck_hgpr),
      ])
    } else {
      categoryData.push(socketData.todayDate)
      values.push([
        parseFloat(socketData.stck_oprc),
        parseFloat(socketData.now_price),
        parseFloat(socketData.stck_lwpr),
        parseFloat(socketData.stck_hgpr),
      ])
    }

    return {
      categoryData: categoryData,
      values: values,
    }
  }

  var option = {
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
        // min: 'dataMin',
        // max: 'dataMax',
      },
      {
        type: 'category',
        gridIndex: 1,
        data: data0.categoryData,
        boundaryGap: false,
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
        startValue: data0.categoryData.length - 30,
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
  useEffect(() => {
    if (myChartDom.current) {
      const myChart = echarts.init(myChartDom.current)
      // myChart.setOption(option, {
      //   series: [
      //     {
      //       data: volumes,
      //     },
      //     {
      //       data: data0.values,
      //     },
      //     {
      //       data: calculateMA(5),
      //     },
      //     {
      //       data: calculateMA(20),
      //     },
      //     {
      //       data: calculateMA(60),
      //     },
      //     {
      //       data: calculateMA(120),
      //     },
      //   ],
      // })

      // 차트 초기화 후 다른 작업을 수행할 수 있습니다.

      myChart.setOption(option)
    }
  }, [option, myChartDom])

  // option && myChart.setOption(option, true)

  // window.addEventListener('resize', myChart.resize)
  return (
    <div>
      <div ref={myChartDom} className="con">
        {/* <ReactECharts option={option} ref={myChartDom} /> */}
      </div>
      {/* 
      <div className="mt-2 w-full h-32 bg-red-700"> 거래량</div> */}
    </div>
  )
}
