'use strict'

////// Start FireBase /////
import { googleSignin, googleSignout, user, obj } from './components/firebase'
////// End FireBase /////
import { addTodoItem } from './components/todo-item'
////// Init variables /////
const btnAddFolder = document.querySelector('#btnAddFolder')
const btnCreateFolder = document.querySelector('#createFolder')
const btnAddTask = document.querySelector('#btnAddTask')
const btnSave = document.querySelector('#btnSave')
const folderBlock = document.querySelector('.folder-block')
const folderList = document.querySelectorAll('.folder-list')
const taskContent = document.querySelector('#todoValue')
const Tabs = document.querySelectorAll('#btn-tabs')
const listTask = document.querySelectorAll('#todoList')
const singinBtn = document.querySelector('.singin-btn')
const exitBtn = document.querySelector('.header-exit')
const addTodo = document.querySelector('#addTodo')
const popUp = document.querySelector('.popup')
const editValue = document.querySelector('#editValue')
let tsk

let btnPerfotmend, btnDelete, btnFixed, btnFavorite

document.querySelector('#menu').addEventListener('click', () => {
  if (document.querySelector('#menu').checked) {
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

///// Singin and Signout /////

singinBtn.addEventListener('click', () => {
  googleSignin()
  document.querySelector('.singin').style.display = 'none'
})

exitBtn.addEventListener('click', () => {
  location.reload()
  googleSignout()
})

///// DataBase /////

function setDataBase(value, index) {
  console.log(user.uid)

  firebase.database().ref(`Todo/${user.uid}/All/`).child(index).update({
    id: index,
    value: value,
    performed: false,
    favorites: false,
    fixed: false,
  })
}

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

///// Buttons

// const hamdlerButtonDelete = (i) => {
//   const btnDelete = document.querySelector(`[data-btn-delete="${i}"]`)
//   btnDelete.addEventListener('click', () => {
//     firebase
//       .database()
//       .ref(`Todo/${user.uid}/All/`)
//       .child(btnDelete.dataset.btnDelete)
//       .remove()
//     document
//       .querySelector(`[data-task-block="${btnDelete.dataset.btnDelete}"]`)
//       .remove()
//   })
// }

const hamdlerButtonDelete = () => {
  const btnDelete = document.getElementsByClassName('btn-delete')

  btnDelete.addEventListener('click', (event) => {
    console.log(event)
    firebase
      .database()
      .ref(`Todo/${user.uid}/All/`)
      .child(btnDelete.dataset.btnDelete)
      .remove()
    // document
    //   .querySelector(`[data-task-block="${btnDelete.dataset.btnDelete}"]`)
    //   .remove()
  })
}

const handlerButtonPerfotmend = () => {
  btnPerfotmend = document.querySelectorAll('.todo-btn-ok')

  btnPerfotmend.forEach((btn) => {
    btn.addEventListener('click', () => {
      let task = document.querySelector(
        `[data-task-num="${btn.dataset.btnOk}"]`
      )

      if (btn.checked) {
        task.style.textDecoration = 'line-through'
      } else {
        task.style.textDecoration = 'none'
      }

      firebase
        .database()
        .ref(`Todo/${user.uid}/All/${btn.dataset.btnOk}`)
        .update({
          performed: btn.checked,
        })
    })
  })
}

const handlerButtonFavorite = (i) => {
  const btnFavorite = document.querySelector(`[data-btn-favorite="${i}"]`)
  btnFavorite.addEventListener('click', () => {
    const index = btnFavorite.dataset.btnFavorite
    btnFavorite.classList.toggle('todo-btn__active')

    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${index}`)
      .update({
        favorites: btnFavorite.classList.contains('todo-btn__active'),
      })
  })
}

const handlerButtonFixed = (i) => {
  const btnFixed = document.querySelector(`[data-btn-fixed="${i}"]`)
  btnFixed.addEventListener('click', () => {
    const index = btnFixed.dataset.btnFixed
    btnFixed.classList.toggle('todo-btn__active')

    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${index}`)
      .update({
        fixed: btnFixed.classList.contains('todo-btn__active'),
      })
  })
}

const testSelector = (obj) => {
  document.querySelector(`[data-btn-ok="${obj['id']}"]`).checked =
    obj['performed']

  if (obj['performed']) {
    document.querySelector(
      `[data-task-block="${obj['id']}"]`
    ).style.textDecoration = 'line-through'
  }

  if (obj['fixed']) {
    document
      .querySelector(`[data-btn-fixed="${obj['id']}"]`)
      .classList.add('todo-btn__active')
  }

  if (obj['favorites']) {
    document
      .querySelector(`[data-btn-favorite="${obj['id']}"]`)
      .classList.add('todo-btn__active')
  }
}

///// Edit task /////

const openPopUpEdit = () => {
  tsk = document.querySelectorAll('.todo-block-task')
  let index
  tsk.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      if (e.target === item) {
        popUp.style.display = 'block'
        index = item.dataset.taskBlock

        editValue.setAttribute('data-task-edit', index)
        editValue.value = document.querySelectorAll('.todo-task')[i].textContent

        if (
          document
            .querySelector(`[data-btn-favorite="${index}"]`)
            .classList.contains('todo-btn__active')
        ) {
          document
            .querySelector('#btnFavoriteEdit')
            .classList.add('todo-btn__active')
          console.log(index)
        }
        if (
          document
            .querySelector(`[data-btn-fixed="${index}"]`)
            .classList.contains('todo-btn__active')
        ) {
          document
            .querySelector('#btnFixedEdit')
            .classList.add('todo-btn__active')
          console.log(index)
        }

        setTimeout(
          () =>
            (document.querySelector('.popup-edit-todo').style.bottom =
              'calc(100% - 261px)'),
          200
        )
      }
    })
  })

  document.querySelector('#btnFavoriteEdit').addEventListener('click', (e) => {
    document
      .querySelector('#btnFavoriteEdit')
      .classList.toggle('todo-btn__active')
    console.log(index)
    document
      .querySelector(`[data-btn-favorite="${index}"]`)
      .classList.toggle('todo-btn__active')
    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${index}`)
      .update({
        favorites: document
          .querySelector(`[data-btn-favorite="${index}"]`)
          .classList.contains('todo-btn__active'),
      })
  })
  document.querySelector('#btnFixedEdit').addEventListener('click', (e) => {
    document.querySelector('#btnFixedEdit').classList.toggle('todo-btn__active')
    console.log(index)
    document
      .querySelector(`[data-btn-fixed="${index}"]`)
      .classList.toggle('todo-btn__active')
    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${index}`)
      .update({
        fixed: document
          .querySelector(`[data-btn-fixed="${index}"]`)
          .classList.contains('todo-btn__active'),
      })
  })
}

///// Add task and get task DB /////

// const createTasksWithDB = (object) => {
//   for (let i in object) {
//     const taskList = document.querySelector('#todoList')

//     let task = document.createElement('div')

//     task.classList.add('todo-block-task')
//     task.setAttribute('data-task-block', object[i]['id'])
//     task.innerHTML = `
//             <input type="checkbox" data-btn-ok=${object[i]['id']} id=${object[i]['id']} class="todo-btn-ok"></input>
//             <label for=${object[i]['id']}></label>
//             <span class="todo-task" data-task-num="${object[i]['id']}">${object[i]['value']}</span>
//             <div class="todo-btns">
//                 <button class="todo-btn" data-btn-fixed="${object[i]['id']}" id="btnFixed">
//                     <i class="todo-btn-icon icon-fixed uil uil-arrow-circle-up"></i>
//                 </button>
//                 <button class="todo-btn" data-btn-favorite="${object[i]['id']}" id="btnFavorite">
//                   <i class="todo-btn-icon icon__favorite uil uil-heart-alt"></i>
//                 </button>
//                 <button class="todo-btn btn-delete" id="btnDelete" data-btn-delete=${object[i]['id']}>
//                   <i class="todo-btn-icon uil uil-times-circle"></i>
//                 </button>
//             </div>
//             `

//     taskList.prepend(task)

//     testSelector(object[i])
//     handlerButtonFixed(object[i]['id'])
//     handlerButtonFavorite(object[i]['id'])
//     // hamdlerButtonDelete(object[i]['id'])
//     addTastInFolder(object[i]['id'])
//   }
//   handlerButtonPerfotmend()
//   openPopUpEdit()
// }

// const addTask = (taskText) => {
//   const taskList = document.querySelector('#todoList')

//   let task = document.createElement('div'),
//     i = Date.now()

//   task.classList.add('todo-block-task')
//   task.setAttribute('data-task-block', i)
//   task.innerHTML = `
//             <input type="checkbox" data-btn-ok=${i} id=${i} class="todo-btn-ok"></input>
//             <label for=${i}></label>
//             <span class="todo-task" data-task-num="${i}">${taskText}</span>
//             <div class="todo-btns">
//                 <button class="todo-btn" data-btn-fixed="${i}" id="btnFixed">
//                   <i class="todo-btn-icon icon-fixed uil uil-arrow-circle-up"></i>
//                 </button>
//                 <button class="todo-btn" data-btn-favorite="${i}" id="btnFavorite">
//                     <i class="todo-btn-icon icon__favorite uil uil-heart-alt"></i>
//                 </button>
//                 <button class="todo-btn btn-delete" id="btnDelete" data-btn-delete=${i}>
//                   <i class="todo-btn-icon uil uil-times-circle"></i>
//                 </button>
//             </div>
//         `

//   taskList.prepend(task)

//   setDataBase(taskText, i)
// }

/////////////////////////////////

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
    addTodoItem(taskContent.value)
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

const editTask = (event) => {
  const edit = document.querySelector('#editValue')

  if (
    (event.code === 'Enter' || event.type === 'click') &&
    edit.value != '' &&
    edit.value.trim()
  ) {
    document.querySelector(
      `[data-task-num="${edit.dataset.taskEdit}"]`
    ).textContent = edit.value
    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${edit.dataset.taskEdit}`)
      .update({
        value: edit.value,
      })
    popUp.style.display = 'none'
    document.querySelector('.popup-edit-todo').style.bottom = '-700px'
  }
}

editValue.addEventListener('keypress', (event) => editTask(event))

btnSave.addEventListener('click', (event) => editTask(event))

// const createFolder = (event) => {
//   const nameFolder = document.querySelector('#nameFolder');

//   if (
//     (event.code === 'Enter' || event.type === 'click') &&
//     nameFolder.value != '' &&
//     nameFolder.value.trim()
//   ) {
//     firebase
//       .database()
//       .ref(`Todo/${user.uid}/Folder/${nameFolder.value}`)
//       .update({
//         0: '0',
//       });

//     folderBlock.insertAdjacentHTML(
//       'afterbegin',
//       `<span>${nameFolder.value}</span>`
//     );
//     popUp.style.display = 'none';
//     document.querySelector('.popup-add-folder').style.top = '-700px';
//   }
// };

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

// const newFolder = document.querySelector('#addNameFolder');

//   newFolder.addEventListener('keypress', event => {
//     if (event.code === 'Enter') {
//       firebase.database().ref(`Todo/${user.uid}/Folder/Test`)
//       .update({
//         0: '0'
//       });
//     }
//   })

///// Tabs /////

const hideTaskList = (index) => {
  for (let i = 0; i < listTask.length; i++) {
    if (index === i) {
      listTask[i].style.display = 'block'
    } else {
      listTask[i].style.display = 'none'
    }
  }
}

const updateListInTab = (tab) => {
  const list = document.querySelector(`[data-name-list="${tab}"]`)
  let ref2 = firebase.database().ref(`Todo/${user.uid}/All/`)
  ref2.once(
    'value',
    (snapshot) => {
      if (obj == null) return
      obj = snapshot.val()

      if (tab === 'incoming') {
        for (let i in obj) {
          list.prepend(
            document.querySelector(`[data-task-block="${obj[i]['id']}"]`)
          )
        }
      }

      for (let i in obj) {
        if (obj[i][tab]) {
          console.log(obj[i][tab])
          list.prepend(
            document.querySelector(`[data-task-block="${obj[i]['id']}"]`)
          )
        }
      }
    },
    (error) => {
      console.log('Error: ' + error.code)
    }
  )
}

Tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    for (let i = 0; i < Tabs.length; i++) {
      Tabs[i].classList.remove('tab-active')
    }
    tab.classList.add('tab-active')
    hideTaskList(index)
    updateListInTab(tab.dataset.nameTab)
  })
})
