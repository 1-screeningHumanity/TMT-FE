"use server"

export default async function postPayPassword(nickName : string | null, password : string | undefined) {

  try {
    const res = await fetch(`https://screeninghumanity.shop/api/v1/member/pay-password`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        payingPassword : password,
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

