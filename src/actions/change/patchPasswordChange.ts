'use server'

import { getAccessToken } from "../tokens";

export default async function patchPasswordChange(password : string | undefined) {

  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/member/password`, {
      cache: "no-store",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
      },
      body : JSON.stringify({
        password : password
      })
      },
    )
    const data = await res.json()
    console.log("!data :", data);
    return data
  } catch (error) {
    console.log("Error in patchPasswordChange :", error)
    return
  }
}