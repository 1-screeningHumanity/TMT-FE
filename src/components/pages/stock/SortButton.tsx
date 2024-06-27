import Link from 'next/link'
export default function SortButton() {
  return (
    <div className="flex mx-5 my-6 justify-around">
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'soaring-stocks' } }}
        className="w-5/12 h-12 font-semibold flex text-white rounded-lg items-center text-center justify-center bg-rose-500"
        // style={{ backgroundColor: '#ff0000' }}
        // onClick={() => router.push('/stockRank?sort=soaring-stocks')}
      >
        급등률
      </Link>
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'plummeting-stocks' } }}
        className="w-5/12 h-12 font-semibold flex text-white rounded-lg items-center text-center justify-center bg-sky-500"
        // style={{ backgroundColor: '#0000ff' }}
        // onClick={() => router.push('/stockRank?sort=plummeting-stocks')}
      >
        급락률
      </Link>
    </div>
  )
}
