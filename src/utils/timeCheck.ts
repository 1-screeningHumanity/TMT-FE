function getCurrentTime() {
  let currentTime = new Date()

  let hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()

  // 현재 시간을 시:분 형태로 출력
  let currentTimeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`

  return currentTimeString
}

function isInValidTimeRange() {
  // 현재 시간을 가져옴
  let currentTime = new Date()

  // 시간을 추출
  let hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()

  // 시작 시간(9:00)과 종료 시간(15:30)을 설정
  let startHour = 9
  let startMinute = 0
  let endHour = 15
  let endMinute = 30

  // 현재 시간을 분 단위로 변환
  let currentTotalMinutes = hours * 60 + minutes
  let startTotalMinutes = startHour * 60 + startMinute
  let endTotalMinutes = endHour * 60 + endMinute

  // 현재 시간이 유효한 범위에 있는지 확인
  if (
    currentTotalMinutes >= startTotalMinutes &&
    currentTotalMinutes <= endTotalMinutes
  ) {
    return false // 유효한 범위 안에 있음
  } else {
    return true // 유효하지 않은 범위에 있음
  }
}

export default function timeCheck() {
  // 현재 시간을 가져옴
  let currentTime = getCurrentTime()

  // 현재 시간이 유효한 범위에 있으면 기본 API 호출
  if (!isInValidTimeRange()) {
    // 정규 장 시간
    console.log(`현재 시간은 ${currentTime}입니다. 기본 API를 호출합니다.`)
    return true
    // 여기에 기본 API 호출하는 코드를 추가
  } else {
    console.log(`현재 시간은 ${currentTime}입니다. 대체 API를 호출합니다.`)
    return false
    // 여기에 대체 API 호출하는 코드를 추가
  }
}
