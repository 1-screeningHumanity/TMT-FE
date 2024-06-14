'use client'

import { deleteTokenAPI } from '@/actions/alarm/fcm'
import { signOut } from 'next-auth/react'

export default function ButtonOfSignout() {
  const signOutButton = async () => {
    const fcmToken = localStorage.getItem('fcmToken')
    console.log(fcmToken)
    if (fcmToken !== null) {
      await deleteTokenAPI(fcmToken as string)
    }
    signOut()
  }
  return (
    <button
      className="bg-[#7d00d0] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6"
      onClick={signOutButton}
    >
      로그아웃
    </button>
  )
}
