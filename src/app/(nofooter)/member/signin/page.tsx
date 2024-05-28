
import ButtonOfSignin from "@/components/ui/ButtonOfSignin";
import InputOfPassword from "@/components/ui/InputOfPassword";
import Image from "next/image";
import Link from "next/link";

export default function signin(){

  return(
    <section>
      <Image src={"/assets/images/logo2.svg"} alt="logo2" width={100} height={100} className="mx-auto mt-20 mb-16"/>
      <form>
        <input placeholder="전화번호" type="text" name="phone" required className="border-[2px] rounded-lg w-80 h-10 mx-auto block my-4 px-4 text-sm placeholder-[#aea0e5]"/>
        <input placeholder="이름" type="text" name="name" required className="border-[2px] rounded-lg w-80 h-10 mx-auto block my-4 px-4 text-sm placeholder-[#aea0e5]"/>
        <InputOfPassword placeholder="비밀번호"/>
        <ButtonOfSignin />
      </form>
      <p className="text-xs mx-auto w-fit text-[#775da6]">비밀번호가 기억이 나지 않나요? <Link href={"#"} className="font-extrabold">비밀번호 찾기</Link></p>
      <div className="flex justify-center my-6 text-[#515978] text-sm">
        <hr className="w-24 my-2 mx-4 border-[1.5px]"/>
        간단로그인
        <hr className="w-24 my-2 mx-4 border-[1.5px]"/>
      </div>
      <div className="flex mx-10 justify-around">
        <button className="w-28 rounded-md h-10 border-2 flex justify-center items-center"><Image src={"/assets/images/googleLogo.svg"} alt="googleLogo" width={30} height={30}/></button>
        <button className="w-28 rounded-md h-10 bg-yellow-300 flex justify-center items-center"><Image src={"/assets/images/kakaoLogo.svg"} alt="googleLogo" width={20} height={20}/></button>
      </div>
      <button className="border-[1px] w-80 h-10 mx-auto my-6 block rounded-lg text-[#7d00d0] border-[#7d00d0] font-extrabold text-sm">계정만들기</button>
      <p className="text-xs text-center mt-16 text-[#8e9195]">©2024 TMINVESTMENT.com<br/>
          ALL RIGHTS RESERVED.
      </p>
    </section>
  )
}