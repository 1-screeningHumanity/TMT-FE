import { getMiddleCateogoryAPI } from '@/actions/category'
import { categoryDataType, subCategoryDataType } from '@/types/categoryDataType'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page(props: { params: { categoryId: number } }) {
  const mainCategoryId = props.params.categoryId
  const middleCateogoryData: subCategoryDataType =
    await getMiddleCateogoryAPI(mainCategoryId)
  const middleCateogory: categoryDataType[] = middleCateogoryData.categoryData
  return (
    <main>
      <span className="font-bold pl-3 text-xl w-full fixed flex items-center bg-slate-100 z-10">
        {middleCateogoryData.mainCategoryName}
      </span>
      <ul className="top-8 relative">
        {middleCateogory.map((mid: categoryDataType) => (
          <Link href={`/category/${mainCategoryId}/${mid.categoryId}`}>
            <li className="w-full h-12 flex p-8 items-center border-b-2 border-gray-200">
              <Image
                src={mid.img_url}
                width={30}
                height={30}
                alt={mid.categoryName}
              />
              <span className="ml-5">{mid.categoryName}</span>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  )
}
