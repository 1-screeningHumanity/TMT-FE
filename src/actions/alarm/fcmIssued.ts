import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { fcmSendAPI } from './fcm'

export const fcmIssued = async () => {
  const firebaseConfig = {
    apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
    authDomain: `${process.env.NEXT_PUBLIC_AUTHDOMAIN}`,
    projectId: `${process.env.NEXT_PUBLIC_PROJECTID}`,
    storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID}`,
    appId: `${process.env.NEXT_PUBLIC_APP_ID}`,
    measurementId: `${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`,
  }
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
          .then(async (currentToken) => {
            if (currentToken) {
              const res = await fcmSendAPI(currentToken)
              console.log(res)
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
  const app = initializeApp(firebaseConfig)
}
