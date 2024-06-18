'use client'

import React, { useState } from 'react'
import Card from './CashCardItem'
import { useRouter } from 'next/navigation'
import { CashCardData } from '@/lib/payments/CashCardData'
import CashCardItem from './CashCardItem'

function CashCard() {

  const [cash, setCash] = useState<number>(0)
  const router = useRouter();

  function getCash(amount : number){
    setCash(amount)
    console.log(amount)
  }


  return (
    <div className="grid grid-cols-2 gap-4 w-5/6 mx-auto">
      {CashCardData.map((item) => (
        <CashCardItem key={item.id} cash={item.cash} onClick={()=> {getCash(item.cash); router.push(`/payments?price=${item.cash}`)}}/>
      ))}
    </div>
  )
}

export default CashCard
