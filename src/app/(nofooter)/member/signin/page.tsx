import SigninForm from "@/components/forms/SigninForm";
import ButtonOfSigninFromKakao from "@/components/ui/buttons/ButtonOfSigninFromKakao";
import ButtonOfSigninFromNaver from "@/components/ui/buttons/ButtonOfSigninFromNaver";
import Image from "next/image";
import Link from "next/link";

export default function signin(){


  return(
    <section>
      <Image src={"/assets/images/logo2.svg"} alt="logo2" width={100} height={100} className="mx-auto mt-20 mb-16"/>
      <SigninForm />
      <p className="text-xs mx-auto w-fit text-[#775da6]">비밀번호가 기억이 나지 않나요? <Link href={"#"} className="font-extrabold">비밀번호 찾기</Link></p>
      <div className="flex justify-center my-6 text-[#515978] text-sm">
        <hr className="w-24 my-2 mx-4 border-[1.5px]"/>
        간단로그인
        <hr className="w-24 my-2 mx-4 border-[1.5px]"/>
      </div>
      <div className="flex mx-10 justify-around">
        <ButtonOfSigninFromNaver />
        <ButtonOfSigninFromKakao />
      </div>
      <Link href={"/member/signup"} className="border-[1px] w-80 h-10 mx-auto my-6 block rounded-lg text-[#7d00d0] border-[#7d00d0] font-extrabold text-sm text-center leading-10">계정만들기</Link>
      <p className="text-xs text-center mt-16 text-[#8e9195]">©2024 TMINVESTMENT.com<br/>
          ALL RIGHTS RESERVED.
      </p>
    </section>
  )
}