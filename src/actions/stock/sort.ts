import { GetAPI } from '../FetchAPI'

async function sortAPI(sortOption: string) {
  const res = await GetAPI(`/stockitem/mainpage/${sortOption}`)
  return res.data
}
export { sortAPI }
