"use server"

import { PostAPI } from "../FetchAPI";
import { getAccessToken } from "../tokens";


export default async function postNicknameChange(nickName : string | null) {

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/member/pay-password`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : await getAccessToken()
      },
      body : JSON.stringify({
        nickname : nickName,
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