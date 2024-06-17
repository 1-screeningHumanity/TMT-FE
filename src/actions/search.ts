import { GetAPI, PostAPI } from './fetchAPI'

async function searchNameAPI(searchName: string, searchType: string) {
  const res = await GetAPI(`/search/${searchType}?searchName=${searchName}`)
  return res
}

export { searchNameAPI }
