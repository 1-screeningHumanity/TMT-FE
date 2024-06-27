import { userInformation } from "@/actions/myPage";
import { cashInfoAPI } from "@/actions/wallet";
import ButtonOfSubscribePayments from "@/components/pages/profile/ButtonOfSubscribePayments";
import Headers from "@/components/ui/Headers";

export default async function SubscribePayments({params} : {params :{nickname: string}}) {

  const nick = decodeURI(params.nickname);
  const cashInfo = await cashInfoAPI();
  const cash = cashInfo?.data?.cash;
  
  const userInfo = await userInformation();
  const myNick = userInfo?.data?.nickanme;

  return (
    <section className="h-full">
        <h1 className="text-xl px-4 my-20"><span className="font-bold">{nick}</span> 님을 구독하시겠습니까 ?</h1>
        <div className="text-xl px-4 my-20 flex flex-col gap-2">
          <p className="">보유 캐시 : {cash}</p>
          <p className="">결제 할 금액 : {1000}캐시</p>
          <p className="text-sm text-[#aaaaaa]">기존에 구독한 회원인 경우 과금되지 않습니다.</p>
        </div>
        <ButtonOfSubscribePayments nickname={nick} myNick={myNick}/>
    </section>
  )
}