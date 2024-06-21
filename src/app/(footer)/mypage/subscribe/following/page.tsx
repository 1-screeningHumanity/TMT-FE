import { userInformation } from "@/actions/myPage";
import { getFollowingList } from "@/actions/subscribe";
import Headers from "@/components/ui/Headers"
import SubTitleOfSubScribe from "@/components/ui/SubTitleOfSubScribe"
import SubscribeBox from "@/components/ui/SubscribeBox"

export default async function Following(){

  const userInfo = await userInformation();
  const myNick = userInfo?.data?.nickanme;
  const EncodedNickName = encodeURI(myNick);
  console.log("myNick :", myNick);
  console.log("EncodedNickName :", EncodedNickName);
  const res = await getFollowingList(EncodedNickName);
  const followingList = res?.data;

  return (
    <section>
      <Headers title="구독자 목록"/>
      <SubTitleOfSubScribe title="내가 구독한 사람 목록"/>
      {
        followingList?.map((item : {nickName : string}) => {
          return (
            <SubscribeBox nickName={item.nickName} rank={1} key={item.nickName}/>
          )
        })
      }

      <div className="mb-40"></div>
    </section>
  )
}