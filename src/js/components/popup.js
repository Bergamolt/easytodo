export const openPopUpEdit = () => {
  const popUp = document.querySelector('.popup')
  const task = document.querySelectorAll('.todo-block-task')

  let index

  task.forEach((item, i) => {
    item.addEventListener('click', e => {
      if (e.target === item) {
        popUp.style.display = 'block'
        index = item.dataset.taskBlock

        editValue.setAttribute('data-task-edit', index)
        editValue.value = document.querySelectorAll('.todo-task')[i].textContent

        if (document.querySelector(`[data-btn-favorite="${index}"]`).classList.contains('todo-btn__active')) {
          document.querySelector('#btnFavoriteEdit').classList.add('todo-btn__active')
        }
        if (document.querySelector(`[data-btn-fixed="${index}"]`).classList.contains('todo-btn__active')) {
          document.querySelector('#btnFixedEdit').classList.add('todo-btn__active')
          console.log(index)
        }

        setTimeout(() => (document.querySelector('.popup-edit-todo').style.bottom = 'calc(100% - 261px)'), 200)
      }
    })
  })

  document.querySelector('#btnFavoriteEdit').addEventListener('click', e => {
    document.querySelector('#btnFavoriteEdit').classList.toggle('todo-btn__active')
    console.log(index)
    document.querySelector(`[data-btn-favorite="${index}"]`).classList.toggle('todo-btn__active')
    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${index}`)
      .update({
        favorites: document.querySelector(`[data-btn-favorite="${index}"]`).classList.contains('todo-btn__active'),
      })
  })
  document.querySelector('#btnFixedEdit').addEventListener('click', e => {
    document.querySelector('#btnFixedEdit').classList.toggle('todo-btn__active')
    console.log(index)
    document.querySelector(`[data-btn-fixed="${index}"]`).classList.toggle('todo-btn__active')
    firebase
      .database()
      .ref(`Todo/${user.uid}/All/${index}`)
      .update({
        fixed: document.querySelector(`[data-btn-fixed="${index}"]`).classList.contains('todo-btn__active'),
      })
  })
}
