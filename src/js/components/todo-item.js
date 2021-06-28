'use strict'

import { setDataBase } from './set-database'
import { onHandlersButtons } from './buttons'

export const addTodoItem = (todoText, id = 0, newTodo = false) => {
  const todoList = document.querySelector('#todoList')

  const todoItem = document.createElement('div')
  id = id !== 0 ? id : Date.now()

  todoItem.classList.add('todo-block-task')
  todoItem.setAttribute('data-task-block', id)

  todoItem.innerHTML = `
         <input type="checkbox" data-btn-ok=${id} id=${id} class="todo-btn-ok">
         <label for=${id}></label>
         <span class="todo-task" data-task-num="${id}">${todoText}</span>
         <div class="todo-btns">
            <button class="todo-btn" data-btn-edit="${id}" id="btnEdit">
                <i class="todo-btn-icon icon-edit uil uil-edit"></i>
            </button>
            <button class="todo-btn btn-dots" id="btnDots" data-btn-dots=${id}>
                <i class="todo-btn-icon uil uil-elipsis-double-v-alt"></i>
            </button>
            
            <div class="todo-btns-tooltip" data-tooltip="${id}">
                <button class="todo-btn" data-btn-fixed="${id}" id="btnFixed">
                    <i class="todo-btn-icon icon-fixed uil uil-arrow-circle-up"></i>
                </button>
                <button class="todo-btn" data-btn-favorite="${id}" id="btnFavorite">
                    <i class="todo-btn-icon icon__favorite uil uil-heart-alt"></i>
                </button>
                <button class="todo-btn btn-delete" id="btnDelete" data-btn-delete=${id}>
                    <i class="todo-btn-icon uil uil-times-circle"></i>
                </button>
            </div>
        </div>
    `

  todoList.prepend(todoItem)

  if (newTodo) {
    setDataBase(todoText, id)
    onHandlersButtons(id)
  }
}
