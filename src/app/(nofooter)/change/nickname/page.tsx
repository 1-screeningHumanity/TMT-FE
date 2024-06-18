'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { postNicknameChange } from "@/actions/change";


export default function changeNickname(){

  const [phoneNumberString, setPhoneNumberString] = useState<string>('')

  const router = useRouter();

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

// 하이픈 제거
function removeHyphens(phoneNumber : string | undefined) {
  return phoneNumber?.replace(/-/g, '');
}
// 회원가입 api
async function handleChangeNickname(event: React.FormEvent) {
  event.preventDefault();

  let name = inputRefs.current[0]?.value;
  let phoneNumber = removeHyphens(inputRefs.current[1]?.value);
  let nickName = inputRefs.current[2]?.value;

  if(!name || !phoneNumber || !nickName){
    alert("모든 값을 채워주세요")
  }else{
    const res = await postNicknameChange( nickName );
    console.log("res :", res);
    if(!res.isSuccess){

      alert("이미 존재하는 닉네임 입니다.")
      inputRefs.current[2]?.focus();
      
    }else{
      alert("닉네임 변경이 완료되었습니다.")
      router.push("/change/nickname/complete")
    }
  }

}

const parsingPhoneNumber = (num: string) => {
  return num
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(-{1,2})$/g, '')
}

  return(
    <>
      <div className="flex mx-10 justify-between mt-10 mb-16">
        <h1 className="text-lg text-[#7d00d0] font-extrabold">닉네임 변경</h1>
        <Link className="rounded-full bg-[#f6f7f9] flex justify-center items-center w-5 h-5" href={"/mypage"}>
          <Image width="20" height="20" src="https://img.icons8.com/ios/20/000000/multiply.png" alt="cancel"/>
        </Link>
      </div>
      <form>
        <div className="w-80 mx-auto my-6">
          <label htmlFor="name" className="text-sm my-1 block">이름 <span className="text-red-500">*</span></label>
          <input name="name" type="text" id="name" required minLength={2} ref={(el) => {inputRefs.current[0] = el}} placeholder="이름을 입력해주세요" className="border-[2px] rounded-lg w-80 h-10 mx-auto block px-4 text-sm placeholder-[#aea0e5]"/>
        </div>
        <div className="w-80 mx-auto my-6">
          <label htmlFor="phone" className="text-sm my-1 block">전화번호 <span className="text-red-500 ">*</span></label>
          <input name="phone" id="phone" type="tel" onChange={(e) => setPhoneNumberString(parsingPhoneNumber(e.target.value))} value={phoneNumberString} required ref={(el) => {inputRefs.current[1] = el}} placeholder="하이픈(-)은 빼고 입력해주세요" className="border-[2px] rounded-lg w-80 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline"/>
        </div>

        <div className="w-80 mx-auto my-6">
          <label htmlFor="nickName" className="text-sm my-1 block">닉네임 <span className="text-red-500">*</span></label>
          <input name="nickName" id="nickName" type="text" required ref={(el) => {inputRefs.current[2] = el}} placeholder="변경할 닉네임을 입력해주세요" className="border-[2px] rounded-lg w-80 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline"/>
        </div>

        <input type="submit" value={"변경하기"} onClick={handleChangeNickname} className="bg-[#7d00d0] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6 absolute bottom-4 left-0 right-0"/>
      </form>
    </>
  )
}