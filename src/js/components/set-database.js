import { user } from './firebase'

export const setDataBase = (value, index) => {
  firebase
    .database()
    .ref(`Todo/${user.uid}/All/`).child(index)
    .update({
      id: index,
      value,
      performed: false,
      favorites: false,
      fixed: false,
    })
}
