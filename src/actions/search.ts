import { GetAPI, PostAPI } from './fetchAPI'

async function searchNameAPI(searchName: string, searchType: string) {
  const res = await GetAPI(`/search/${searchType}?searchName=${searchName}`)
  return res
}
async function mainNewsAPI(keyword: string) {
  const res = await GetAPI(`/search/news?keyword=${keyword}`)
  return res.data
}
export { searchNameAPI, mainNewsAPI }
