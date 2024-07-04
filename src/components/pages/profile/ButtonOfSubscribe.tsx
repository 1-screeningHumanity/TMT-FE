'use client'

import { userInformation } from '@/actions/myPage'
import { profilePortfolio } from '@/actions/profile'
import { unsubscribe } from '@/actions/subscribe'
import { toast, useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'

export default function ButtonOfSubscribe({
  isSubscribe,
  nick,
}: {
  isSubscribe: boolean
  nick: string
}) {
  const router = useRouter()
  const { toast } = useToast()
  const [userInfo, setUserInfo] = useState<string>()

  useEffect(() => {
    
    async function fetchData(){
      const portfolioRes = await profilePortfolio(nick);
      const portfolio = Array.isArray(portfolioRes?.data) && portfolioRes.data.length > 0
      ? portfolioRes.data[0]?.nickname || ''
      : '';
      

      const userInfoRes = await userInformation()
      setUserInfo(userInfoRes?.data?.nickanme)

      if (userInfo == nick) {
        router.push('/mypage')
      }

      if (portfolio == null) {
        router.push('/404')
      }
    }
    fetchData()
  }, [])

  const handleUnsubscribe = async () => {
    const res = await unsubscribe(nick)
    console.log('handleUnsubscribe :', res)
    if (res.isSuccess) {
      toast({
        title: '구독이 취소되었습니다',
        variant: 'success',
        action: <button onClick={() => router.refresh()}>확인</button>,
      })
    } else {
      toast({
        title: '구독 취소에 실패했습니다',
        variant: 'destructive',
      })
    }
  }

  console.log('isSubscribe :', isSubscribe)
  return (
    <>
      {isSubscribe == false || isSubscribe == undefined ? (
        <div className="flex items-center mx-8">
          <button
            className="w-16 h-8 border-[1px] bg-[#7d12ff] rounded-full text-white mt-4"
            onClick={() => {
              userInfo == nick
                ? () => router.push(`/profile/${nick}/payments`)
                : router.push('/mypage')
            }}
          >
            구독
          </button>
        </div>
      ) : (
        <div className="flex items-center mx-8">
          <button
            className="w-16 h-8 border-[1px] border-[#000000] rounded-full text-black mt-4"
            onClick={handleUnsubscribe}
          >
            구독중
          </button>
        </div>
      )}
    </>
  )
}
