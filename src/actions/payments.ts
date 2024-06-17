import { getAccessToken } from "./tokens";

export async function postKakaopayReady(itemName : string | null, quantity : number | null, totalAmount : number | null) {
  
  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/payments/kakaopay`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
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

export async function postKakaopayApprove(tid : string | null, partner_order_id : string | null, pgToken : string | null) {
  
  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/payments/kakaopay/approve`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
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

export async function getPaymentsLog() {

  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/payment/log/info`, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
      },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log(data);
      return data
    }
  } catch (error) {
    return
  }
}

export async function getCashInitalData() {
  
  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/payment/cash`, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
      },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log(data);
      return data
    }
  } catch (error) {
    return
  }
} 