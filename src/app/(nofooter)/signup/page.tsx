import { getRandomNickname } from "@/actions/signup/getRandomNickname";
import InputOfPassword from "@/components/ui/InputOfPassword";
import Image from "next/image";

export default function signup(){

  console.log("getRandomNickname",getRandomNickname())
  const data = getRandomNickname();
  console.log("data :", data);

  return(
    <>
      <div className="flex mx-10 justify-between mt-10 mb-16">
        <h1 className="text-lg text-[#7d00d0] font-extrabold">회원가입</h1>
        <div className="rounded-full bg-[#f6f7f9] flex justify-center items-center w-5 h-5">
          <Image width="20" height="20" src="https://img.icons8.com/ios/20/000000/multiply.png" alt="cancel"/>
        </div>
      </div>
      <form>
        <div className="w-80 mx-auto my-6">
          <h3 className="text-sm my-1">이름 <span className="text-red-500">*</span></h3>
          <input name="name" type="text" required className="border-[2px] rounded-lg w-80 h-10 mx-auto block px-4 text-sm placeholder-[#aea0e5]"/>
        </div>
        <div className="w-80 mx-auto my-6">
          <h3 className="text-sm my-1">전화번호 <span className="text-red-500">*</span></h3>
          <input name="phone" type="text" required className="border-[2px] rounded-lg w-56 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline"/>
          <input type="button" value={"중복확인"} className="w-fit bg-[#7d00d0] font-bold text-white rounded-md ml-4 h-10 inline text-sm border-[1px] px-2" />
          <p className="text-sm text-red-500 my-2">중복된 전화번호 입니다.</p>
        </div>
        <div className="w-80 mx-auto my-6">
        <h3 className="text-sm my-1">비밀번호 <span className="text-red-500">*</span></h3>
          <InputOfPassword placeholder="8자 이상 비밀번호를 입력해주세요"/>
          <InputOfPassword placeholder="8자 이상 비밀번호를 입력해주세요"/>
        </div>
        <div className="w-80 mx-auto my-6">
          <h3 className="text-sm my-1">닉네임 <span className="text-red-500">*</span></h3>
          <input name="nickname" type="text" required value={`${data}`} className="border-[2px] rounded-lg w-56 h-10 mx-auto px-4 text-sm placeholder-[#aea0e5] inline"/>
          <input type="button" value={"중복확인"} className="w-fit bg-[#7d00d0] font-bold text-white rounded-md ml-4 h-10 inline text-sm border-[1px] px-2" />
          <p className="text-sm text-red-500 my-2">중복된 닉네임 입니다.</p>
        </div>

        <input type="submit" value={"다음으로"} className="bg-[#7d00d0] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6 absolute bottom-4 left-0 right-0"/>
      </form>
    </>
  )
}