import { user } from './firebase'

export const editTask = (event) => {
  const edit = document.querySelector('#editValue')
  const popUpEdit = document.querySelector('.popup-edit-todo')
  const popUp = document.querySelector('.popup')

  if ((event.code === 'Enter' || event.type === 'click') && edit.value !== '' && edit.value.trim()) {
    const task = document.querySelector(`[data-task-num="${edit.dataset.taskEdit}"]`)
    task.textContent = edit.value

    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${edit.dataset.taskEdit}`)
      .update({
        value: edit.value,
      })

    popUp.style.display = 'none'
    popUpEdit.style.bottom = '-700px'
  }
}
