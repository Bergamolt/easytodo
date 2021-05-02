import {user} from "./firebase";

export const setDataBase = (value, index) => {
    console.log(user.uid)

    firebase.database().ref(`Todo/${user.uid}/All/`).child(index).update({
        id: index,
        value: value,
        performed: false,
        favorites: false,
        fixed: false,
    })
}