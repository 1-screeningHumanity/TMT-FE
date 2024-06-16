import { getAccessToken } from "./tokens";

export async function getTradeList() {

  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/trade/trade-lists`, {
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

export async function getReservationTradeList() {
  
  try {
    const TOKEN = await getAccessToken()
    console.log("TOKEN :", TOKEN);
    const res = await fetch(`${process.env.API_BASE_URL}/trade/reservation/trade-lists`, {
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
