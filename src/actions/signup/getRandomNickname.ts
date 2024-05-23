"use server"

export async function getRandomNickname() {

  try {
    const res = await fetch(`https://5046f576-7653-4317-afab-0c5606281af4.mock.pstmn.io/test/api/test`, {
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
      return data.result
    }
  } catch (error) {
    return
  }
}

