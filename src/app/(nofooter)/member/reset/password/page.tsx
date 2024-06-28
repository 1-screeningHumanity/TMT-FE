'use client'

import { patchResetPassword } from "@/actions/member";
import { sendSms, verifySms } from "@/actions/sms";
import { toast } from "@/components/ui/use-toast";
import { parsePhoneNumber, removeHyphens } from "@/utils/parsePhoneNumber";
import { set } from "firebase/database";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function resetPassword(){

  const [ sms, setSms ] = useState<boolean>(false);
  const [ phoneNumber, setPhoneNumber ] = useState<string>("");
  const [ verified, setVerified ] = useState<boolean>(false);
  const [ inputCode, setInputCode ] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(true)
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false)
  const [passwordValue, setPasswordValue] = useState<boolean>(false)
  const [password1, setPassword1] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  
  const router = useRouter();
  
  async function handleSendSms(e : React.FormEvent<HTMLButtonElement>){
    e.preventDefault();
    const parsedphoneNumber = removeHyphens(phoneNumber);
    if(parsedphoneNumber === undefined || parsedphoneNumber.length < 11){
      toast({ title: "전화번호를 확인해주세요.", variant: "destructive" });
      return;
    }
    const res = await sendSms(parsedphoneNumber);
    if(res?.isSuccess){
      toast({ title: "인증번호가 발송되었습니다.", variant: "success" });
      setSms(true);
    }
  }
  
  async function handleVerifySms(e : React.FormEvent<HTMLButtonElement>){
    e.preventDefault();
    const parsedphoneNumber = removeHyphens(phoneNumber);
    if(inputCode.length < 4){
      toast({ title: "인증번호를 확인해주세요.", variant: "destructive" });
      return;
    }
    const res = await verifySms(parsedphoneNumber, inputCode);
    if(res?.isSuccess){
      toast({ title: "인증이 완료되었습니다.", variant: "success" });
      setVerified(true);
    }else{
      toast({ title: "인증번호가 일치하지 않습니다.", variant: "destructive" });
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

  const handleChangePassword = async(e: React.FormEvent) => {
    e.preventDefault();

    let name = inputRefs.current[0]?.value
    let phoneNumber = removeHyphens(inputRefs.current[1]?.value)
    let password = inputRefs.current[2]?.value
    let passwordCheck = inputRefs.current[3]?.value

    if(!name || !phoneNumber || !password || !passwordCheck){
      toast({ title: "빈칸을 모두 채워주세요.", variant: "destructive" });
      return;
    }else if (!verified){
      toast({ title: "인증을 완료해주세요.", variant: "destructive" });
      return;
    }else {
      const res = await patchResetPassword(name, phoneNumber, passwordCheck);
      if(!res?.isSuccess){
        toast({ title: res?.message, variant: "destructive" });
        return;
      }else{
        toast({ title: "비밀번호가 변경되었습니다.", variant: "success" });
        router.push('/member/signin');
      }
    }

  }



  return(
    <>
      <div className="flex mx-10 justify-between mt-10 mb-16">
      <h1 className="text-lg text-[#7d00d0] font-extrabold">비밀번호 재설정</h1>
      <Link
        className="rounded-full bg-[#f6f7f9] flex justify-center items-center w-5 h-5"
        href={'/member/signin'}
      >
        <Image
          width={20}
          height={20}
          src="/assets/images/multiply.svg"
          alt="cancel"
        />
      </Link>
    </div>
    <form>
      <div className="w-80 mx-auto my-6">
        <div>
          <label htmlFor="name" className="text-sm my-1 block">이름 <span className="text-red-500">*</span></label>
          <input 
            name="name" id="name" type="text" required minLength={2} placeholder="이름을 입력해주세요" 
            className="border-[2px] rounded-lg w-80 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline mb-10"
            ref={(el) => {
              inputRefs.current[0] = el
            }}
          />
          <label htmlFor="phoneNumber" className="text-sm my-1 block">전화번호 <span className="text-red-500">*</span></label>
          <div className="flex">
            <input name="phoneNumber" id="phoneNumber" type="tel" required placeholder="하이픈(-)은 빼고 입력해주세요"
              maxLength={13}
              minLength={13}
              onChange={(e) => setPhoneNumber(parsePhoneNumber(e.target.value)) }
              value={phoneNumber}
              className="border-[2px] rounded-lg w-52 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline mb-4"
              ref={(el) => {
                inputRefs.current[1] = el
              }}
              />
            <button className="border-2 w-32 h-10" onClick={(e) => handleSendSms(e)}>인증코드 발송</button>
          </div>
        </div>
        { sms &&
          <div>
          <label htmlFor="code" className="text-sm my-1 block">인증코드 <span className="text-red-500">*</span></label>
          <div className="flex">
            <input name="code" id="code" type="number" required placeholder="인증코드를 입력해주세요" 
              maxLength={4}
              minLength={4}
              onChange={(e) => setInputCode(e.target.value)}
              value={inputCode}
            className="border-[2px] rounded-lg w-80 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline mb-10"/>
            <button className="w-20 border-2 h-10" onClick={(e) => handleVerifySms(e)}>확인</button>
          </div>
        </div>}
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
      </div>
      <input type="submit" value={"변경하기"} onClick={(e) => handleChangePassword(e)} className="bg-[#7d00d0] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6 absolute bottom-4 left-0 right-0"/>
    </form>
    </>
  )
}