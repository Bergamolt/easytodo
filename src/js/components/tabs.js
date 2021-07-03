import { user } from './firebase'

export const hideTaskList = (index) => {
  for (let i = 0; i < todoList.length; i++) {
    if (index === i) {
      todoList[i].style.display = 'block'
    } else {
      todoList[i].style.display = 'none'
    }
  }
}

export const updateListInTab = (tab) => {
  const list = document.querySelector(`[data-name-list="${tab}"]`)

  const ref2 = firebase.database().ref(`Todo/${user.uid}/All/`)

  ref2.once(
    'value',
    (snapshot) => {
      const obj = snapshot.val()

      if (tab === 'incoming') {
        for (const i in obj) {
          list.prepend(document.querySelector(`[data-task-block="${obj[i].id}"]`))
        }
      }

      for (const i in obj) {
        if (obj[i][tab]) {
          list.prepend(document.querySelector(`[data-task-block="${obj[i].id}"]`))
        }
      }
    },
    (error) => {
      console.log(`Error: ${error.code}`)
    },
  )
}
