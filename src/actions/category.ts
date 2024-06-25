import { GetAPI } from './fetchAPI'

async function getMainCategoryAPI() {
  const res = await GetAPI('/search/categories')
  return res.data
}
async function getMiddleCateogoryAPI(mainCategoryId: number) {
  const res = await GetAPI(
    `/search/maincategories/${mainCategoryId}/subcategory`,
  )
  return res.data
}
async function getSubCategoryAPI(subCategoryId: number) {
  const res = await GetAPI(`/search/subcategories/${subCategoryId}/items`)
  return res.data
}
export { getMainCategoryAPI, getMiddleCateogoryAPI, getSubCategoryAPI }
