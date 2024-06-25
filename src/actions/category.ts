import { GetAPI } from './fetchAPI'

async function getMainCategoryAPI() {
  const res = await GetAPI('/search/categories')
  return res.data
}
export { getMainCategoryAPI }
