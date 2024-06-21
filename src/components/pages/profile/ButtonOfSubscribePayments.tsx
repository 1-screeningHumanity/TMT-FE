'use client'

import { subscribe } from "@/actions/subscribe";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation"

export default function ButtonOfSubscribePayments({nickname, myNick} : { nickname: string, myNick : string}) {

  const router = useRouter();
  const {toast} = useToast();

  const handleSubscribe = async () => {
    const res = await subscribe(myNick, nickname, 1000);
    console.log("handleSubscribe :", res);
    if(res.code == 200){
      toast({
        title: '구독이 완료되었습니다',
        variant : "default",
        action:(<button onClick={() => router.push(`/profile/${nickname}`)}>확인</button>)
      })
    }else if(res.code == 201){
      toast({
        title: '구독이 완료되었습니다',
        description: '기존에 구독 한 회원은 과금되지 않습니다.',
        variant : "default",
        action:(<button onClick={() => router.push(`/profile/${nickname}`)}>확인</button>)
      })
    }else{
      toast({
        title: res.message,
        variant : "destructive",
        action:(<button onClick={() => router.push(`/profile/${nickname}`)}>확인</button>)
      })
    }
  }

  return (
    <div className="absolute bottom-[62px] left-0 right-0">
      <button className="w-full h-10 bg-[#7d00d0] text-white" onClick={handleSubscribe}>구독하기</button>

      <button className="w-full h-10 bg-[#7d00d0] text-white" onClick={() => router.push("/payments")}>충전하러 가기</button>
    </div>
  )
}