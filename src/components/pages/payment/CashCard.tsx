'use client'

import React, { useState } from 'react'
import Card from './Card'
import { useRouter } from 'next/navigation'
import { CashCardData } from '@/lib/payments/CashCardData'

function CashCard() {

  const [cash, setCash] = useState<number>(0)

  function getCash(amount : number){
    setCash(amount)
    console.log(amount)
  }


  return (
    <div className="grid grid-cols-2 mt-20 gap-4 w-5/6 mx-auto">
      {CashCardData.map((item) => (
        <Card key={item.id} cash={item.cash} onClick={()=> getCash(item.cash)}/>
      ))}
    </div>
  )
}

export default CashCard
