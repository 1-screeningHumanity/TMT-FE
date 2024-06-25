import { getMiddleCateogoryAPI } from '@/actions/category'
import { categoryDataType, subCategoryDataType } from '@/types/categoryDataType'
import Link from 'next/link'

export default async function Page(props: { params: { categoryId: number } }) {
  const mainCategoryId = props.params.categoryId
  const middleCateogoryData: subCategoryDataType =
    await getMiddleCateogoryAPI(mainCategoryId)
  const middleCateogory: categoryDataType[] = middleCateogoryData.categoryData
  console.log(middleCateogory)

  return (
    <main>
      <div className="font-bold text-xl p-2 w-full h-16 fixed flex items-center"></div>
      <ul className="top-16 relative">
        {middleCateogory.map((mid: categoryDataType) => (
          <Link href={`/category/${mainCategoryId}/${mid.categoryId}`}>
            <li className="w-full h-12 flex p-10 items-center border-b-2 border-gray-200">
              {mid.categoryName}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  )
}
