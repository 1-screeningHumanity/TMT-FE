import { getAccessToken } from "./tokens";

export async function postCharge(cash : number) {

  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/payments/charge/won`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
      },
      body : JSON.stringify({
        cash : cash,
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