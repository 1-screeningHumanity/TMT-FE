import { GetAPI } from '../fetchAPI'

async function sortAPI(sortOption: string) {
  const res = await GetAPI(`/stockitem/mainpage/${sortOption}`)
  return res.data
}
async function KospiAPI() {
  const res = await GetAPI('/stockitem/mainpage/kospi')
  return res.data
}
async function KosdaqAPI() {
  const res = await GetAPI('/stockitem/mainpage/kosdaq')
  return res.data
}

export { sortAPI, KospiAPI, KosdaqAPI }
