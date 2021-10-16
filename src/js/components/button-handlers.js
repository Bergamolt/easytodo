import { child, ref, getDatabase, remove, update } from 'firebase/database'
import { auth } from '../service/firebase/auth'

const db = getDatabase()

const handlerButtonMore = id => {
  const btnDots = document.querySelector(`[data-btn-dots="${id}"]`)
  const tooltip = document.querySelector(`[data-tooltip="${id}"]`)

  btnDots.addEventListener('click', () => {
    tooltip.style.transform = tooltip.style.transform === 'scaleX(1)' ? 'scaleX(0)' : 'scaleX(1)'
  })
}

export const handlerButtonPerfotmend = () => {
  const btnPerfotmend = document.querySelectorAll('.todo-btn-ok')

  btnPerfotmend.forEach(btn => {
    btn.addEventListener('click', event => {
      const id = event.target.id
      const path = `Todo/${auth.currentUser.uid}/All/${id}`
      const todo = document.querySelector(`[data-task-num="${id}"]`)

      const performed = event.target.checked

      todo.style.textDecoration = performed ? 'line-through' : 'none'

      update(ref(db, path), { performed })
    })
  })
}

const handlerButtonFavorite = id => {
  const path = `Todo/${auth.currentUser.uid}/All/${id}`

  const btnFavorite = document.querySelector(`[data-btn-favorite="${id}"]`)

  btnFavorite.addEventListener('click', () => {
    btnFavorite.classList.toggle('todo-btn__active')
    const favorites = btnFavorite.classList.contains('todo-btn__active')

    update(ref(db, path), { favorites })
  })
}

const handlerButtonFixed = id => {
  const path = `Todo/${auth.currentUser.uid}/All/${id}`

  const btnFixed = document.querySelector(`[data-btn-fixed="${id}"]`)

  btnFixed.addEventListener('click', () => {
    btnFixed.classList.toggle('todo-btn__active')
    const fixed = btnFixed.classList.contains('todo-btn__active')

    update(ref(db, path), { fixed })
  })
}

const handlerButtonDelete = id => {
  const path = `Todo/${auth.currentUser.uid}/All/`

  const btnDelete = document.querySelector(`[data-btn-delete="${id}"]`)
  const todoItem = document.querySelector(`[data-task-block="${id}"]`)

  btnDelete.addEventListener('click', () => {
    remove(child(ref(db, path), `${id}`))
    todoItem.remove()
  })
}

export const onButtonHandlers = id => {
  handlerButtonDelete(id)
  handlerButtonFavorite(id)
  handlerButtonFixed(id)
  handlerButtonMore(id)
}
