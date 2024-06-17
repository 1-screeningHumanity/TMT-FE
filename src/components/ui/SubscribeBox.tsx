export default function SubscribeBox(){
  
  return (
    <div className="w-5/6 bg-slate-200 mx-auto mt-5 h-20 rounded-md flex items-center shadow-md">
    <div className="rounded-full bg-slate-300 w-14 h-14 ml-4"></div>
    <div className="ml-10 text-center">
      <div className="flex justify-between ml-10">
        <span>닉네임</span>
        <span>1위</span>
      </div>
      <button className="bg-white w-36 rounded-md shadow-md ml-2 mt-2">포트폴리오 보기</button>
    </div>
  </div>
  )
}