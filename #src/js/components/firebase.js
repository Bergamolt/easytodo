'use strict'

import { getTodosWithDB } from './initial-db'

const avatar = document.querySelector('#avatar')
const nameUser = document.querySelector('#name')
var obj = {}
var user

var firebaseConfig = {
  apiKey: 'AIzaSyCQp4B5XmxiRcOH5xnPbRNN-EvgGgYt30o',
  authDomain: 'food-f53db.firebaseapp.com',
  databaseURL: 'https://food-f53db.firebaseio.com',
  projectId: 'food-f53db',
  storageBucket: 'food-f53db.appspot.com',
  messagingSenderId: '662890986544',
  appId: '1:662890986544:web:2156f9f8ed044df3f581f5',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
var provider = new firebase.auth.GoogleAuthProvider()

firebase.auth().onAuthStateChanged(function (users) {
  if (users) {
    // User is signed in.
    console.log('User is signed in.')
    user = firebase.auth().currentUser
    console.log(user)

    avatar.style.backgroundImage = `url(${user.photoURL})`
    nameUser.textContent = user.displayName

    document.querySelector('.singin').style.display = 'none'
    document.querySelector('.header').style.display = 'flex'
    document.querySelector('.content').style.display = 'flex'

    if (user) {
      getTodosWithDB()
    }
    //getFolders();
  } else {
    // No user is signed in.
    console.log('No user is signed in.')
    document.querySelector('.singin').style.display = 'flex'
  }
})

export function googleSignin() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var token = result.credential.accessToken
      user = result.user
      user.photoURL
      console.log(token)
      console.log(user)
      avatar.style.backgroundImage = `url(${user.photoURL})`
      document.querySelector('.header').style.display = 'flex'
      document.querySelector('.content').style.display = 'flex'
    })
    .catch(function (error) {
      var errorCode = error.code
      var errorMessage = error.message

      console.log(error.code)
      console.log(error.message)
    })
}

export function googleSignout() {
  firebase
    .auth()
    .signOut()

    .then(
      function () {
        console.log('Signout Succesfull')
      },
      function (error) {
        console.log('Signout Failed')
      }
    )
}
