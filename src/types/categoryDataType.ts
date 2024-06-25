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
  stockData: any[]
}
interface stockDataType {
  id: number
  stockCode: string
  stockName: string
}
export type {
  categoryDataType,
  subCategoryDataType,
  subItemCategoryDataType,
  stockDataType,
}
