import {user} from "./firebase";

const handlerButtonDelete = (i) => {
    const btnDelete = document.querySelector(`[data-btn-delete="${i}"]`)
    console.log(btnDelete)
    btnDelete.addEventListener('click', () => {
        firebase
            .database()
            .ref(`Todo/${user.uid}/All/`)
            .child(btnDelete.dataset.btnDelete)
            .remove()
        document
            .querySelector(`[data-task-block="${btnDelete.dataset.btnDelete}"]`)
            .remove()
    })
}

const handlerButtonPerfotmend = () => {
    const btnPerfotmend = document.querySelectorAll('.todo-btn-ok')

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

export const onHandlersButtons = (id) => {
    handlerButtonDelete(id)
    handlerButtonFavorite(id)
    handlerButtonFixed(id)
    handlerButtonPerfotmend()
}