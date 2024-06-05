'use server'

import { getAccessToken } from "../tokens";

export default async function postKakaopayReady(tid : string | null, partner_order_id : string | null, pgToken : string | null) {
  
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/payments/kakaopay/approve`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : await getAccessToken()
      },
      body : JSON.stringify({
        tid : tid,
        partner_order_id : partner_order_id,
        pgToken : pgToken
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