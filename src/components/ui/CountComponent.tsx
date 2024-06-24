'use client'
import React from 'react'
import CountUp from 'react-countup'

function CountComponent({count}: {count: number}) {
  return (
    <CountUp start={0} end={count} duration={2.5} separator=',' />
  )
}

export default CountComponent
