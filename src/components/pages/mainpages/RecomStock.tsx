'use client'
import mainpageData from '@/lib/mainpageData'
import { motion } from 'framer-motion'

export default function RecomStock() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-10px' }}
      animate={{ opacity: 1, translateY: '0px' }}
      transition={{ duration: 0.3 }}
      className="py-4 drop-shadow-sm "
    >
      <section className="flex flex-wrap justify-around">
        <div className="font-bold text-xl">추천 주식 top 20</div>
        {mainpageData.map((stock) => (
          <div
            key={stock.id}
            className="flex items-center justify-between p-4 border-b bg-white  rounded-lg "
          >
            <div className="flex items-center">
              <p className=" font-bold">{stock.stockName}</p>
            </div>
            <div className="flex items-center">
              <button className="text-xs text-blue-500">추천</button>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  )
}
