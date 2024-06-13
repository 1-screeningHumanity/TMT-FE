import React from 'react'
import Card from './Card'

const dummy = [
  {id:1, cash:"1,000"},
  {id:2, cash:"5,000"},
  {id:3, cash:"10,000"},
  {id:4, cash:"50,000"},
]

function CashCard() {
  return (
    <div className="grid grid-cols-2 mt-20 gap-4 w-5/6 mx-auto">
       {
          dummy.map((item) => (
            <Card key={item.id} cash={item.cash}/>
          ))
       } 
      </div>
  )
}

export default CashCard