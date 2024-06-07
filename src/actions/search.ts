import { GetAPI, PostAPI } from './FetchAPI'

async function searchNameAPI(searchName: string, searchType: string) {
  const res = await GetAPI(`/search/${searchType}?searchName=${searchName}`)
  return res
}

export { searchNameAPI }
