import { subScribeListType } from "@/types/subScribeListType";
import Image from "next/image";
import Link from "next/link";

export default function SubscribeBox(props : subScribeListType){
  
  const {nickName, ranking} = props

  return (
    <div className="w-5/6 bg-slate-200 mx-auto mt-5 h-20 rounded-md flex items-center shadow-md">
      <div className="rounded-full bg-slate-300 w-14 h-14 ml-4 flex items-center justify-center shrink-0">
        <Image src="/assets/images/logo3.svg" width={40} height={40} alt="profile" className=""/>
      </div>
      <div className="text-center w-full">
        <div className="flex justify-around px-10">
          <span>{nickName}</span>
          <span>{ranking}위</span>
        </div>
        <Link href={`/profile/${nickName}`} className="bg-white w-2/3  rounded-md shadow-md mx-auto mt-2 inline-block">포트폴리오 보기</Link>
      </div>
  </div>
  )
}