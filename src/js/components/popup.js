import { user } from './firebase'

export const openPopUpEdit = (index) => {
  const popUp = document.querySelector('.popup')
  const task = document.querySelector(`[data-task-num="${index}"]`)
  const value = task.textContent

  popUp.style.display = 'block'

  editValue.setAttribute('data-task-edit', index)
  editValue.value = value

  if (document.querySelector(`[data-btn-favorite="${index}"]`).classList.contains('todo-btn__active')) {
    document.querySelector('#btnFavoriteEdit').classList.add('todo-btn__active')
  }
  if (document.querySelector(`[data-btn-fixed="${index}"]`).classList.contains('todo-btn__active')) {
    document.querySelector('#btnFixedEdit').classList.add('todo-btn__active')
  }

  setTimeout(() => {
    document.querySelector('.popup-edit-todo').style.bottom = 'calc(100% - 261px)'
  }, 200)

  document.querySelector('#btnFavoriteEdit').addEventListener('click', (e) => {
    document.querySelector('#btnFavoriteEdit').classList.toggle('todo-btn__active')
    document.querySelector(`[data-btn-favorite="${index}"]`).classList.toggle('todo-btn__active')

    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${index}`)
      .update({
        favorites: document.querySelector(`[data-btn-favorite="${index}"]`).classList.contains('todo-btn__active'),
      })
  })
  document.querySelector('#btnFixedEdit').addEventListener('click', () => {
    document.querySelector('#btnFixedEdit').classList.toggle('todo-btn__active')
    document.querySelector(`[data-btn-fixed="${index}"]`).classList.toggle('todo-btn__active')

    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${index}`)
      .update({
        fixed: document.querySelector(`[data-btn-fixed="${index}"]`).classList.contains('todo-btn__active'),
      })
  })
}
