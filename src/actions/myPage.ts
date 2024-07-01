import { GetAPI } from "./fetchAPI"
import { getAccessToken } from "./tokens"

async function userInformation(){

  const token = await getAccessToken()
  const res = await GetAPI('/member/mypage/information', undefined, token)
  return res
}

async function userGrade(){

  const token = await getAccessToken()
  const res = await GetAPI('/member/grade', undefined, token)
  return res
}

async function myPortfolio(){

  const token = await getAccessToken()
  const res = await GetAPI('/portfolio/myportfolio', undefined, token)
  return res
}

export{ userInformation, userGrade, myPortfolio }