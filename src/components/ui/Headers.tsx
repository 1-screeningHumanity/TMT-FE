'use client'
import { alarmCountAPI } from '@/actions/alarm/fcm'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AlarmCount from '../pages/alarm/AlarmCount'
import { useRouter } from 'next/navigation'

export default function Headers({ title }: { title? : string }) {

  const router = useRouter();

  return (
    <div className="mt-2.5 flex items-center justify-between border-b-[1px] pb-2.5 sticky top-0 bg-white z-50">
      <Image
        width="30"
        height="30"
        src="/assets/images/back.svg"
        alt="back--v1"
        className="mt-1 ml-3"
        onClick={() => router.back()}
      />
      <h1 className='relative left-6 text-base leading-3 font-[Pretendard-Regular] font-semibold tracking-tight'>{title}</h1>
      <div className="flex items-center">
        <Image
          width="40"
          height="40"
          src="/assets/images/check.svg"
          alt="checked--v1"
          className="mr-3"
        />
        {/* <img
          width="50"
          height="50"
          src="https://img.icons8.com/material-rounded/50/checked--v1.png"
          alt="checked--v1"
        /> */}
        {/* <span onClick={handleFcm}> */}
        <Link href={'/alarm'}>
          <Image
            width="30"
            height="30"
            src="/assets/images/alarm.svg"
            alt="alarm"
            className="mr-4"
          />

          <AlarmCount />
        </Link>
        {/* </span> */}
      </div>
    </div>
  )
}
