import Link from "next/link";

export default function ContentsOfMyPage(){

  const contents = [
    {id : 1, name : "비밀번호 변경", path : "/change/password"},
    {id : 2, name : "결제 비밀번호 변경", path : "/change/paypassword"},
    {id : 3, name : "닉네임 변경", path : "/change/nickname"},
    {id : 4, name : "결제하기", path : "/payments"},
    {id : 5, name : "금액(원)충전하기", path : "/charge"},
    {id : 6, name : "매수/매도 내역 조회", path : "/trade/tradelists"},
    {id : 7, name : "예약 매수/매도 내역 조회", path : "/trade/reservation/tradelists"},
    {id : 8, name : "구독자 조회", path : "/subscribe/following"},
    {id : 9, name : "나를 구독한 사람 조회", path : "/subscribe/follower"},
    {id : 10, name : "즐겨찾기 목록 조회", path : "/bookmark"},
    {id : 11, name : "충전 내역 조회", path : "/payments/log"},
  ]


  return (
    <div className="w-80 mx-auto mt-20">
      {contents.map((content) => (
        <Link key={content.id} href={content.path} className="border-[1px] w-80 h-12 block text-center leading-10">{content.name}</Link>
      ))}
    </div>
  )
}