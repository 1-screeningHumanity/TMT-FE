"use client";


export default function ButtonToMyPage(){

  return <button className="bg-[#7d00d0] w-80 mx-auto mt-40 text-white h-10 rounded-lg block" onClick={() => location.href="/mypage"}>마이페이지</button>
}