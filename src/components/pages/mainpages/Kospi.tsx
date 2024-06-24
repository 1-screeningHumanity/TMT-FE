'use client'
import { kospiType } from '@/types/Mainpage'
import Krx from './Krx'

export default function Kospi({data, title}: { data: kospiType, title: string}) {
            
  return (
    <div className="bg-white rounded-xl py-[2rem] px-[1rem] w-[48%] leading-tight">
      <h3 className="font-bold text-md">{title && title}</h3>
      <Krx data={data && data} />
    </div>
  )
}
