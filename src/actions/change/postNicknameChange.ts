"use server"

import { getAccessToken } from "../tokens";


export default async function postNicknameChange(nickname : string | null) {

  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/member/nickname`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
      },
      body : JSON.stringify({
        nickname : nickname,
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