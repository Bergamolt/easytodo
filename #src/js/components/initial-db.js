import { createTodoListWithDB } from './create-todos-with-db'
import { user } from './firebase'

export const getTodosWithDB = (obj) => {
  console.log(user)
  var ref = firebase.database().ref(`Todo/${user.uid}/All/`)

  ref.once(
    'value',
    function (snapshot) {
      if (obj == null) return
      obj = snapshot.val()
      createTodoListWithDB(obj)
    },
    function (error) {
      console.log('Error: ' + error.code)
    }
  )
}
