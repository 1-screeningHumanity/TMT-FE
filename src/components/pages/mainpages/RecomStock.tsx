'use client'
import mainpageData from '@/lib/mainpageData'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function RecomStock() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-10px' }}
      animate={{ opacity: 1, translateY: '0px' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex font-bold text-xl p-2">
        추천 주식 top 20
        <Image
          src={'/assets/images/Increase.svg'}
          alt="작은 주식"
          width={25}
          height={25}
        />
      </div>
      <section className="flex flex-wrap justify-around">
        {mainpageData.map((stock) => (
          <Link href={`/stock/${stock.stockCode}`} key={stock.id}>
            <div className="flex items-center justify-between p-4 border-b bg-white rounded-lg ">
              <div className="flex items-center">
                <p className=" font-bold">{stock.stockName}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </motion.div>
  )
}
