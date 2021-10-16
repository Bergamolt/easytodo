import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCQp4B5XmxiRcOH5xnPbRNN-EvgGgYt30o',
  authDomain: 'food-f53db.firebaseapp.com',
  databaseURL: 'https://food-f53db.firebaseio.com',
  projectId: 'food-f53db',
  storageBucket: 'food-f53db.appspot.com',
  messagingSenderId: '662890986544',
  appId: '1:662890986544:web:2156f9f8ed044df3f581f5',
}

export const app = initializeApp(firebaseConfig)
