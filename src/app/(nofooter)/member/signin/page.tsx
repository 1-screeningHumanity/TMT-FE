import SigninForm from '@/components/forms/SigninForm'
import ButtonOfSigninFromKakao from '@/components/ui/buttons/ButtonOfSigninFromKakao'
import ButtonOfSigninFromNaver from '@/components/ui/buttons/ButtonOfSigninFromNaver'
import { Toaster } from '@/components/ui/toaster'
import Image from 'next/image'
import Link from 'next/link'

export default function signin() {
  return (
    <section className="w-full mx-auto px-10">
      <Image
        src={'/assets/images/logo2.svg'}
        alt="logo2"
        width={100}
        height={100}
        className="mx-auto mt-20 mb-16"
      />
      <SigninForm />
      <p className="text-xs mx-auto w-fit text-[#775da6]">
        비밀번호가 기억이 나지 않나요?{' '}
        <Link href={'/member/reset/password'} className="font-extrabold">
          비밀번호 찾기
        </Link>
      </p>
      <div className="relative">
        <hr className="w-full my-6" />
        <p className="text-xs w-fit text-center bg-slate-100 px-4 py-2 mx-auto absolute top-[-15px] left-[50%] translate-x-[-50%]">
          간단 로그인
        </p>
      </div>
      <div className="flex justify-between w-full">
        {/* <ButtonOfSigninFromNaver />
        <ButtonOfSigninFromKakao /> */}
      </div>
      <Link
        href={'/member/signup'}
        className="border-[1px] w-full h-10 mx-auto my-6 block rounded-lg text-[#7d12ff] border-[#7d12ff] font-extrabold text-sm text-center leading-10"
      >
        계정만들기
      </Link>
      <p className="text-xs text-center mt-16 text-[#8e9195]">
        ©2024 TMINVESTMENT.com
        <br />
        ALL RIGHTS RESERVED.
      </p>
    </section>
  )
}
