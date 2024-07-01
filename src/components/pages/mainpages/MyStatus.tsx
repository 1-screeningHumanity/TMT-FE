'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { userInformation } from '@/actions/myPage'
import { set } from 'firebase/database'
import { getMyAssetRank } from '@/actions/userRank'

function MyStatus({ data, delay }: { data: any; delay: number }) {
  const [show, setShow] = useState<boolean>(false)
  const [nickName, setNickName] = useState<string>('')
  const [rank, setRank] = useState<number>(0)

  useEffect(() => {
    async function userInfo() {
      const res = await userInformation()
      setNickName(res?.data?.nickanme)
      const myRankResponse = await getMyAssetRank()
      setRank(myRankResponse?.data?.ranking)
    }
    userInfo()
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-10px' }}
      animate={{ opacity: 1, translateY: '0px' }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full bg-white rounded-lg px-[1rem] py-[1rem] drop-shadow-sm">
        <p className="text-sm mb-2">{nickName}님 어서오세요.</p>
        {typeof rank === 'undefined' ? (
          <p className="text-2xl font-extrabold leading-tight">
            신규 회원입니다
          </p>
        ) : (
          <p className="text-2xl font-extrabold leading-tight">
            자산순위
            <br />
            <CountUp start={0} end={rank} duration={1} separator="," />
            위입니다.
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default MyStatus
