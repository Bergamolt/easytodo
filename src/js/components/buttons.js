import { user } from './firebase'
import { openPopUpEdit } from './popup'

const handlerButtonDelete = (id) => {
  const btnDelete = document.querySelector(`[data-btn-delete="${id}"]`)
  const todoItem = document.querySelector(`[data-task-block="${btnDelete.dataset.btnDelete}"]`)

  btnDelete.addEventListener('click', () => {
    firebase.database()
      .ref(`Todo/${user.uid}/All/`)
      .child(btnDelete.dataset.btnDelete)
      .remove()

    todoItem.remove()
  })
}

const handlerButtonMore = (id) => {
  const btnDots = document.querySelector(`[data-btn-dots="${id}"]`)
  const tooltip = document.querySelector(`[data-tooltip="${btnDots.dataset.btnDots}"]`)

  btnDots.addEventListener('click', () => {
    tooltip.style.transform = tooltip.style.transform === 'scaleX(1)' ? 'scaleX(0)' : 'scaleX(1)'
  })
}

export const handlerButtonPerfotmend = () => {
  const btnPerfotmend = document.querySelectorAll('.todo-btn-ok')

  btnPerfotmend.forEach((btn) => {
    btn.addEventListener('click', () => {
      const task = document.querySelector(`[data-task-num="${btn.dataset.btnOk}"]`)

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

const handlerButtonFavorite = (id) => {
  const btnFavorite = document.querySelector(`[data-btn-favorite="${id}"]`)

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

const handlerButtonFixed = (id) => {
  const btnFixed = document.querySelector(`[data-btn-fixed="${id}"]`)

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

const handlerButtonEdit = (id) => {
  const btnEdit = document.querySelector(`[data-btn-edit="${id}"]`)

  btnEdit.addEventListener('click', () => {
    openPopUpEdit(id)
  })
}

export const onHandlersButtons = (id) => {
  handlerButtonDelete(id)
  handlerButtonFavorite(id)
  handlerButtonFixed(id)
  handlerButtonMore(id)
  handlerButtonEdit(id)
}
