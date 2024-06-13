import { GetAPI } from '../fetchAPI'

async function sortAPI(sortOption: string) {
  const res = await GetAPI(`/stockitem/mainpage/${sortOption}`)
  return res.data
}
export { sortAPI }
