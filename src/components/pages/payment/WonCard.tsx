'use client'

import React, { useState } from 'react'
import Card from './CashCardItem'
import { useRouter } from 'next/navigation'
import { WonCardData } from '@/lib/payments/CashCardData'
import WonCardItem from './WonCardItem'

function WonCard() {

  const [cash, setCash] = useState<number>(0)
  const router = useRouter();

  function getCash(amount : number){
    setCash(amount)
    console.log(amount)
  }


  return (
    <div className="flex flex-col gap-4 w-5/6 mx-auto items-center">
      {WonCardData.map((item) => (
        <WonCardItem key={item.id} cash={item.cash} won={item.won} onClick={()=> {getCash(item.cash); router.push(`/charge?price=${item.cash}`)}}/>
      ))}
    </div>
  )
}

export default WonCard
