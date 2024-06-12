'use client';

export default function ContentsOfMyPage(){
  return (
    <div className="w-80 mx-auto mt-40">
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/change/password"}>비밀번호 변경</button>
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/change/paypassword"}>결제 비밀번호 변경</button>
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/change/nickname"}>닉네임 변경</button>
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/payments"}>결제하기</button>
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/charge"}>금액(원)충전하기</button>
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/trade/tradelists"}>매수/매도 내역 조회</button>
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/trade/reservation/tradelists"}>예약 매수/매도 내역 조회</button>
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/subscribe/following"}>구독자 조회</button>
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/subscribe/follower"}>나를 구독한 사람 조회</button>
      <button className="border-[1px] w-80 h-10" onClick={()=> location.href="/bookmark"}>즐겨찾기 목록 조회</button>
    </div>
  )
}