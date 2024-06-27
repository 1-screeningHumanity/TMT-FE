importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js',
)
importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js',
)

const config = {
  apiKey: 'AIzaSyBiFkFmSlL8tSxxtH-yleB44vrjXGacKlU',
  authDomain: `stockproject-7acf5.firebaseapp.com`,
  projectId: 'stockproject-7acf5',
  storageBucket: 'tockproject-7acf5.appspot.com',
  messagingSenderId: '1069637061931',
  appId: '1:1069637061931:web:c85fd4a9b603877c88896e',
  measurementId: 'G-RN9TQVJ5LL',
}

firebase.initializeApp(config)

const messaging = firebase.messaging()
