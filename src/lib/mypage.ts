const stockContents = [
  {id : 1, name : "매수/매도 내역 조회", path : "/mypage/trade/tradelists"},
  {id : 2, name : "예약 매수/매도 내역 조회", path : "/mypage/trade/reservation/tradelists"},
  {id : 3, name : "내가 구독한 사람 조회", path : "/mypage/subscribe/following"},
  {id : 4, name : "나를 구독한 사람 조회", path : "/mypage/subscribe/follower"},
  {id : 5, name : "즐겨찾기 목록 조회", path : "/mypage/bookmark"},
  {id : 6, name : "충전 내역 조회", path : "/mypage/payments/log"},
]

const settingContents = [
  {id : 1, name : "비밀번호 변경", path : "/change/password"},
  {id : 2, name : "결제 비밀번호 변경", path : "/change/paypassword"},
  {id : 3, name : "닉네임 변경", path : "/change/nickname"},
  {id : 4, name : "결제하기", path : "/payments"},
  {id : 5, name : "금액(원)충전하기", path : "/charge"},
]

export { stockContents, settingContents }