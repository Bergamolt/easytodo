import { googleSignIn, googleSignOut } from './components/firebase'
import { addTodoItem } from './components/todo-item'
import { updateListInTab, hideTaskList } from './components/tabs'
import { editTask } from './components/edit-tast'

const btnAddTask = document.querySelector('#btnAddTask')
const btnSave = document.querySelector('#btnSave')
const taskContent = document.querySelector('#todoValue')
const tabs = document.querySelectorAll('#btn-tabs')
const todoList = document.querySelector('#todoList')
const addTodo = document.querySelector('#addTodo')
const popUp = document.querySelector('.popup')

const menu = document.querySelector('#menu')

menu.addEventListener('click', () => {
  if (menu.checked) {
    if (window.innerWidth > 768) {
      document.querySelector('.content-todo').style.width = '100%'
    }

    document.querySelector('.content-menu').style.left = '-320px'
    document.querySelector('.content-menu').style.width = '0px'
  } else {
    if (window.innerWidth > 768) {
      document.querySelector('.content-todo').style.width = '100%'
    }

    document.querySelector('.content-menu').style.left = '0px'
    document.querySelector('.content-menu').style.width = '320px'
  }
})

const singinBtn = document.querySelector('.singin-btn')
const exitBtn = document.querySelector('.header-exit')

singinBtn.addEventListener('click', googleSignIn)

exitBtn.addEventListener('click', () => {
  todoList.innerHTML = ''
  googleSignOut()
})

document.addEventListener('keypress', (event) => {
  if (event.code === 'Enter' && taskContent.value !== '' && taskContent.value.trim()) {
    addTodoItem(taskContent.value, 0, true)
    taskContent.value = ''
    popUp.style.display = 'none'
    document.querySelector('.popup-add-todo').style.top = '-700px'
  }
})

btnAddTask.addEventListener('click', () => {
  if (taskContent.value !== '' && taskContent.value.trim()) {
    addTodoItem(taskContent.value, 0, true)
    taskContent.value = ''
    popUp.style.display = 'none'
    document.querySelector('.popup-add-todo').style.top = '-700px'
  }
})

addTodo.addEventListener('click', () => {
  popUp.style.display = 'block'
  setTimeout(() => {
    document.querySelector('.popup-add-todo').style.top = '71px'
  }, 10)
})

btnSave.addEventListener('click', (event) => editTask(event))

popUp.addEventListener('click', (e) => {
  if (e.target === popUp) {
    popUp.style.display = 'none'
    document.querySelector('#btnFavoriteEdit').classList.remove('todo-btn__active')
    document.querySelector('#btnFixedEdit').classList.remove('todo-btn__active')
    document.querySelector('.popup-add-todo').style.top = '-700px'
    document.querySelector('.popup-edit-todo').style.bottom = '-700px'
  }
})

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tab-active')
    }

    tab.classList.add('tab-active')

    hideTaskList(index, todoList)
    updateListInTab(tab.dataset.nameTab)
  })
})
