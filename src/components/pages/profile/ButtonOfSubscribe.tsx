'use client'

import { unsubscribe } from "@/actions/subscribe"
import { toast, useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function ButtonOfSubscribe({isSubscribe, nick} : {isSubscribe: boolean ,nick : string}){

  const router = useRouter()
  const { toast } = useToast();

  const handleUnsubscribe = async () => {
    const res = await unsubscribe(nick)
    console.log("handleUnsubscribe :", res);
    if(res.isSuccess){
      toast({
        title: '구독이 취소되었습니다',
        variant : "default",
      })
    }else{
      toast({
        title: '구독 취소에 실패했습니다',
        variant : "destructive",
      })}
  }
  return(
    <>
      { isSubscribe == false ?
          <div className="flex items-center">
            <button className="w-16 h-8 border-[1px] bg-[#7d00d0] rounded-full text-white mt-4" onClick={() => router.push(`/profile/${nick}/payments`)}>구독</button> 
          </div> 
          :
          <button className="w-16 h-8 border-[1px] border-[#000000] rounded-full text-black mt-4" onClick={handleUnsubscribe}>구독중</button>
        }
    </>
  )
}