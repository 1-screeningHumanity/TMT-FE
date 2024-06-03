importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js',
)
importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js',
)

const config = {
  apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_AUTHDOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_PROJECTID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_APP_ID}`,
  measurementId: `${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`,
}

firebase.initializeApp(config)

const messaging = firebase.messaging()
