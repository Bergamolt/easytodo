import { addTodoItem } from './todo-item'

export const createTodoListWithDB = (object) => {
  for (let i in object) {
    addTodoItem(object[i]['value'], object[i]['id'])
    // const todoList = document.querySelector('#todoList')

    // let todoItem = document.createElement('div')

    // todoItem.classList.add('todo-block-task')
    // todoItem.setAttribute('data-task-block', object[i]['id'])
    // todoItem.innerHTML = `
    //         <input type="checkbox" data-btn-ok=${object[i]['id']} id=${object[i]['id']} class="todo-btn-ok"></input>
    //         <label for=${object[i]['id']}></label>
    //         <span class="todo-task" data-task-num="${object[i]['id']}">${object[i]['value']}</span>
    //         <div class="todo-btns">
    //             <button class="todo-btn" data-btn-fixed="${object[i]['id']}" id="btnFixed">
    //                 <i class="todo-btn-icon icon-fixed uil uil-arrow-circle-up"></i>
    //             </button>
    //             <button class="todo-btn" data-btn-favorite="${object[i]['id']}" id="btnFavorite">
    //               <i class="todo-btn-icon icon__favorite uil uil-heart-alt"></i>
    //             </button>
    //             <button class="todo-btn btn-delete" id="btnDelete" data-btn-delete=${object[i]['id']}>
    //               <i class="todo-btn-icon uil uil-times-circle"></i>
    //             </button>
    //         </div>
    //         `

    // todoList.prepend(todoItem)

    // testSelector(object[i])
    // handlerButtonFixed(object[i]['id'])
    // handlerButtonFavorite(object[i]['id'])
    // // hamdlerButtonDelete(object[i]['id'])
    // addTastInFolder(object[i]['id'])
  }
  // handlerButtonPerfotmend()
  // openPopUpEdit()
}
