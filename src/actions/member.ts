"use server"

import { getAccessToken } from "./tokens";

export async function postSignOut() {

  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/member/signout`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
      },
      },
    )
    const data = await res.json()
    console.log("data in signOut :", data);
    return data
  } catch (error) {
    return
  }
}

export async function deleteMember() {

  try {
    const TOKEN = await getAccessToken();
    const res = await fetch(`${process.env.API_BASE_URL}/member/`, {
      cache: "no-store",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : TOKEN
      },
      },
    )
    const data = await res.json()
    console.log("data in deleteMember :", data);
    return data
  } catch (error) {
    return
  }
}