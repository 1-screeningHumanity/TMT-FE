'use client'

import { sortAPI } from '@/actions/stock/mainpage'
import Soaring from '@/components/pages/mainpages/Soaring'
import { StockSortType } from '@/types/StcokSortType'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function TopRank({
  data,
  delay,
}: {
  data: any[]
  delay: number
}) {
  // const soaringData = await sortAPI('soaring-stocks')
  // const plummetingData = await sortAPI('plummeting-stocks')
  const [top3soaring, setTop3soaring] = useState<StockSortType[]>()
  const [top3plummeting, setTop3plummeting] = useState<StockSortType[]>()
  // const top3plummeting: StockSortType[] = plummetingData.slice(0, 3)
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if(data){
      setTop3soaring(data[0]?.slice(0,3))
      setTop3plummeting(data[1]?.slice(0,3))
    }
  }, [data])

  if (!show) return null
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-10px' }}
      animate={{ opacity: 1, translateY: '0px' }}
      transition={{ duration: 0.3 }}
      className="py-4 drop-shadow-sm"
    >
      <h3 className="font-bold text-lg px-4 tracking-tighter">
        오늘의 급등주 Top3
      </h3>
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'soaring-stocks' } }}
      >
        <Soaring data={top3soaring} color={'RED'} />
      </Link>

      <h3 className="font-bold text-lg px-4 tracking-tighter">
        오늘의 급락주 Top3
      </h3>
      <Link
        href={{
          pathname: '/stockRank',
          query: { sort: 'plummeting-stocks' },
        }}
      >
        <Soaring data={top3plummeting} color={'BLUE'} />
      </Link>
    </motion.div>
  )
}
