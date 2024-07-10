import Link from 'next/link'
export default function SortButton() {
  return (
    <div className="flex mx-5 mt-5 justify-around">
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'soaring-stocks' } }}
        className="w-1/2 h-12 font-semibold flex rounded-lg items-center text-center justify-center 
  bg-gradient-to-b border-2 border-red-400"
      >
        급등률
      </Link>
      <Link
        href={{ pathname: '/stockRank', query: { sort: 'plummeting-stocks' } }}
        className="w-1/2 h-12 font-semibold flex rounded-lg items-center text-center justify-center 
  bg-gradient-to-b border-2 border-sky-400"
      >
        급락률
      </Link>
    </div>
  )
}
