'use client'
import { useRouter } from 'next/navigation'
export default function SortButton() {
  const router = useRouter()

  return (
    <div className="flex mx-5 my-6 justify-between">
      <button
        className="w-5/12 h-14 font-bold text-white rounded-2xl"
        style={{ backgroundColor: '#ff0000' }}
        onClick={() => router.push('/stockRank?sort=soaring-stocks')}
      >
        급등률
      </button>
      <button
        className="w-5/12 h-14 font-bold text-white rounded-2xl "
        style={{ backgroundColor: '#0000ff' }}
        onClick={() => router.push('/stockRank?sort=plummeting-stocks')}
      >
        급락률
      </button>
    </div>
  )
}
