import { getAuth } from 'firebase/auth'
import { getDatabase, ref, child, update } from 'firebase/database'

export const setDataBase = (value, id) => {
  const { uid } = getAuth().currentUser
  const db = getDatabase()

  const newTodo = {
    id,
    value,
    performed: false,
    favorites: false,
    fixed: false,
  }

  update(child(ref(db, `Todo/${uid}/All/`), `${id}`), newTodo)
}
