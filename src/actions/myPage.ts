import { GetAPI } from "./fetchAPI"
import { getAccessToken } from "./tokens"

export async function userInformation(){

  const token = await getAccessToken()
  const res = await GetAPI('/member/mypage/information', undefined, token)
  return res
}

export async function userGrade(){

  const token = await getAccessToken()
  const res = await GetAPI('/member/grade', undefined, token)
  return res
}