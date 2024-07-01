'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useToast } from '@/components/ui/use-toast'
import { getRandomNickname, postSignup } from '@/actions/member'
import { parsePhoneNumber, removeHyphens } from '@/utils/parsePhoneNumber'
import { useRouter } from 'next/navigation'

export default function signup() {
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(true)
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false)
  const [passwordValue, setPasswordValue] = useState<boolean>(false)
  const [password1, setPassword1] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
  const [phoneNumberString, setPhoneNumberString] = useState<string>('')
  const [randomNickname, setRandomNickname] = useState<string>('')

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (inputRefs.current[4]) {
      inputRefs.current[4].value = randomNickname
    }
  }, [randomNickname])
  // 랜덤닉네임 생성
  async function handleRandomNickname() {
    try {
      const data = await getRandomNickname()
      setRandomNickname(data.data)
    } catch (error) {
      console.error('Failed to fetch random nickname:', error)
    }
  }

  // 회원가입 api
  async function handleSignup(event: React.FormEvent) {
    event.preventDefault()

    let name = inputRefs.current[0]?.value
    let phoneNumber = removeHyphens(inputRefs.current[1]?.value)
    let password = inputRefs.current[3]?.value
    let nickName = inputRefs.current[4]?.value

    if (!name || !phoneNumber || !password || !nickName) {
      toast({
        title: '※ 빈칸을 모두 채워주세요',
        variant: 'destructive',
      })
    } else {
      const res = await postSignup(name, phoneNumber, password, nickName)
      console.log('res :', res)

      if (!res.isSuccess) {
        if (res.code === 1005) {
          toast({
            title: '※ 중복된 전화번호입니다.',
            variant: 'destructive',
          })
          inputRefs.current[1]?.focus()
        }
        if (res.code === 1000) {
          toast({
            title: '※ 중복된 닉네임입니다.',
            variant: 'destructive',
          })
          inputRefs.current[4]?.focus()
        }
      } else {
        if (typeof nickName !== 'undefined') {
          localStorage.setItem('nickName', nickName)
        }
        router.push('/member/signup/complete')
      }
    }
  }

  const passwordValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newPassword = event.target.value
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
    setPassword1(newPassword)
    setPasswordValue(regExp.test(newPassword))
  }

  const passwordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newConfirmPassword = event.target.value
    setPassword2(newConfirmPassword)
    if (password1 !== password2) {
      setPasswordCheck(true)
    } else if (password1 === password2) {
      setPasswordCheck(false)
    }
  }

  return (
    <>
      <form>
        <div className="w-80 mx-auto my-6">
          <label htmlFor="name" className="text-sm my-1 block">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            id="name"
            required
            minLength={2}
            ref={(el) => {
              inputRefs.current[0] = el
            }}
            className="border-[2px] rounded-lg w-80 h-10 mx-auto block px-4 text-sm placeholder-[#aea0e5]"
          />
        </div>
        <div className="w-80 mx-auto my-6">
          <label htmlFor="phone" className="text-sm my-1 block">
            전화번호 <span className="text-red-500 ">*</span>
          </label>
          <input
            name="phone"
            id="phone"
            type="tel"
            maxLength={13}
            minLength={13}
            onChange={(e) =>
              setPhoneNumberString(parsePhoneNumber(e.target.value))
            }
            value={phoneNumberString}
            required
            ref={(el) => {
              inputRefs.current[1] = el
            }}
            placeholder="하이픈(-)은 빼고 입력해주세요"
            className="border-[2px] rounded-lg w-80 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline"
          />
        </div>
        <div className="w-80 mx-auto my-6">
          <label htmlFor="password" className="text-sm my-1 block">
            비밀번호 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              placeholder={'8자 이상 비밀번호를 입력해주세요'}
              onChange={passwordValidation}
              type={showPassword ? 'password' : 'text'}
              name="password"
              maxLength={20}
              required
              ref={(el) => {
                inputRefs.current[2] = el
              }}
              className="border-[2px] rounded-lg w-80 h-10 mx-auto block my-2 px-4 text-sm placeholder-[#aea0e5]"
            />
            {showPassword ? (
              <Image
                width="20"
                height="20"
                src="/assets/images/visible.svg"
                alt="visible--v1"
                className="absolute right-5 top-2"
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
                className="absolute right-5 top-2"
                onClick={() => {
                  setShowPassword(true)
                }}
              />
            )}
          </div>
          {passwordValue ? (
            password1 ? (
              <p className="text-xs text-green-500">
                사용가능한 비밀번호 입니다.
              </p>
            ) : (
              ''
            )
          ) : password1 ? (
            <p className="text-xs text-red-500">
              비밀번호는 영어 숫자 8~20자로 조합 되어야합니다.
            </p>
          ) : (
            ''
          )}
          <div className="relative">
            <input
              placeholder={'비밀번호를 다시 입력해주세요'}
              onChange={passwordConfirm}
              maxLength={20}
              type={showPasswordCheck ? 'password' : 'text'}
              name="passwordCheck"
              required
              ref={(el) => {
                inputRefs.current[3] = el
              }}
              className="border-[2px] rounded-lg w-80 h-10 mx-auto block my-4 px-4 text-sm placeholder-[#aea0e5]"
            />
            {showPasswordCheck ? (
              <Image
                width="20"
                height="20"
                src="/assets/images/visible.svg"
                alt="visible--v1"
                className="absolute right-5 top-2"
                onClick={() => {
                  setShowPasswordCheck(false)
                }}
              />
            ) : (
              <Image
                width="20"
                height="20"
                src="/assets/images/invisible.svg"
                alt="closed-eye"
                className="absolute right-5 top-2"
                onClick={() => {
                  setShowPasswordCheck(true)
                }}
              />
            )}
          </div>
          {password1 === password2 ? (
            password2 ? (
              <p className="text-xs text-green-500">비밀번호가 일치합니다.</p>
            ) : (
              ''
            )
          ) : password2 ? (
            <p className="text-xs text-red-500">
              비밀번호가 일치하지 않습니다.
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="w-80 mx-auto my-6">
          <label htmlFor="nickName" className="text-sm my-1 block">
            닉네임 <span className="text-red-500">*</span>
          </label>
          <input
            name="nickName"
            id="nickName"
            type="text"
            required
            ref={(el) => {
              inputRefs.current[4] = el
            }}
            className="border-[2px] rounded-lg w-56 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline"
          />
          <input
            type="button"
            value={'자동생성'}
            onClick={handleRandomNickname}
            className="w-20 bg-[#7d12ff] font-bold text-white rounded-md ml-4 h-10 inline text-sm border-[1px] px-2"
          />
        </div>

        <input
          type="submit"
          value={'가입하기'}
          onClick={handleSignup}
          className="bg-[#7d12ff] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block mt-20 "
        />
      </form>
    </>
  )
}
