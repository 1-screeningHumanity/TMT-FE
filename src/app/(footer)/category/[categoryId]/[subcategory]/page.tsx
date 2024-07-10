import { getSubCategoryAPI } from '@/actions/category'
import { subItemCategoryDataType } from '@/types/categoryDataType'
import Link from 'next/link'
export default async function Page(props: {
  params: { categoryId: number; subcategory: number }
}) {
  // console.log(props.params.categoryId, props.params.subcategory
  const subCategory = props.params.subcategory
  const subCategoryData: subItemCategoryDataType =
    await getSubCategoryAPI(subCategory)
  const stockData = subCategoryData.stockData
  return (
    <main>
      <span className="font-bold pl-3 text-xl w-full fixed flex items-center bg-slate-100 z-10">
        {subCategoryData.mainCategoryName} {' > '}{' '}
        {subCategoryData.subCategoryName}
      </span>
      <ul className="top-8 relative">
        {stockData.map((stock: any) => (
          <Link href={`/stock/${stock.stockCode}`}>
            <li
              key={stock.id}
              className="w-full h-12 flex p-8 items-center border-b-2 border-gray-200"
            >
              <span className="font-bold mr-3">{stock.stockCode}</span>
              <span>{stock.stockName}</span>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  )
}
