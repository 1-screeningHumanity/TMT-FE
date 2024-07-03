'use client'
import { userInformation } from '@/actions/myPage'
import { getFollowingList } from '@/actions/subscribe'
import { FollowingListType } from '@/types/subScribeListType'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Following() {
  const [subScribe, setsubScribe] = useState<FollowingListType[]>([])

  useEffect(() => {
    async function fetchData() {
      const Info = await userInformation()
      const EncodeNickName = Info?.data?.nickanme
      if (EncodeNickName) {
        const res = await getFollowingList(EncodeNickName)
        setsubScribe(res?.data)
      }
    }
    fetchData()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-10px' }}
      animate={{ opacity: 1, translateY: '0px' }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-start overflow-x-auto overflow-y-hidden whitespace-nowrap"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="font-bold text-xl p-2">내가 구독한 사람들</div>
      <div className="flex flex-no-wrap">
        {subScribe?.length === 0 ? (
          <p className="text-center my-10 text-slate-500">
            내가 구독한 사람이 없습니다.
          </p>
        ) : (
          subScribe?.map((item: FollowingListType, index: number) => (
            <div
              className="flex items-center justify-center text-center border-b h-32 w-32 rounded-full shadow-md mx-2"
              style={{
                backgroundColor: index % 2 == 0 ? '#ffffff' : '#c2f1ff',
              }}
              key={item.id}
            >
              <div>
                <p className="font-bold">#{item.ranking} 위</p>
                <p>{item.nickName}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  )
}
