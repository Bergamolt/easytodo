'use strict'

import {googleSignin, googleSignout} from './components/firebase'
import {addTodoItem} from './components/todo-item'
import {updateListInTab, hideTaskList} from './components/tabs'
import {editTask} from "./components/edit-tast";


// const btnAddFolder = document.querySelector('#btnAddFolder')
// const btnCreateFolder = document.querySelector('#createFolder')
const btnAddTask = document.querySelector('#btnAddTask')
const btnSave = document.querySelector('#btnSave')
// const folderBlock = document.querySelector('.folder-block')
// const folderList = document.querySelectorAll('.folder-list')
const taskContent = document.querySelector('#todoValue')
const $tabs = document.querySelectorAll('#btn-tabs')
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

singinBtn.addEventListener('click', googleSignin)

exitBtn.addEventListener('click', () => {
  todoList.innerHTML = ''
  googleSignout()
})


// function setDataBase(value, index) {
//   console.log(user.uid)
//
//   firebase.database().ref(`Todo/${user.uid}/All/`).child(index).update({
//     id: index,
//     value: value,
//     performed: false,
//     favorites: false,
//     fixed: false,
//   })
// }

// function getFolders() {
//   const ref = firebase.database().ref(`Todo/${user.uid}/Folder/`)
//   let folders = {}
//   ref.once(
//     'value',
//     function (snapshot) {
//       folders = snapshot.val()

//       for (const folderName in folders) {
//         folderBlock.insertAdjacentHTML(
//           'afterbegin',
//           `<span class='folder-name'>${folderName}</span>`
//         )
//         folderList.forEach((list) => {
//           list.insertAdjacentHTML(
//             'afterbegin',
//             `<span class='folder-name'>${folderName}</span>`
//           )
//         })
//       }

//       document.querySelectorAll('.folder-name').forEach(item => {
//         item.addEventListener('click', () => {
//           document.querySelectorAll('#showFolderList').forEach(btn => {
//             btn.textContent = item.textContent;
//           })
//         })
//       })
//     },
//     function (error) {
//       console.log('Error: ' + error.code)
//     }
//   )
// }

// function addTastInFolder(index) {
//   document.querySelectorAll('.folder-name').forEach((item) => {
//     item.addEventListener('click', () => {
//       document.querySelectorAll('#showFolderList').forEach((btn) => {
//         btn.textContent = item.textContent

//         firebase
//           .database()
//           .ref(`Todo/${user.uid}/Folder/`)
//           .child(item.textContent)
//           .update({
//             id: index,
//           })
//       })
//     })
//   })
// }


document.addEventListener('keypress', (event) => {
  if (
    event.code === 'Enter' &&
    taskContent.value != '' &&
    taskContent.value.trim()
  ) {
    addTodoItem(taskContent.value)
    taskContent.value = ''
    popUp.style.display = 'none'
    document.querySelector('.popup-add-todo').style.top = '-700px'
  }
})

btnAddTask.addEventListener('click', (event) => {
  if (taskContent.value != '' && taskContent.value.trim()) {
    addTodoItem(taskContent.value, 0, true)
    taskContent.value = ''
    popUp.style.display = 'none'
    document.querySelector('.popup-add-todo').style.top = '-700px'
  }
})

addTodo.addEventListener('click', () => {
  popUp.style.display = 'block'
  setTimeout(
    () => (document.querySelector('.popup-add-todo').style.top = '71px'),
    10
  )
})


// editValue.addEventListener('keypress', (event) => editTask(event))

btnSave.addEventListener('click', (event) => editTask(event))


// btnAddFolder.addEventListener('click', () => {
//   popUp.style.display = 'block';
//   setTimeout(
//     () => (document.querySelector('.popup-add-folder').style.top = '71px'),
//     10
//   );
// });

// btnCreateFolder.addEventListener('click', (event) => createFolder(event));

popUp.addEventListener('click', (e) => {
  if (e.target === popUp) {
    popUp.style.display = 'none'
    document
      .querySelector('#btnFavoriteEdit')
      .classList.remove('todo-btn__active')
    document.querySelector('#btnFixedEdit').classList.remove('todo-btn__active')
    document.querySelector('.popup-add-todo').style.top = '-700px'
    //document.querySelector('.popup-add-folder').style.top = '-700px';
    document.querySelector('.popup-edit-todo').style.bottom = '-700px'
  }
})


$tabs.forEach((tab, index) => {

  tab.addEventListener('click', () => {
    for (let i = 0; i < $tabs.length; i++) {
      $tabs[i].classList.remove('tab-active')
    }

    tab.classList.add('tab-active')

    hideTaskList(index, todoList)
    updateListInTab(tab.dataset.nameTab)
  })
})

