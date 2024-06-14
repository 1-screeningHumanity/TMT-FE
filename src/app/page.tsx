'use client'
import 'regenerator-runtime/runtime'
import SearchBarUI from '@/components/ui/SearchBarUI'
import ButtonOfSignout from '@/components/ui/buttons/ButtonOfSignout'
import { getSession } from 'next-auth/react'
import ButtonToSignin from '@/components/ui/buttons/ButtonToSignin';
import Headers from '@/components/ui/Headers'
import { useEffect, useState } from 'react'
import { Session } from 'next-auth'
import Footer from '@/components/ui/Footer'

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function fetchSession() {
      const session = await getSession();
      console.log("session:", session);
      setSession(session);
    }
    fetchSession();
  }, []);

  
  return (
    <div>
      <Headers title='홈'/>
      <SearchBarUI />
      <h1 className='text-xl'>메인페이지입니다.</h1>
      { session?.user == null ?
        <ButtonToSignin />  :
        <ButtonOfSignout /> 
      }
      <div className='text-3xl'>
        {session?.user?.data?.name || "로그인이 필요합니다."}
      </div>
      <Footer />
    </div>
  )
}
