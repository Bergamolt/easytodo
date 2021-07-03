import { getTodosWithDB } from './initial-db'

const singIn = document.querySelector('.singin')
const header = document.querySelector('.header')
const content = document.querySelector('.content')

// const avatar = document.querySelector('#avatar')
// const nameUser = document.querySelector('#name')

export let user
export const obj = {}

const firebaseConfig = {
  apiKey: 'AIzaSyCQp4B5XmxiRcOH5xnPbRNN-EvgGgYt30o',
  authDomain: 'food-f53db.firebaseapp.com',
  databaseURL: 'https://food-f53db.firebaseio.com',
  projectId: 'food-f53db',
  storageBucket: 'food-f53db.appspot.com',
  messagingSenderId: '662890986544',
  appId: '1:662890986544:web:2156f9f8ed044df3f581f5',
}

firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()

firebase.auth().onAuthStateChanged((users) => {
  if (users) {
    // User is signed in.
    console.log('User is signed in.')
    user = firebase.auth().currentUser

    // avatar.style.backgroundImage = `url(${user.photoURL})`
    // nameUser.textContent = user.displayName

    singIn.style.display = 'none'
    header.style.display = 'flex'
    content.style.display = 'flex'

    if (user) {
      getTodosWithDB(obj)
    }
  } else {
    console.log('No user is signed in.')
    singIn.style.display = 'flex'
  }
})

export const googleSignIn = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // const token = result.credential.accessToken
      user = result.user
      // avatar.style.backgroundImage = `url(${user.photoURL})`

      singIn.style.display = 'none'
      header.style.display = 'flex'
      content.style.display = 'flex'
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })
}

export const googleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('Signout Succesfull')
    },
    (error) => {
      console.log('Signout Failed', error)
    })
}
