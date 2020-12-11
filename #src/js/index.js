'use strict';

const avatar = document.querySelector('#avatar');
const nameUser = document.querySelector('#name');

///// Start FireBase /////

var firebaseConfig = {
    apiKey: "AIzaSyCQp4B5XmxiRcOH5xnPbRNN-EvgGgYt30o",
    authDomain: "food-f53db.firebaseapp.com",
    databaseURL: "https://food-f53db.firebaseio.com",
    projectId: "food-f53db",
    storageBucket: "food-f53db.appspot.com",
    messagingSenderId: "662890986544",
    appId: "1:662890986544:web:2156f9f8ed044df3f581f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
var user;
var obj = {};

firebase.auth().onAuthStateChanged(function (users) {
    if (users) {
        // User is signed in.
        console.log('User is signed in.')
        user = firebase.auth().currentUser;
        avatar.style.backgroundImage = `url(${user.photoURL})`;
        nameUser.textContent = user.displayName;
        document.querySelector('.singin').style.display = 'none';
        document.querySelector('.header').style.display = 'flex';
        document.querySelector('.content').style.display = 'flex';
        getListTasksDB()

    } else {
        // No user is signed in.
        console.log('No user is signed in.')
        document.querySelector('.singin').style.display = 'flex';
    }
});

function googleSignin() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            user = result.user;
            user.photoURL;

            console.log(token);
            console.log(user);
            avatar.style.backgroundImage = `url(${user.photoURL})`
            document.querySelector('.header').style.display = 'flex';
            document.querySelector('.content').style.display = 'flex';

        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code)
            console.log(error.message)
        });

}


function googleSignout() {
    firebase.auth().signOut()

        .then(function () {
            console.log('Signout Succesfull')
        }, function (error) {
            console.log('Signout Failed')
        });
}

////// End FireBase /////

////// Init variables /////

const taskContent = document.querySelector('#todoValue');
const Tabs = document.querySelectorAll('#btn-tabs');
const listTask = document.querySelectorAll('#todoList');
const singinBtn = document.querySelector('.singin-btn');
const exitBtn = document.querySelector('.header-exit');
const addTodo = document.querySelector('#addTodo');
const popUp = document.querySelector('.popup');
const editValue = document.querySelector('#editValue');
let tsk;

let btnPerfotmend,
    btnDelete,
    btnFixed,
    btnFavorite;

document.querySelector('#menu').addEventListener('click', () => {
    if (document.querySelector('#menu').checked) {
        if (window.innerWidth > 768) {
            document.querySelector('.content-todo').style.width = '100%';
        }
        document.querySelector('.content-menu').style.left = '-35%';
        document.querySelector('.content-menu').style.width = '0%';
    } else {
        if (window.innerWidth > 768) {
            document.querySelector('.content-todo').style.width = '65%';
        }
        document.querySelector('.content-menu').style.left = '0px';
        document.querySelector('.content-menu').style.width = '35%';
    }
})

///// Singin and Signout /////

singinBtn.addEventListener('click', () => {
    googleSignin();
    document.querySelector('.singin').style.display = 'none';
});

exitBtn.addEventListener('click', () => {
    location.reload();
    googleSignout();
});

///// DataBase /////

function setDataBase(value, index) {
    console.log(user.uid);

    firebase.database().ref(`Todo/${user.uid}`).child(index).update({
        'id': index,
        'value': value,
        'performed': false,
        'favorites': false,
        'fixed': false
    });
}

function getListTasksDB() {

    var ref = firebase.database().ref(`Todo/${user.uid}`);
    ref.once("value", function (snapshot) {

            if (obj == null) return;
            obj = snapshot.val();
            createTasksWithDB(obj);

        },
        function (error) {
            console.log("Error: " + error.code);
        }
    );
}

///// Buttons

const hamdlerButtonDelete = (btn) => {
    btn.addEventListener('click', () => {
        console.log('delete: ' + btn.dataset.btnDelete)
        firebase.database().ref(`Todo/${user.uid}`).child(btn.dataset.btnDelete).remove();
        document.querySelector(`[data-task-block="${btn.dataset.btnDelete}"]`).remove();
    });
};

const handlerButtonPerfotmend = () => {
    btnPerfotmend = document.querySelectorAll('.todo-btn-ok');

    btnPerfotmend.forEach(btn => {
        btn.addEventListener('click', () => {

            let task = document.querySelector(`[data-task-num="${btn.dataset.btnOk}"]`);

            if (btn.checked) {
                task.style.textDecoration = 'line-through';

            } else {
                task.style.textDecoration = 'none';
            }

            firebase.database().ref(`Todo/${user.uid}/${btn.dataset.btnOk}`).update({
                'performed': btn.checked,
            });

        });
    });
};

const handlerButtonFavorite = (btn) => {
    btn.addEventListener('click', () => {
        const index = btn.dataset.btnFavorite;
        btn.classList.toggle('todo-btn__active');

        firebase.database().ref(`Todo/${user.uid}/${index}`).update({
            'favorites': btn.classList.contains('todo-btn__active'),
        });
    })
};

const handlerButtonFixed = (i) => {
    const btnFixed = document.querySelector(`[data-btn-fixed="${i}"]`) 
    btnFixed.addEventListener('click', () => {
        const index = btnFixed.dataset.btnFixed
        btnFixed.classList.toggle('todo-btn__active');

        firebase.database().ref(`Todo/${user.uid}/${index}`).update({
            'fixed': btnFixed.classList.contains('todo-btn__active'),
        });
    })
};

const testSelector = (obj) => {

    document.querySelector(`[data-btn-ok="${obj['id']}"]`).checked = obj['performed'];

    if (obj['performed']) {
        document.querySelector(`[data-task-block="${obj['id']}"]`).style.textDecoration = 'line-through';
    }

    if (obj['fixed']) {
        document.querySelector(`[data-btn-fixed="${obj['id']}"]`).classList.add('todo-btn__active');
    }

    if (obj['favorites']) {
        document.querySelector(`[data-btn-favorite="${obj['id']}"]`).classList.add('todo-btn__active');
    }
}

///// Edit task /////

const openPopUpEdit = () => {
    tsk = document.querySelectorAll('.todo-block-task');
    let index;
    tsk.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            if (e.target === item) {
                popUp.style.display = 'block';
                index = item.dataset.taskBlock;
                
                editValue.setAttribute('data-task-edit', index);
                editValue.value = document.querySelectorAll('.todo-task')[i].textContent;
                console.log('prev')
                if (document.querySelector(`[data-btn-favorite="${index}"]`).classList.contains('todo-btn__active')) {
                    document.querySelector('#btnFavoriteEdit').classList.add('todo-btn__active');
                    console.log(index)
                }
                if (document.querySelector(`[data-btn-fixed="${index}"]`).classList.contains('todo-btn__active')) {
                    document.querySelector('#btnFixedEdit').classList.add('todo-btn__active');
                    console.log(index)
                }
                
                setTimeout(() => document.querySelector('.popup-edit-todo').style.bottom = 'calc(100% - 261px)', 200);
            }
        })
    })

    document.querySelector('#btnFavoriteEdit').addEventListener('click', (e) => {
        document.querySelector('#btnFavoriteEdit').classList.toggle('todo-btn__active');
        console.log(index)
        document.querySelector(`[data-btn-favorite="${index}"]`).classList.toggle('todo-btn__active');
        firebase.database().ref(`Todo/${user.uid}/${index}`).update({
            'favorites': document.querySelector(`[data-btn-favorite="${index}"]`).classList.contains('todo-btn__active'),
        });
    })
    document.querySelector('#btnFixedEdit').addEventListener('click', (e) => {
        document.querySelector('#btnFixedEdit').classList.toggle('todo-btn__active');
        console.log(index)
        document.querySelector(`[data-btn-fixed="${index}"]`).classList.toggle('todo-btn__active');
        firebase.database().ref(`Todo/${user.uid}/${index}`).update({
            'fixed': document.querySelector(`[data-btn-fixed="${index}"]`).classList.contains('todo-btn__active'),
        });
    })
}

///// Add task and get task DB /////

const createTasksWithDB = (object) => {

    for (let i in object) {
        const taskList = document.querySelector('#todoList');

        let task = document.createElement('div');

        task.classList.add('todo-block-task');
        task.setAttribute('data-task-block', object[i]['id']);
        task.innerHTML = `
            <input type="checkbox" data-btn-ok=${object[i]['id']} id=${object[i]['id']} class="todo-btn-ok"></input>
            <label for=${object[i]['id']}></label>
            <span class="todo-task" data-task-num="${object[i]['id']}">${object[i]['value']}</span>
            <div class="todo-btns">
                <button class="todo-btn" data-btn-fixed="${object[i]['id']}" id="btnFixed">
                    <svg class="todo-btn-icon icon-fixed">
                        <use xlink:href="#fixed"></use>
                    </svg>
                </button>
                <button class="todo-btn" data-btn-favorite="${object[i]['id']}" id="btnFavorite">
                    <svg class="todo-btn-icon icon__favorite">
                        <use xlink:href="#favorites"></use>
                    </svg>
                </button>
                <button class="todo-btn btn-delete" id="btnDelete" data-btn-delete=${object[i]['id']}>
                    <svg class="todo-btn-icon">
                        <use xlink:href="#delete"></use>
                    </svg>
                </button>
            </div>
            `;

        taskList.prepend(task);

        testSelector(object[i]);
        handlerButtonFixed(object[i]['id']);
        handlerButtonFavorite(document.querySelector(`[data-btn-favorite="${object[i]['id']}"]`));
        hamdlerButtonDelete(document.querySelector(`[data-btn-delete="${object[i]['id']}"]`));

    }
    handlerButtonPerfotmend();
    openPopUpEdit();
}

const addTask = (taskText) => {
    const taskList = document.querySelector('#todoList');

    let task = document.createElement('div'),
        i = Date.now();

    task.classList.add('todo-block-task');
    task.setAttribute('data-task-block', i);
    task.innerHTML = `
            <input type="checkbox" data-btn-ok=${i} id=${i} class="todo-btn-ok"></input>
            <label for=${i}></label>
            <span class="todo-task" data-task-num="${i}">${taskText}</span>
            <div class="todo-btns">
                <button class="todo-btn" data-btn-fixed="${i}" id="btnFixed">
                    <svg class="todo-btn-icon icon-fixed">
                        <use xlink:href="#fixed"></use>
                    </svg>
                </button>
                <button class="todo-btn" data-btn-favorite="${i}" id="btnFavorite">
                    <svg class="todo-btn-icon icon__favorite">
                        <use xlink:href="#favorites"></use>
                    </svg>
                </button>
                <button class="todo-btn btn-delete" id="btnDelete" data-btn-delete=${i}>
                </button>
            </div>
        `;

    taskList.prepend(task);

    setDataBase(taskText, i);

    handlerButtonPerfotmend();
    handlerButtonFixed(document.querySelector(`[data-btn-fixed="${i}"]`));
    handlerButtonFavorite(document.querySelector(`[data-btn-favorite="${i}"]`));
    hamdlerButtonDelete(document.querySelector(`[data-btn-delete="${i}"]`));
};

/////////////////////////////////

document.addEventListener('keypress', (event) => {
    if (event.code === 'Enter' && taskContent.value != '' && taskContent.value.trim()) {
        addTask(taskContent.value);
        taskContent.value = '';
        popUp.style.display = 'none';
        document.querySelector('.popup-add-todo').style.top = '-700px';
    }
});

addTodo.addEventListener('click', () => {
    popUp.style.display = 'block';
    setTimeout(() => document.querySelector('.popup-add-todo').style.top = '71px', 10)
});

popUp.addEventListener('click', (e) => {
    if (e.target === popUp) {
        popUp.style.display = 'none';
        document.querySelector('#btnFavoriteEdit').classList.remove('todo-btn__active');
        document.querySelector('#btnFixedEdit').classList.remove('todo-btn__active');
        document.querySelector('.popup-add-todo').style.top = '-700px';
        document.querySelector('.popup-edit-todo').style.bottom = '-700px'
    }
})

editValue.addEventListener('keypress', (event) => {
    const edit = document.querySelector('#editValue');
    if (event.code === 'Enter' && edit.value != '' && edit.value.trim()) {
        document.querySelector(`[data-task-num="${edit.dataset.taskEdit}"]`).textContent = edit.value;
        firebase.database().ref(`Todo/${user.uid}/${edit.dataset.taskEdit}`).update({
            'value': edit.value,
        });
        popUp.style.display = 'none';
        document.querySelector('.popup-edit-todo').style.bottom = '-700px';
    }
})

///// Tabs /////

const hideTaskList = (index) => {
    for (let i = 0; i < listTask.length; i++) {
        if (index === i) {
            listTask[i].style.display = 'block';
        } else {
            listTask[i].style.display = 'none';
        }
    }
};

const updateListInTab = (tab) => {
    const list = document.querySelector(`[data-name-list="${tab}"]`);
    let ref2 = firebase.database().ref(`Todo/${user.uid}`);
    ref2.once("value", (snapshot) => {

        if (obj == null) return;
        obj = snapshot.val();

        if (tab === 'incoming') {
            for (let i in obj) {
                list.prepend(document.querySelector(`[data-task-block="${obj[i]['id']}"]`));
            }
        }

        for (let i in obj) {
            if (obj[i][tab]) {
                console.log(obj[i][tab])
                list.prepend(document.querySelector(`[data-task-block="${obj[i]['id']}"]`));
            }
        }

    }, (error) => {
        console.log("Error: " + error.code);
    });
};

Tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        for (let i = 0; i < Tabs.length; i++) {
            Tabs[i].classList.remove('tab-active');
        }
        tab.classList.add('tab-active');
        hideTaskList(index);
        updateListInTab(tab.dataset.nameTab);

    });
});