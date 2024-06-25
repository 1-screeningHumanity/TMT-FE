interface categoryDataType {
  categoryId: string
  categoryName: string
  img_url: string
}

interface subCategoryDataType {
  mainCategoryName: string
  categoryData: categoryDataType[]
}
export type { categoryDataType, subCategoryDataType }
