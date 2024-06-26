'use client'

import { kospiType } from '@/types/Mainpage'
import { ArrowUpIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

export default function Krx(data: { data: kospiType }) {
  
  const RED = '#ff0000'
  const BLUE = '#0000ff'
  const [color, setColor] = useState<string>('#000000')
  const [kospiData, setKospiData] = useState<kospiType | null>(null);
  
  // if (kospiData?.prdy_vrss_sign === '1' || kospiData?.prdy_vrss_sign === '2') {
  //   color = RED
  // }
  // if (kospiData.prdy_vrss_sign === '4' || kospiData.prdy_vrss_sign === '5') {
  //   color = BLUE
  // }

  useEffect(() => {
    if(data){
      setKospiData(data.data)
      const sign = data.data.prdy_vrss_sign
      if (sign === '1' || sign === '2') {
        setColor(RED)
        return
      }
      if (sign === '4' || sign === '5') {
        setColor(BLUE)
        return
      }
    }
  }, [data])

  return (
    <>
      <div className="text-[8.5vw] font-extrabold tracking-tighter" style={{ color: color }}>
        {kospiData && (
          <CountUp
            start={0}
            end={Number(kospiData.bstp_nmix_prpr)}
            duration={0.5}
            separator=''
            decimals={2}
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center" style={{ color: color }}>
          {color === '#ff0000' ? (
            <ArrowUpIcon size={15} />
          ) : (
            <ArrowUpIcon size={15} style={{ transform: 'rotate(180deg)' }} />
          )}
          <p style={{ color : color }}>
            { kospiData && Number(kospiData.bstp_nmix_prdy_vrss)}
          </p>
        </div>
        <p style={{ color: color }}>
          {color === '#ff0000' && <span>+</span>}
          {kospiData && Number(kospiData.bstp_nmix_prdy_ctrt)}
        </p>
      </div>
    </>
  )
}
