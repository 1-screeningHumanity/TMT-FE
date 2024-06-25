import { getMainCategoryAPI } from '@/actions/category'
import Headers from '@/components/ui/Headers'
import { CategoryData } from '@/lib/categoryData'
import { categoryDataType } from '@/types/categoryDataType'
import { query } from 'firebase/database'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  const data: categoryDataType[] = await getMainCategoryAPI()

  return (
    <main className="flex flex-wrap justify-around">
      <Headers title="카테고리" />
      {data.map((category: categoryDataType) => (
        <Link
          href={{
            pathname: `/category/${category.categoryId}`,
            query: { name: `${category.categoryName}` },
          }}
        >
          <div
            key={category.categoryId}
            className="flex flex-col items-center justify-center w-[150px] h-[150px] m-4 text-center rounded-full bg-white "
          >
            <Image
              src={category.img_url}
              alt={category.categoryName}
              width={50}
              height={50}
            />
            <div className="mt-2 ">{category.categoryName}</div>
          </div>
        </Link>
      ))}
    </main>
  )
}
