import { googleSignIn, googleSignOut, auth, checkSession } from '../../service/firebase/auth'
import { getTodos } from '../get-todo'

const singInBlock = document.querySelector('.singin')
const header = document.querySelector('.header')
const content = document.querySelector('.content')
const singInBtn = document.querySelector('.singin-btn')
const signOutBtn = document.querySelector('.header-exit')

checkSession(auth, user => {
  if (user) {
    singInBlock.style.display = 'none'
    header.style.display = 'flex'
    content.style.display = 'flex'

    getTodos()

    console.log('User is signed in.')
  } else {
    singInBlock.style.display = 'flex'
    header.style.display = 'none'
    content.style.display = 'none'

    console.log('No user is signed in.')
  }
})

singInBtn.addEventListener('click', googleSignIn)

signOutBtn.addEventListener('click', googleSignOut)
