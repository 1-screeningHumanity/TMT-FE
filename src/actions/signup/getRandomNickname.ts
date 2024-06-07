"use server"

export async function getRandomNickname() {

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/member/random-nickname`, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

