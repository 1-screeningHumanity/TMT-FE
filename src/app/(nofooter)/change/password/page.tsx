'use client'

import { getRandomNickname } from "@/actions/signup/getRandomNickname";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { postSignup } from "@/actions/signup/postSignup";
import patchPasswordChange from "@/actions/change/patchPasswordChange";
import { getSession } from "next-auth/react";


export default function password(){
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(true);
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<boolean>(false);
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");


  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

// 회원가입 api
async function handleSubmit(event: React.FormEvent) {
  event.preventDefault();


  let password = inputRefs.current[0]?.value;
  let passwordCheck = inputRefs.current[1]?.value;

  if(!password || !passwordCheck){
    alert("모든 값을 채워주세요")
  }else{
    const res = await patchPasswordChange(passwordCheck);
    console.log(res);
    if(!res.isSuccess){
      alert("비밀번호 변경에 실패하였습니다.")
    }else{
      location.href="/member/signup/complete"
    }
  }

}

const passwordValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
  let newPassword = event.target.value;
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
  setPassword1(newPassword)
  setPasswordValue(regExp.test(newPassword));
}

const passwordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
  let newConfirmPassword = event.target.value;
  setPassword2(newConfirmPassword)
  if(password1 !== password2){
    setPasswordCheck(true)
  }else if(password1 === password2){
    setPasswordCheck(false)
  }
}

  return(
    <>
      <div className="flex mx-10 justify-between mt-10">
        <h1 className="text-lg text-[#7d00d0] font-extrabold">비밀번호 재설정</h1>
        <Link className="rounded-full bg-[#f6f7f9] flex justify-center items-center w-5 h-5" href={"/mypage"}>
          <Image width="20" height="20" src="https://img.icons8.com/ios/20/000000/multiply.png" alt="cancel"/>
        </Link>
      </div>
      <p className=" mb-16 mt-3 mx-10 text-sm text-slate-400">입력해주시길 바랍니다.</p>
      <form>
        <div className="w-80 mx-auto my-40">
          <div className="my-8">
            <label htmlFor="password" className="text-sm my-1 block">새 비밀번호 <span className="text-red-500">*</span></label>
            <div className="relative">
              <input id="password" placeholder={"8자 이상 비밀번호를 입력해주세요"} onChange={passwordValidation} type={showPassword ? "password" : "text"} name="password" required ref={(el) => {inputRefs.current[0] = el}} className="border-[2px] rounded-lg w-80 h-10 mx-auto block my-2 px-4 text-sm placeholder-[#aea0e5]"/>
              { showPassword ?
                <Image width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/visible--v1.png" alt="visible--v1" className="absolute right-5 top-2" onClick={()=>{setShowPassword(false)}}/> :
                <Image width="20" height="20" src="https://img.icons8.com/material/20/closed-eye.png" alt="closed-eye" className="absolute right-5 top-2" onClick={()=>{setShowPassword(true)}}/>
              }
            </div>
            {passwordValue ?(password1 ? <p className="text-xs text-green-500">사용가능한 비밀번호 입니다.</p> : "") : (password1 ? <p className="text-xs text-red-500">비밀번호는 영어 숫자 8~20자로 조합 되어야합니다.</p> : "")}
          </div>
          <div>
            <label htmlFor="passwordCheck" className="text-sm my-1 block">비밀번호 확인<span className="text-red-500">*</span></label>
            <div className="relative">
              <input id="passwordCheck" placeholder={"비밀번호를 다시 입력해주세요"} onChange={passwordConfirm} type={showPasswordCheck ? "password" : "text"} name="passwordCheck" required ref={(el) => {inputRefs.current[1] = el}} className="border-[2px] rounded-lg w-80 h-10 mx-auto block my-4 px-4 text-sm placeholder-[#aea0e5]"/>
              { showPasswordCheck ?
                <Image width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/visible--v1.png" alt="visible--v1" className="absolute right-5 top-2" onClick={()=>{setShowPasswordCheck(false)}}/> :
                <Image width="20" height="20" src="https://img.icons8.com/material/20/closed-eye.png" alt="closed-eye" className="absolute right-5 top-2" onClick={()=>{setShowPasswordCheck(true)}}/>
              }
            </div>
            {password1 === password2 ? (password2 ? <p className="text-xs text-green-500">비밀번호가 일치합니다.</p> : "") : (password2 ? <p className="text-xs text-red-500">비밀번호가 일치하지 않습니다.</p> : "")}
          </div>
        </div>

        <button type="submit" onClick={handleSubmit} className="bg-[#7d00d0] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6 absolute bottom-4 left-0 right-0">
          변경하기
          </button>
      </form>
    </>
  )
}