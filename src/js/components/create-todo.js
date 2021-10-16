import { addTodoItem } from './todo-item'
import { onButtonHandlers, handlerButtonPerfotmend } from './button-handlers'
import { openPopUpEdit } from './popup'

const testSelector = obj => {
  document.querySelector(`[data-btn-ok="${obj['id']}"]`).checked = obj['performed']

  if (obj['performed']) {
    document.querySelector(`[data-task-block="${obj['id']}"]`).style.textDecoration = 'line-through'
  }

  if (obj['fixed']) {
    document.querySelector(`[data-btn-fixed="${obj['id']}"]`).classList.add('todo-btn__active')
  }

  if (obj['favorites']) {
    document.querySelector(`[data-btn-favorite="${obj['id']}"]`).classList.add('todo-btn__active')
  }
}

export const createTodo = todos => {
  for (let todo in todos) {
    const { value, id } = todos[todo]

    addTodoItem(value, id)
    onButtonHandlers(id)
    //testSelector(object[i])
  }

  handlerButtonPerfotmend()
  //openPopUpEdit()
}
