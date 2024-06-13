'use client'

import Image from 'next/image'
import Link from 'next/link'
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

export default function Headers({title} : {title? : string}) {

  const firebaseConfig = {
    apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
    authDomain: `${process.env.NEXT_PUBLIC_AUTHDOMAIN}`,
    projectId: `${process.env.NEXT_PUBLIC_PROJECTID}`,
    storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID}`,
    appId: `${process.env.NEXT_PUBLIC_APP_ID}`,
    measurementId: `${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`,
  }
  const app = initializeApp(firebaseConfig)
  const handleFcm = () => {
    console.log('clicked')
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.')
        if (
          typeof window !== 'undefined' &&
          typeof window.navigator !== 'undefined'
        ) {
          const messaging = getMessaging(app)
          console.log(messaging)
          navigator.serviceWorker.register('/firebase-messaging-sw.js', {
            scope: '/firebase-cloud-messaging-push-scope',
          })
          getToken(messaging, {
            vapidKey: `${process.env.NEXT_PUBLIC_VAPID_KEY}`,
          })
            .then((currentToken) => {
              if (currentToken) {
                console.log('currentToken:', currentToken)
              } else {
                console.log(
                  'No registration token available. Request permission to generate one.',
                )
              }
            })
            .catch((err) => {
              console.log('An error occurred while retrieving token. ', err)
            })
          onMessage(messaging, (payload) => {
            console.log('Message received. ', payload)
          })
        }
      } else {
        console.log('Notification permission denied.')
      }
    })
  }

  return (
    <div className="mt-3 flex items-center justify-between border-b-[1px] pb-3">
      <Image
        width="30"
        height="30"
        src="/assets/images/back.svg"
        alt="back--v1"
        className='mt-1 ml-3'
        onClick={() => history.back()}
      />
      <h1 className='relative left-6 text-lg leading-10 font-[Pretendard-Regular]'>{title}</h1>
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
        <span onClick={handleFcm}>
          <Link href={'/alarm'}>
            <Image
              width="30"
              height="30"
              src="/assets/images/alarm.svg"
              alt="alarm"
              className="mr-4"
            />
          </Link>
        </span>
      </div>
    </div>
  )
}
