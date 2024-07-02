'use client'

import { KosdaqAPI, KospiAPI } from '@/actions/stock/mainpage'
import { kospiType } from '@/types/Mainpage'
import { dateFormmating } from '@/utils/time'
import Kospi from './Kospi'
import Kosdaq from './Kosdaq'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function DomesticIndex({data, delay} : {data : kospiType[], delay : number}) {

  const [show, setShow] = useState<boolean>(false)
  const [kospiData, setKospiData] = useState<kospiType | null>()
  const [kosdaqData, setKosdaqData] = useState<kospiType | null>()
  const [date, setDate] = useState<string>("")

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if(data){
      setKospiData(data[0])
      setKosdaqData(data[1])
      setDate(dateFormmating(data[0]?.dateTime))
    }
  }, [data])

  if (!show) return null;

  return (
    <motion.div initial={{ opacity : 0, translateY : "-10px" }} animate={{ opacity:1, translateY : "0px" }} transition={{ duration : 0.3 }} className='py-4 drop-shadow-sm '>
      <h3 className="font-bold text-lg px-4 tracking-tighter">국내 시장 지표</h3>
      <p className="px-4 text-xs">{date} 기준</p>
      <div className="flex flex-wrap gap-2 justify-between items-center mt-5">
        {
          kospiData && kosdaqData && (
            <>
              <Kospi data={kospiData} title="코스피"/>
              <Kosdaq data={kosdaqData} title="코스닥"/>
            </>
          )
        }
      </div>
    </motion.div>
  )
}
