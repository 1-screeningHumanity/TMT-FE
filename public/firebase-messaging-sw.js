importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js',
)
importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js',
)

const config = {
  apiKey: 'AIzaSyBiFkFmSlL8tSxxtH-yleB44vrjXGacKlU',
  authDomain: 'stockproject-7acf5.firebaseapp.com',
  projectId: 'stockproject-7acf5',
  storageBucket: 'stockproject-7acf5.appspot.com',
  messagingSenderId: '1069637061931',
  appId: 'G-RN9TQVJ5LL',
  measurementId:
    'BEITJzBYJqxbe_p8ds4s_ZyS64YVcMfSVff0xOfPNTalQrMchPCSvtqvbdYh7E5TkcX1XOH0xMu7ZNPLTfSxjTY',
}
// const config = {
//   apiKey: 'AIzaSyBiFkFmSlL8tSxxtH-yleB44vrjXGacKlU',
//   authDomain: 'stockproject-7acf5.firebaseapp.com',
//   projectId: 'stockproject-7acf5',
//   storageBucket: 'stockproject-7acf5.appspot.com',
//   messagingSenderId: '1069637061931',
//   appId: `${process.env.NEXT_PUBLIC_APP_ID}`,
//   measurementId: `${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`,
// }

firebase.initializeApp(config)

const messaging = firebase.messaging()
