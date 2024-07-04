import { rankBoxType } from '@/types/rankBoxType'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from 'lucide-react'
import Link from 'next/link'

export default function MyRankBox({
  rank,
  changingRank,
  nickname,
  profit,
  isAsseted,
}: rankBoxType) {
  console.log(rank)
  return (
    <Link
      href={'/mypage'}
      className="flex justify-around border-2 text-lg h-14 bg-slate-50 shadow-lg border-[#7d12ff]  items-center mt-2"
    >
      {rank ? (
        <>
          <div className="w-1/4 text-center">{rank}위</div>
          <div
            className={`flex justify-center items-center w-1/4 ${changingRank > 0 ? 'text-red-400' : changingRank === 0 ? 'text-green-400' : 'text-blue-400'}`}
          >
            {changingRank > 0 ? (
              <ArrowUpIcon size={15} />
            ) : changingRank === 0 ? (
              <MinusIcon size={15} />
            ) : (
              <ArrowDownIcon size={15} />
            )}{' '}
            {changingRank === 0 ? null : changingRank}
          </div>
          <div className="w-1/2 text-center">{nickname}</div>
          <div className="w-1/2 text-center">
            {formatNumberWithCommas(profit)} {isAsseted ? '원' : '%'}
          </div>
        </>
      ) : (
        <div>나의 순위가 아직 집계되지 않았습니다.</div>
      )}
    </Link>
  )
}
