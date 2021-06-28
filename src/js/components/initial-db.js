import { createTodoListWithDB } from './create-todos-with-db'
import { user } from './firebase'

export const getTodosWithDB = data => {
  const ref = firebase.database().ref(`Todo/${user.uid}/All/`)

  ref.once(
    'value',
    snapshot => {
      if (data == null) return
      data = snapshot.val()
      createTodoListWithDB(data)
    },
    error => {
      console.log('Error: ' + error.code)
    }
  )
}
