import { getDatabase, ref, onValue } from 'firebase/database'
import { auth } from '../service/firebase/auth'
import { createTodo } from './create-todo'

export const getTodos = () => {
  const db = getDatabase()
  const uid = auth.currentUser.uid

  const allTodos = ref(db, `Todo/${uid}/All/`)

  onValue(
    allTodos,
    snapshot => {
      const todos = snapshot.val()
      createTodo(todos)
    },
    { onlyOnce: true }
  )
}
