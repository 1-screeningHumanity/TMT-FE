import Headers from "@/components/ui/Headers";
import SubTitleOfSubScribe from "@/components/ui/SubTitleOfSubScribe";
import SubscribeBox from "@/components/ui/SubscribeBox";

export default function Follower(){

  
  return (
    <section>
      <Headers title="구독자 목록"/>
      <SubTitleOfSubScribe title="나를 구독한 사람 목록"/>
      <SubscribeBox nickName="" />
      <div className="mb-40"></div>
    </section>
  )
}