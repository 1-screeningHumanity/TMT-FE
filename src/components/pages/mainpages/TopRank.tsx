'use client'
import Soaring from '@/components/pages/mainpages/Soaring'
import { StockSortType } from '@/types/StcokSortType'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function TopRank({data, delay }: { data: any, delay: number }) {

  const [top3soaring, setTop3soaring] = useState<StockSortType[]>([])
  const [top3plummeting, setTop3plummeting] = useState<StockSortType[]>([])
  const [show, setShow] = useState(false)
    
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (data) {
      setTop3soaring(data[0].slice(0, 3))
      setTop3plummeting(data[1].slice(0, 3))
    }
  }, [data])
  
  if (!show) return null;
  return (
    <motion.div initial={{ opacity: 0, translateY: '-10px' }} animate={{ opacity: 1, translateY: '0px' }} transition={{ duration: 0.3 }} className='py-[1rem] px-[1rem] drop-shadow-sm'>
      <h3 className="font-bold text-lg ">오늘의 급등주 Top3</h3>
    </motion.div>
  )
}
