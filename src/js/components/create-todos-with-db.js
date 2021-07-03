import { addTodoItem } from './todo-item'
import { onHandlersButtons, handlerButtonPerfotmend } from './buttons'
import { openPopUpEdit } from './popup'

const testSelector = (data) => {
  const buttonPerformed = document.querySelector(`[data-btn-ok="${data.id}"]`)
  const buttonTask = document.querySelector(`[data-task-block="${data.id}"]`)
  const buttonFixed = document.querySelector(`[data-btn-fixed="${data.id}"]`)
  const buttonFavorite = document.querySelector(`[data-btn-favorite="${data.id}"]`)

  buttonPerformed.checked = data.performed

  if (data.performed) {
    buttonTask.style.textDecoration = 'line-through'
  }

  if (data.fixed) {
    buttonFixed.classList.add('todo-btn__active')
  }

  if (data.favorites) {
    buttonFavorite.classList.add('todo-btn__active')
  }
}

export const createTodoListWithDB = (data) => {
  for (const index in data) {
    addTodoItem(data[index].value, data[index].id)

    onHandlersButtons(data[index].id)
    testSelector(data[index])
  }

  handlerButtonPerfotmend()
  openPopUpEdit()
}
