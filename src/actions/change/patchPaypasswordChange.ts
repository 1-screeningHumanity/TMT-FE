'use server'

import { getAccessToken } from "../tokens";

export default async function patchPaypasswordChange(payingPassword : string | undefined) {

  try {
    console.log("Starting patchPasswordChange function");
    
    const TOKEN = await getAccessToken();
    console.log("TOKEN : ", TOKEN);

    const res = await fetch(`${process.env.API_BASE_URL}/member/pay-password`, {
      cache: "no-store",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
      },
      body : JSON.stringify({
        payingPassword : payingPassword
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