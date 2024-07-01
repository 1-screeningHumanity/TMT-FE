const getSecondsUntilNext9AM = (): number => {
  const now = new Date() // 현재 날짜와 시간

  // 다음 날 날짜
  const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

  // 다음 날 오전 9시로 설정
  nextDay.setHours(9, 0, 0, 0)

  // 밀리초 단위로 차이 계산
  const diffInMs = nextDay.getTime() - now.getTime() // 'number' 타입으로 반환

  // 밀리초를 초로 변환
  const diffInSeconds = Math.floor(diffInMs / 1000)

  return diffInSeconds
}

const getSecondsUntilNextMonth1st = (): number => {
  const now = new Date() // 현재 날짜와 시간

  // 다음 달의 첫 번째 날을 계산
  const nextMonth = now.getMonth() === 11 ? 0 : now.getMonth() + 1
  const nextYear =
    now.getMonth() === 11 ? now.getFullYear() + 1 : now.getFullYear()
  const firstDayNextMonth = new Date(nextYear, nextMonth, 1)

  // 밀리초 단위로 차이 계산
  const diffInMs = firstDayNextMonth.getTime() - now.getTime() // 'number' 타입으로 반환

  // 밀리초를 초로 변환
  const diffInSeconds = Math.floor(diffInMs / 1000)

  return diffInSeconds
}

export { getSecondsUntilNext9AM, getSecondsUntilNextMonth1st }
