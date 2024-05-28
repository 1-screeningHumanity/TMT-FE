"use server"

export async function postSignup(name : string | undefined, phoneNumber : string | undefined, password : string | undefined, nickname : string | undefined) {

  try {
    const res = await fetch(`https://screeninghumanity.shop/api/v1/member/signup`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        name : name,
        phoneNumber : phoneNumber,
        password : password,
        nickname : nickname
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

