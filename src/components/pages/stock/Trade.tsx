'use client'
import React from 'react'
import { useState } from 'react'
export default function Trade() {
  const [price, setPrice] = useState(0)
  const [amount, setAmount] = useState(0)

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
  }
  const handleamountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }
  const handleBuyButtonClick = async (trade: string) => {
    console.log('price', price)
    console.log('amount', amount)
    const res = await fetch(
      `https://screeninghumanity.shop/api/v1/trade/${trade}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzVG9rZW4iLCJzdWIiOiJ0ZXN0dGVzdHRlc3QiLCJpYXQiOjE3MTYwNTgyMjcsImV4cCI6MjAxNjA1ODIyN30._LA7TiyZ9cCwjGLLqIUIAqcQkYRtTJR5S00o5R0hFCw`,
        },
        body: JSON.stringify({
          stockCode: '005930',
          price: 1000,
          amount: 3,
        }),
      },
    )
  }
  return (
    <>
      <div>
        <div className="flex">
          <span>단가</span>
          <input
            type="number"
            className="border"
            onChange={handlePriceChange}
          />
        </div>
        <div className="flex">
          <span>수량</span>
          <input
            type="number"
            className="border"
            onChange={handleamountChange}
          />
        </div>
      </div>
      <div className="flex">
        <button
          className=" w-1/2 h-10 font-bold text-white rounded-2xl"
          style={{ backgroundColor: '#0000ff' }}
          onClick={() => handleBuyButtonClick('sale')}
        >
          팔기
        </button>
        <button
          className="w-1/2 h-10 font-bold text-white rounded-2xl"
          style={{ backgroundColor: '#ff0000' }}
          onClick={() => handleBuyButtonClick('buy')}
        >
          사기
        </button>
      </div>
    </>
  )
}
