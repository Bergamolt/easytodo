import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth()
const provider = new GoogleAuthProvider()

async function googleSignIn() {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error)
  }
}

async function googleSignOut() {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}

const checkSession = onAuthStateChanged

export { googleSignOut, googleSignIn, auth, checkSession }
