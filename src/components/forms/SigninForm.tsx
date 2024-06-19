'use client'

import { getSession, signIn } from 'next-auth/react'
import ButtonOfSignin from '../ui/buttons/ButtonOfSignin'
import InputOfPassword from '../ui/InputOfPassword'
import { signinFormType } from '@/types/signinFormType'
import { use, useState } from 'react'
import Image from 'next/image'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { useRouter } from 'next/navigation'
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { fcmIssued } from '@/actions/alarm/fcmIssued'
import { useToast } from '../ui/use-toast'


export default function SigninForm() {
  const [payload, setPayload] = useState<signinFormType>({
    phoneNumber: '',
    name: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(true)
  const router = useRouter()

  const { toast } = useToast()
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!payload.phoneNumber || !payload.name || !payload.password) {
          toast({
            title: '※ 빈칸을 모두 채워주세요',
            variant : "destructive",
          })
      return
      }
    const res = await signIn('credentials', {
      phoneNumber: payload.phoneNumber,
      name: payload.name,
      password: payload.password,
      redirect: false,
    })
    if (res?.status == 401) {
      toast({
        title: '※ 전화번호 또는 이름 또는 비밀번호를 다시 확인해주세요',
        variant : "destructive",
      })
      router.refresh()
    }else{
      const session = await getSession(options as any)
      fcmIssued(session?.user.data.accessToken)
      router.push('/')
    }
    
    // if (session?.user.isSuccess == true) {
    //   router.push('/')
    // } else {
    //   alert('아이디, 비밀번호, 이름을 다시 확인해주세요')
    // }


  }

  const onChangePayload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    })
    console.log(payload)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="전화번호"
          type="tel"
          name="phoneNumber"
          className="border-[2px] rounded-lg w-full h-10 block my-4 px-4 text-sm placeholder-[#aea0e5]"
          onChange={onChangePayload}
        />
        <input
          placeholder="이름"
          type="text"
          name="name"
          className="border-[2px] rounded-lg w-full h-10 block my-4 px-4 text-sm placeholder-[#aea0e5]"
          onChange={onChangePayload}
        />
        <div className="relative">
          <input
            placeholder={'비밀번호'}
            type={showPassword ? 'password' : 'text'}
            name="password"
            className="border-[2px] rounded-lg w-full h-10 block my-4 px-4 text-sm placeholder-[#aea0e5]"
            onChange={onChangePayload}
          />
          {showPassword ? (
            <Image
              width="20"
              height="20"
              src="/assets/images/visible.svg"
              alt="visible--v1"
              className="absolute right-4 top-2"
              onClick={() => {
                setShowPassword(false)
              }}
            />
          ) : (
            <Image
              width="20"
              height="20"
              src="/assets/images/invisible.svg"
              alt="closed-eye"
              className="absolute right-4 top-2"
              onClick={() => {
                setShowPassword(true)
              }}
            />
          )}
        </div>
        {/* <InputOfPassword placeholder="비밀번호" /> */}
        <ButtonOfSignin />
      </form>
    </>
  )
}
