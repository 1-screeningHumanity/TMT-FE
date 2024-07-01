'use client'

import PayPassword from '@/components/pages/password/PayPassword'
import PayPasswordCheck from '@/components/pages/password/PayPasswordCheck'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { postPayPassword } from '@/actions/member'
import { toast } from '@/components/ui/use-toast'

export default function paypassword() {
  const [password, setPassword] = useState<string>('')
  const [checkPassword, setCheckPassword] = useState<string>('')
  const [step, setStep] = useState<boolean>(true)
  const [nickName, setNickName] = useState<string | null>('')

  const router = useRouter()

  useEffect(() => {
    const nickname = localStorage.getItem('nickName')
    setNickName(nickname)
  }, [])

  function handleStep() {
    if (password.length === 4) {
      setStep(!step)
    } else {
      toast({
        title: '비밀번호를 4자리 입력해주세요.',
        variant: 'destructive',
      })
    }
  }

  async function handleSetPayPassword() {
    if (password.length === 4 && checkPassword.length === 4) {
      if (password !== checkPassword) {
        toast({
          title: '비밀번호가 일치하지 않습니다.',
          variant: 'destructive',
        })
        return
      }
      const res = await postPayPassword(nickName, checkPassword)
      console.log(res)
      if (res.code == 200) {
        toast({
          title: '비밀번호가 설정 되었습니다.',
          variant: 'default',
        })
        router.push('/member/paypassword/complete')
      } else {
        toast({
          title: '비밀번호 설정 실패했습니다.',
          variant: 'destructive',
        })
      }
    } else if (checkPassword.length !== 4) {
      toast({
        title: '비밀번호를 4자리 입력해주세요.',
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      {step ? (
        <PayPassword setPassword={setPassword} />
      ) : (
        <PayPasswordCheck setCheckPassword={setCheckPassword} />
      )}
      {step ? (
        <div className="w-fit mx-auto absolute bottom-32 left-0 right-0">
          {/* <input type="button" className="rounded-lg w-40 h-14 font-bold text-center mx-2 text-white bg-black" value={"이전으로"} onClick={() => location.href="/member/signup"}/> */}
          <input
            type="button"
            className="rounded-lg w-80 h-14 font-bold text-center mx-2 text-white bg-[#7d12ff]"
            value={'다음으로'}
            onClick={() => handleStep()}
          />
        </div>
      ) : (
        <div className="w-fit  mx-auto absolute bottom-32 left-0 right-0">
          <input
            type="button"
            className="rounded-lg w-40 h-14 font-bold text-center mx-2 text-white bg-black"
            value={'이전으로'}
            onClick={() => onbeforeunload}
          />
          <input
            type="button"
            className="rounded-lg w-40 h-14 font-bold text-center mx-2 text-white bg-[#7d12ff]"
            value={'완료'}
            onClick={() => {
              handleSetPayPassword()
            }}
          />
        </div>
      )}
    </>
  )
}
