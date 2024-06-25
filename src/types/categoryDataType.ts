interface categoryDataType {
  categoryId: string
  categoryName: string
  img_url: string
}

interface subCategoryDataType {
  mainCategoryName: string
  categoryData: categoryDataType[]
}
interface subItemCategoryDataType {
  mainCategoryName: string
  subCategoryName: string
  stockData: categoryDataType[]
}
export type { categoryDataType, subCategoryDataType, subItemCategoryDataType }
