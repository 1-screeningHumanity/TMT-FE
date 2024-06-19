import Link from 'next/link'
export default function SortButton() {
  return (
    <div className="flex mx-5 my-6 justify-between">
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'soaring-stocks' } }}
        className="w-5/12 h-14 font-bold flex text-white rounded-2xl items-center text-center justify-center"
        style={{ backgroundColor: '#ff0000' }}
        // onClick={() => router.push('/stockRank?sort=soaring-stocks')}
      >
        급등률
      </Link>
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'plummeting-stocks' } }}
        className="w-5/12 h-14 font-bold flex text-white rounded-2xl items-center text-center justify-center"
        style={{ backgroundColor: '#0000ff' }}
        // onClick={() => router.push('/stockRank?sort=plummeting-stocks')}
      >
        급락률
      </Link>
    </div>
  )
}
