import { kospiType } from '@/types/Mainpage'
import Krx from './Krx'

export default function Kospi({data, title}: { data: kospiType, title: string}) {
  // const kospiData: kospiType = data.data

  return (
    <div className="bg-white rounded-xl py-8 px-4 w-[49.8%] leading-tight tracking-tighter">
      <h3 className='font-bold text-md'>{title}</h3>
      <Krx data={data} />
    </div>
  )
}
