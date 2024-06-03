'use client'
import Image from 'next/image'
import Link from 'next/link'
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
export default function Headers() {
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
    <div className="ml-3 mt-3 relative flex">
      <Image
        width="50"
        height="50"
        src="https://img.icons8.com/material-rounded/50/back--v1.png"
        alt="back--v1"
      />
      <div className="absolute right-0 top-0 flex">
        <Image
          width="50"
          height="50"
          src="https://img.icons8.com/material-outlined/50/checked--v1.png"
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
              width="50"
              height="50"
              src="https://img.icons8.com/puffy/50/alarm.png"
              alt="alarm"
              className="mr-3"
            />
          </Link>
        </span>
        <Image
          width="50"
          height="50"
          src="https://img.icons8.com/small/50/user.png"
          alt="user"
        />
      </div>
    </div>
  )
}
