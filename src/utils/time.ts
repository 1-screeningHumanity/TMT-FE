function dateFormmating(dateTime: string) {
  const year = dateTime.substring(0, 4)

  const month = dateTime.substring(4, 6)

  const day = dateTime.substring(6, 8)

  const hour = dateTime.substring(8, 10)

  const minute = dateTime.substring(10, 12)

  return `${year}년 ${month}월${day}일 ${hour}시${minute}분`
}


function getCurruntDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${year}년 ${month}월${day}일 ${hour}시${minute}분`
}

function getPreviousDay4PM() {
  // 현재 날짜와 시간 가져오기
  let now = new Date();

  function isWeekend(date : Date) {
    const day = date.getDay();
    return day === 0 || day === 6; // 0: 일요일, 6: 토요일
}

  // 전날의 날짜와 시간 계산
  now.setDate(now.getDate() - 1);
  now.setHours(16, 40, 0, 0); // 오후 4시로 설정

  // 전날이 주말 또는 공휴일인 경우, 이전 평일로 설정
  while (isWeekend(now)) {
    now.setDate(now.getDate() - 1);
  }

  // 원하는 형식으로 날짜와 시간 변환
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
  let day = now.getDate().toString().padStart(2, '0');
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}

function getLastFriday4PM() {
  // 현재 날짜와 시간 가져오기
  let now = new Date();

  // 오늘의 요일 가져오기 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  let today = now.getDay();

  // 지난 금요일로 가기 위한 일 수 계산
  // 오늘이 금요일(5)보다 크거나 같으면 지난주 금요일까지는 (오늘 요일 - 금요일 요일 + 7)일
  // 오늘이 금요일보다 작으면 이번주 금요일까지는 (금요일 요일 - 오늘 요일)일을 더 빼야 함
  let daysSinceLastFriday = today >= 5 ? today - 5 + 7 : today + 2;

  // 지난 금요일 날짜 계산
  now.setDate(now.getDate() - daysSinceLastFriday);
  now.setHours(16, 40, 0, 0); // 오후 4시로 설정

  // 원하는 형식으로 날짜와 시간 변환
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
  let day = now.getDate().toString().padStart(2, '0');
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}

function getLastDayOfLastMonth440PM() {
  // 현재 날짜와 시간 가져오기
  let now = new Date();

  // 현재 달의 첫날로 설정
  now.setDate(1);

  // 지난달의 마지막 날로 설정
  now.setMonth(now.getMonth() - 1);
  now.setDate(new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate());

  // 오후 4시 40분으로 설정
  now.setHours(16, 40, 0, 0);

  // 원하는 형식으로 날짜와 시간 변환
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
  let day = now.getDate().toString().padStart(2, '0');
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}

export { dateFormmating, getCurruntDate, getPreviousDay4PM, getLastFriday4PM, getLastDayOfLastMonth440PM }
