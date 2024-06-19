import { kospiType } from '@/types/Mainpage'
import Krx from './Krx'

export default function Kospi(data: { data: kospiType }) {
  const kospiData: kospiType = data.data

  return (
    <section className="bg-slate-100 rounded-xl w-full mx-5 h-28">
      <div className=" flex justify-center items-center h-10 text-lg font-semibold ">
        코스피
      </div>
      <Krx data={kospiData} />
    </section>
  )
}
