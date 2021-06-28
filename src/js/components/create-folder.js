import { user } from './firebase'

export const createFolder = event => {
  const nameFolder = document.querySelector('#nameFolder')

  if ((event.code === 'Enter' || event.type === 'click') && nameFolder.value != '' && nameFolder.value.trim()) {
    firebase.database().ref(`Todo/${user.uid}/Folder/${nameFolder.value}`).update({
      0: '0',
    })

    folderBlock.insertAdjacentHTML('afterbegin', `<span>${nameFolder.value}</span>`)
    popUp.style.display = 'none'
    document.querySelector('.popup-add-folder').style.top = '-700px'
  }
}

// const newFolder = document.querySelector('#addNameFolder');

//   newFolder.addEventListener('keypress', event => {
//     if (event.code === 'Enter') {
//       firebase.database().ref(`Todo/${user.uid}/Folder/Test`)
//       .update({
//         0: '0'
//       });
//     }
//   })
