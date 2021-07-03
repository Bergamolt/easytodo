import { createTodoListWithDB } from './create-todos-with-db'
import { user } from './firebase'

export const getTodosWithDB = (data) => {
  const ref = firebase.database().ref(`Todo/${user.uid}/All/`)
  console.log(ref);
  ref.once('value', (snapshot) => {
    if (data == null) {
      return
    }
    const todos = snapshot.val()
    createTodoListWithDB(todos)
  },
  (error) => {
    console.log(`Error: ${error.code}`)
  })
}
