import { GetAPI } from "./fetchAPI";

async function profileRank(nickName : string) {
  
  const res = await GetAPI(`/rank/members/${nickName}`)
  return res;
}

async function profilePortfolio(nickName : string) {
  
  const res = await GetAPI(`/portfolio/members?nickname=${nickName}`)
  return res;
}


export { profileRank, profilePortfolio };