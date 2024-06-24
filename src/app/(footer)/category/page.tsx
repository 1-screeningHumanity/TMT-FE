import { CategoryData } from '@/lib/categoryData'
import Image from 'next/image'
export default function Page() {
  const data = CategoryData
  return (
    <main>
      {data.map((category) => (
        <div key={category.id}>
          <Image
            src={category.icon}
            alt={category.name}
            width={50}
            height={50}
          />
          <div>{category.name}</div>
        </div>
      ))}
    </main>
  )
}
