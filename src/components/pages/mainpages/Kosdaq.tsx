import { kospiType } from '@/types/Mainpage'
import Krx from './Krx'

export default function Kosdaq({data, title}: { data: kospiType, title : string }) {
  // const kospiData: kospiType = data.data

  return (
    <section className="bg-white rounded-xl py-8 px-4 w-[48%] leading-tight">
      <h3 className="text-md font-bold">
        {title}
      </h3>
      <Krx data={data} />
    </section>
  )
}
