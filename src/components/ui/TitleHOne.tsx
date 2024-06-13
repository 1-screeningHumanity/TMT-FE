import React from 'react'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'

function TitleHOne({title, cash}:{title:string, cash:number}) {
  return (
    <h1 className="text-center mt-14 text-lg font-bold">{
      title === "교환하기" ? `현재 보유 원 : ${formatNumberWithCommas(cash)} 원` : `총 결제금액 : ${formatNumberWithCommas(cash)} 캐시(￦)`
    }</h1>
  )
}

export default TitleHOne