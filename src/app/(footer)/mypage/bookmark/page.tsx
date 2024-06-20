import Headers from "@/components/ui/Headers"
import Image from "next/image"

export default function bookmark(){
  return (
    <div>
      <Headers title="즐겨찾기"/>
      <div className="w-5/6 bg-slate-200 mx-auto mt-5 h-20 rounded-md flex items-center shadow-md">
        <div className="ml-10 text-center">
          <div className="flex relative items-center justify-between">
            <span>삼성전자</span>
          </div>
        </div>
      </div>
    </div>
  )
}