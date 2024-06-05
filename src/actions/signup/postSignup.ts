"use server"

export async function postSignup(name : string | undefined, phoneNumber : string | undefined, password : string | undefined, nickName : string | undefined) {

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/member/signup`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        name : name,
        nickName : nickName,
        password : password,
        phoneNumber : phoneNumber,
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

