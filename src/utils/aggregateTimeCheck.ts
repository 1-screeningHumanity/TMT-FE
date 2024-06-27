function dailyAggregateTimeRange() {
  // 현재 시간을 가져옴
  let currentTime = new Date()

  // 시간을 추출
  let hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()

  const startHour = 16
  const startMinute = 0
  const endHour = 17
  const endMinute = 30

  // 현재 시간을 분 단위로 변환
  let currentTotalMinutes = hours * 60 + minutes
  let startTotalMinutes = startHour * 60 + startMinute
  let endTotalMinutes = endHour * 60 + endMinute

  // 현재 시간이 유효한 범위에 있는지 확인
  if (
    currentTotalMinutes >= startTotalMinutes &&
    currentTotalMinutes <= endTotalMinutes
  ) {
    return true // 유효한 범위 안에 있음
  } else {
    return false // 유효하지 않은 범위에 있음
  }
}

function isWithinFridayWindow() {
  // 현재 날짜와 시간 가져오기
  let now = new Date();

  // 오늘의 요일 가져오기 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  let today = now.getDay();

  // 금요일인지 확인
  if (today !== 5) {
      return false;
  }

  // 현재 시간을 분으로 변환
  let currentMinutes = now.getHours() * 60 + now.getMinutes();

  // 금요일 오후 4시(16:00)의 시작 시간과 오후 5시 30분(17:30)의 종료 시간
  let startMinutes = 16 * 60;
  let endMinutes = 17 * 60 + 30;

  // 현재 시간이 금요일 오후 4시부터 5시 30분 사이인지 확인
  return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}

function getLastFridayOfMonth(year : number, month : number) {
  // 해당 달의 마지막 날
  let lastDay = new Date(year, month + 1, 0);

  // 마지막 날의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  let lastDayOfWeek = lastDay.getDay();

  // 마지막 금요일로 이동
  let daysToLastFriday = (lastDayOfWeek + 2) % 7;
  lastDay.setDate(lastDay.getDate() - daysToLastFriday);

  return lastDay;
}

function isWithinMonthlyFridayWindow() {
  // 현재 날짜와 시간 가져오기
  let now = new Date();

  // 이번 달의 마지막 금요일 계산
  let lastFriday = getLastFridayOfMonth(now.getFullYear(), now.getMonth());

  // 마지막 금요일 오후 4시와 오후 5시 30분 설정
  let start = new Date(lastFriday);
  start.setHours(16, 0, 0, 0); // 오후 4시

  let end = new Date(lastFriday);
  end.setHours(17, 30, 0, 0); // 오후 5시 30분

  // 현재 시간이 그 시간 범위에 속하는지 확인
  return now >= start && now <= end;
}

export { dailyAggregateTimeRange, isWithinFridayWindow, isWithinMonthlyFridayWindow }