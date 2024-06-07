'use server'

import { getAccessToken } from "../tokens";

export default async function postKakaopayReady(itemName : string | null, quantity : number | null, totalAmount : number | null) {
  
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/payments/kakaopay`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : await getAccessToken()
      },
      body : JSON.stringify({
        itemName : itemName,
        quantity : quantity,
        totalAmount : totalAmount
      })
      },
    )
    const data = await res.json()
    console.log(data);
    return data
  } catch (error) {
    return
  }
}