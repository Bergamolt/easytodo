//window.onload = () => googleSignin();

const addTask = (taskText) => {
    const tasks = document.querySelectorAll('.todo-task');
    let i = 0;
    console.log(tasks);

    if (tasks != null) {
        i = tasks.length;
    }

    let task = document.createElement('div');
    task.classList.add('todo-block-task');
    task.setAttribute('data-task-block', i);
    task.innerHTML = `
        <input type="checkbox" id="todoBtnOk" class="todo-btn-ok"></input>
        <label for="todoBtnOk"></label>
        <span class="todo-task" data-task-num="${i}">${taskText}</span>
        <div class="todo-btns">
            <button class="todo-btn todo-btn__active" data-btn-fixed="${i}" id="btnFixed">
                <svg class="todo-btn-icon icon-fixed">
                    <use xlink:href="#fixed"></use>
                </svg>
            </button>
            <button class="todo-btn">
                <svg class="todo-btn-icon">
                    <use xlink:href="#favorites"></use>
                </svg>
            </button>
        </div>
    `;

    btnFixed = document.querySelectorAll('.todo-btn');
    
    todoList[0].prepend(task);

    /* setDataBase({
        [i]: {
            [i]: taskText
        }
    }); */

   
        btnFixed.forEach(btn => {
        
            btn.addEventListener('click', (e) => {
                console.log('ssd')
                TEST(btn, e);
            });
        });
    

}








/////////////////////////////////////////////////////////

const todoList = document.querySelectorAll('#todoList'),
      avatar = document.querySelector('.profile-avatar'),
      btnTabs = document.querySelectorAll('#btn-tabs'),
      todoValue = document.querySelector('#todoValue');

let object = {},
    btnFixed;

const menuFixed = document.querySelector('.menu-fixed');

todoValue.addEventListener('focus', () => {
    todoValue.addEventListener('keydown', (event) => {
        if (event.code == 'Enter') {
            
            if (todoValue.value != '' && todoValue.value.trim() != '') {
                addTask(todoValue.value);
                todoValue.value = '';
            }
        }
    });
});

todoList.forEach((item, i) => {
    if (i == 0) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
    
});

btnTabs.forEach(btn => {
    console.log(btn)
    btn.addEventListener('click', (e) => {

        for (let i = 0; i < btnTabs.length; i++) {
            btnTabs[i].classList.remove('tab-active');
        }
        btn.classList.add('tab-active');

        todoList.forEach(item => {
            if (btn.dataset.nameTab === item.dataset.nameList) {
                todoList.forEach((item, i) => {
                    item.style.display = 'none';
                });
                item.style.display = 'block';
            }
        });
    });
});

///// Start FireBase

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
let checkSignin = false;

function googleSignin() {
    firebase.auth()

        .signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            user = result.user;
            user.photoURL;

            console.log(token)
            console.log(user)
            
            getDataBase();

        }).catch(function (error) {
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

////// End FireBase


function addTask(taskText) {

    const tasks = document.querySelectorAll('.todo-task');
    let i = 0;
    console.log(tasks);

    if (tasks != null) {
        i = tasks.length;
    }

    let task = document.createElement('div');
    task.classList.add('todo-block-task');
    task.setAttribute('data-task-block', i);
    task.innerHTML = `
        <input type="checkbox" id="todoBtnOk" class="todo-btn-ok"></input>
        <label for="todoBtnOk"></label>
        <span class="todo-task" data-task-num="${i}">${taskText}</span>
        <div class="todo-btns">
            <button class="todo-btn todo-btn__active" data-btn-fixed="${i}" id="btnFixed">
                <svg class="todo-btn-icon icon-fixed">
                    <use xlink:href="#fixed"></use>
                </svg>
            </button>
            <button class="todo-btn">
                <svg class="todo-btn-icon">
                    <use xlink:href="#favorites"></use>
                </svg>
            </button>
        </div>
    `;

    btnFixed = document.querySelectorAll('.todo-btn');
    
    todoList[0].prepend(task);

    /* setDataBase({
        [i]: {
            [i]: taskText
        }
    }); */

   
        btnFixed.forEach(btn => {
        
            btn.addEventListener('click', (e) => {
                console.log('ssd')
                TEST(btn, e);
            });
        });
    

}


function setDataBase(value) {

    console.log(user.uid);
    firebase.database().ref(`Todo/${user.uid}`).child('task').update(value);

}

function getDataBase() {
    let obj = {};
    var ref = firebase.database().ref(`Todo/${user.uid}/task`);

    ref.once("value", function (snapshot) {
        
        if (obj == null) return;
        obj = snapshot.val();
        createTasks(obj);

    }, function (error) {
        console.log("Error: " + error.code);
    });
}

function createTasks(obj) {
    console.log(obj);
    
    for (let i = 0; i < obj.length; i++){
        let task = document.createElement('div');
        task.classList.add('todo-block-task');
        task.innerHTML = `
        <input type="checkbox" id="todoBtnOk" class="todo-btn-ok"></input>
        <label for="todoBtnOk"></label>
        <span class="todo-task" data-task-num="${i}">${obj[i][i]}</span>
        <div class="todo-btns">
            <button class="todo-btn todo-btn__active" data-btn-fixed="${i}" id="btnFixed">
                <svg class="todo-btn-icon icon-fixed">
                    <use xlink:href="#fixed"></use>
                </svg>
            </button>
            <button class="todo-btn">
                <svg class="todo-btn-icon">
                    <use xlink:href="#favorites"></use>
                </svg>
            </button>
        </div>
        `;

        todoList[0].prepend(task);
    };

    btnFixed = document.querySelectorAll('.todo-btn');

    btnFixed.forEach(btn => {
        
        btn.addEventListener('click', (e) => {
            console.log('ssd')
            TEST(btn, e);
        });
    });

}


function loadingList(value) {
    
}


function TEST(btn, e) {
    let i = btn.dataset.btnFixed;
                
                console.log(i)
    if (e.target == btn || btn.children) {
                    console.log('ssd2')

        firebase.database().ref(`${user.uid}/task`).child(`${i}`).update({"fixed": true});
    }
}



