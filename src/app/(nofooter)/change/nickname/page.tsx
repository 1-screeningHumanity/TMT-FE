'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { postNicknameChange } from "@/actions/change";
import { toast } from "@/components/ui/use-toast";
import Headers from "@/components/ui/Headers";


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

  let nickName = inputRefs.current[0]?.value;

  if(!nickName){
    toast({
      title: '모든 값을 채워주세요.',
      variant : "destructive",
    })
  }else{
    const res = await postNicknameChange( nickName );
    if(!res.isSuccess){
      toast({
        title: '이미 존재하는 닉네임 입니다.',
        variant : "destructive",
      })
      inputRefs.current[0]?.focus();
    }else{
      toast({
        title: '닉네임 변경이 완료되었습니다.',
        variant : "default",
      })
      router.push("/change/nickname/complete")
    }
  }

}

  return(
    <>
      <Headers />
      <div className="flex mx-10 justify-between mt-10 mb-16">
        <h1 className="text-lg text-[#7d00d0] font-extrabold">닉네임 변경</h1>
      </div>
      <form>
        <div className="w-80 mx-auto my-6">
          <label htmlFor="nickName" className="text-sm my-1 block">닉네임 <span className="text-red-500">*</span></label>
          <input name="nickName" id="nickName" type="text" required ref={(el) => {inputRefs.current[0] = el}} placeholder="변경할 닉네임을 입력해주세요" className="border-[2px] rounded-lg w-80 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline"/>
        </div>
        <input type="submit" value={"변경하기"} onClick={handleChangeNickname} className="bg-[#7d00d0] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6 absolute bottom-4 left-0 right-0"/>
      </form>
    </>
  )
}