import { isSubscribed } from "@/actions/subscribe";
import ButtonOfSubscribe from "@/components/pages/profile/ButtonOfSubscribe";
import ChartOfProfile from "@/components/pages/profile/ChartOfProfile";
import ContentsOfProfile from "@/components/pages/profile/ContentsOfProfile";
import Headers from "@/components/ui/Headers";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import Image from "next/image";

export default async function Profile({params} : {params :{nickname: string}}){

  const nick = decodeURI(params.nickname);
  const res = await isSubscribed(nick);
  const isSubscribe = res?.data?.isSubscribe;

  return (
    <div>
      <Headers title={nick}/>
      <main className="mx-8">
        <ButtonOfSubscribe isSubscribe={isSubscribe} nick={nick}/>
          <div className="flex justify-between items-center">
            <h1 className="text-md mt-4 mb-10 text-[#a8a8a8]">
              총 자산 <br/>
              <span className="text-4xl font-semibold text-[#7d00d0]">￦ {formatNumberWithCommas(0)}원</span>
            </h1>
            {
              0 > 0 ?
              <div className="text-red-500 flex gap-2">
                <Image src="/assets/images/upPrice.svg" width={10} height={10} alt="upPrice"/>
                {"수익률"}%
              </div> :
              <div className="flex text-blue-500 gap-2">
                <Image src="/assets/images/downPrice.svg" width={10} height={10} alt="downPrice"/>
                {"손실률"}% 
              </div>
            }
          </div>
          <ContentsOfProfile isSubscribe={isSubscribe}/>
      </main>
    </div>
  )
}