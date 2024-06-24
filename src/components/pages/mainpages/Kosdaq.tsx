import { kospiType } from '@/types/Mainpage'
import Krx from './Krx'

export default function Kosdaq(data: { data: kospiType }) {
  const kospiData: kospiType = data.data

  return (
    <div className="bg-white rounded-xl py-[2rem] px-[1rem] w-full">
      <h3 className="font-bold text-md">코스닥</h3>
      <Krx data={kospiData} />
    </div>
  )
}
