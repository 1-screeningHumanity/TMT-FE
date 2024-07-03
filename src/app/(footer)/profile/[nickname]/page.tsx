import { profilePortfolio, profileRank } from "@/actions/profile";
import { isSubscribed } from "@/actions/subscribe";
import AssetListOfProfile from "@/components/pages/profile/AssetListOfProfile";
import ButtonOfSubscribe from "@/components/pages/profile/ButtonOfSubscribe";
import ChartOfProfile from "@/components/pages/profile/ChartOfProfile";
import ContentsOfProfile from "@/components/pages/profile/ContentsOfProfile";
import TitleOfPages from "@/components/ui/TitleOfPages";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import { MinusIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default async function Profile({params} : {params :{nickname: string}}){

  const nick = decodeURIComponent(params.nickname);
  const noneDecodedNick = params.nickname;
  const res = await isSubscribed(nick);
  const isSubscribe = res?.data?.isSubscribe;

  const rankRes = await profileRank(noneDecodedNick);
  const rank = rankRes?.data;

  const portfolioRes = await profilePortfolio(noneDecodedNick);
  let portfolio = null;

  if(portfolioRes.isSuccess){
    portfolio = portfolioRes?.data;
  }

  return (
    <div>
      <div className="flex justify-center items-center gap-3 ml-4">
        <TitleOfPages title={nick}/>
        { portfolio &&
        <div>
          {portfolio[0]?.grade == "Silver" ? <Image src={"/assets/images/silver-medal.svg"} width={25} height={25} alt={"grade"} /> : null}
          {portfolio[0]?.grade == "Gold" ? <Image src={"/assets/images/gold-medal.svg"} width={25} height={25} alt={"grade"} /> : null}
          {portfolio[0]?.grade == "Diamond" ? <Image src={"/assets/images/gem-stone.svg"} width={25} height={25} alt={"grade"} /> : null}
        </div>}
      </div>
      <div className="flex justify-center items-center text-md mx-8 my-4 gap-3">
        <p className="text-[#a1a1a1]">일간순위</p>
        <p>{rank?.todayRanking} 위</p>
      </div>
      <main className="">
        <ButtonOfSubscribe isSubscribe={isSubscribe} nick={params.nickname}/>
          <div className="flex justify-between items-center my-5 mx-8">
            <h3 className="text-md text-[#a8a8a8]">
              총 자산 <br/>
              <span className="text-3xl font-semibold text-[#7d12ff]">￦ {formatNumberWithCommas(rank?.won)}원</span>
            </h3>
            {
              rank?.profit > 0 ?
              <div>
                <h3 className="text-md mb-2 text-[#a8a8a8]">수익률</h3>
                <div className="text-red-500 text-center flex gap-2">
                  <Image src="/assets/images/upPrice.svg" width={10} height={10} alt="upPrice"/>
                  {rank?.profit}%
                </div> 
              </div>
              :
              (rank?.profit == 0 ?
                <div>
                  <h3 className="text-md  text-[#a8a8a8] mb-2">수익률</h3>
                  <div className="text-green-500 text-center">
                  {rank?.profit}%
                  </div> 
                </div>
              :
              <div>
                <h3 className="text-md  text-[#a8a8a8] mb-2">수익률</h3>
                <div className="text-blue-500 text-center flex gap-2">
                  <Image src="/assets/images/downPrice.svg" width={10} height={10} alt="downPrice"/>
                  {rank?.profit}% 
                </div>
              </div>
              )
            }
          </div>
          <ContentsOfProfile isSubscribe={isSubscribe} nick={nick}/>
      </main>
    </div>
  )
}