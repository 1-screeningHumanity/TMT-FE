import { GetAPI, PostAPI } from './FetchAPI'

async function searchNameAPI(searchName: string) {
  const res = await GetAPI(`/search/stocks?searchName=${searchName}`)
  return res
}
export { searchNameAPI }
