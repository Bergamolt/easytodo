export const hideTaskList = index => {
  for (let i = 0; i < todoList.length; i++) {
    if (index === i) {
      todoList[i].style.display = 'block'
    } else {
      todoList[i].style.display = 'none'
    }
  }
}

export const updateListInTab = tab => {
  const list = document.querySelector(`[data-name-list="${tab}"]`)
  console.log(list)
  let ref2 = firebase.database().ref(`Todo/${user.uid}/All/`)

  ref2.once(
    'value',
    snapshot => {
      // if (obj == null) return
      let obj = snapshot.val()

      if (tab === 'incoming') {
        for (let i in obj) {
          list.prepend(document.querySelector(`[data-task-block="${obj[i]['id']}"]`))
        }
      }

      for (let i in obj) {
        if (obj[i][tab]) {
          list.prepend(document.querySelector(`[data-task-block="${obj[i]['id']}"]`))
        }
      }
    },
    error => {
      console.log('Error: ' + error.code)
    }
  )
}
