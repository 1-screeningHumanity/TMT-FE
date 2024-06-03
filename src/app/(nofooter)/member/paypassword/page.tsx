'use client'

import PayPassword from "@/components/pages/password/PayPassword";
import PayPasswordCheck from "@/components/pages/password/PayPasswordCheck";
import { useEffect, useState } from "react";
import postPayPassword from "@/actions/paypassword/postPayPassword";

export default function paypassword (){
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [step, setStep] = useState<boolean>(true);
  const [nickName, setNickName] = useState<string | null>("");

  useEffect(() => {
    const nick = localStorage.getItem("nickName");
    setNickName(nick);
    console.log("nickName:", nick);
  }, []);

  function handleStep(){
    if(password.length === 4){
      setStep(!step);
    }else{
      alert("비밀번호를 4자리 입력해주세요.");
    }
  }
    
  async function handleSetPayPassword(){
    if(password === checkPassword && password.length === 4 && checkPassword.length === 4){
      console.log("비밀번호 일치");
      await postPayPassword(nickName, checkPassword)
    }else if (checkPassword.length !== 4){
      alert("비밀번호를 4자리 입력해주세요.");
    }
  }

  return(
    <>
      { step ?
        <PayPassword setPassword={setPassword}/> :
        <PayPasswordCheck setCheckPassword={setCheckPassword} />
      }
      { step ?
        (<div className="w-fit mx-auto absolute bottom-6 left-0 right-0">
          {/* <input type="button" className="rounded-lg w-40 h-14 font-bold text-center mx-2 text-white bg-black" value={"이전으로"} onClick={() => location.href="/member/signup"}/> */}
          <input type="button" className="rounded-lg w-80 h-14 font-bold text-center mx-2 text-white bg-[#7d00d0]" value={"다음으로"} onClick={() => handleStep()}/>
        </div>) :
        (<div className="w-fit mx-auto absolute bottom-6 left-0 right-0">
          <input type="button" className="rounded-lg w-40 h-14 font-bold text-center mx-2 text-white bg-black" value={"이전으로"} />
          <input type="button" className="rounded-lg w-40 h-14 font-bold text-center mx-2 text-white bg-[#7d00d0]" value={"완료"} onClick={() => {handleSetPayPassword(); location.href="/member/paypassword/complete"}}/>
        </div>)
      }
    </>
  )
}