import Headers from "@/components/ui/Headers"
import SubscribeBox from "@/components/ui/SubscribeBox"

export default function Following(){
  return (
    <section>
      <Headers title="구독자 목록"/>
      <div className="text-center w-40 h-10 leading-10 mx-auto mt-4 text-white bg-[#7d00d0] font-[Pretendard-Regular]">내가 구독한 사람 목록</div>
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <SubscribeBox />
      <div className="mb-40"></div>
    </section>
  )
}