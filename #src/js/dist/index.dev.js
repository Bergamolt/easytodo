"use strict";

//window.onload = () => googleSignin();
/////////////////////////////////////////////////////////
var todoList = document.querySelectorAll('#todoList'),
    avatar = document.querySelector('.profile-avatar'),
    btnTabs = document.querySelectorAll('#btn-tabs'),
    todoValue = document.querySelector('#todoValue');
var object = {},
    btnFixed;
var menuFixed = document.querySelector('.menu-fixed');
todoValue.addEventListener('focus', function () {
  todoValue.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
      if (todoValue.value != '' && todoValue.value.trim() != '') {
        addTask(todoValue.value);
        todoValue.value = '';
      }
    }
  });
});
todoList.forEach(function (item, i) {
  if (i == 0) {
    item.style.display = 'block';
  } else {
    item.style.display = 'none';
  }
});
btnTabs.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    for (var i = 0; i < btnTabs.length; i++) {
      btnTabs[i].classList.remove('tab-active');
    }

    btn.classList.add('tab-active');
    todoList.forEach(function (item) {
      if (btn.dataset.nameTab === item.dataset.nameList) {
        todoList.forEach(function (item, i) {
          item.style.display = 'none';
        });
        item.style.display = 'block';
      }
    });
  });
}); ///// Start FireBase

var firebaseConfig = {
  apiKey: "AIzaSyCQp4B5XmxiRcOH5xnPbRNN-EvgGgYt30o",
  authDomain: "food-f53db.firebaseapp.com",
  databaseURL: "https://food-f53db.firebaseio.com",
  projectId: "food-f53db",
  storageBucket: "food-f53db.appspot.com",
  messagingSenderId: "662890986544",
  appId: "1:662890986544:web:2156f9f8ed044df3f581f5"
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
var user;
var checkSignin = false;

function googleSignin() {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    var token = result.credential.accessToken;
    user = result.user;
    user.photoURL;
    console.log(token);
    console.log(user);
    getDataBase();
  })["catch"](function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.code);
    console.log(error.message);
  });
}

function googleSignout() {
  firebase.auth().signOut().then(function () {
    console.log('Signout Succesfull');
  }, function (error) {
    console.log('Signout Failed');
  });
} ////// End FireBase


function addTask(taskText) {
  var tasks = document.querySelectorAll('.todo-task');
  var i = 0;
  console.log(tasks);

  if (tasks != null) {
    i = tasks.length;
  }

  var task = document.createElement('div');
  task.classList.add('todo-block-task');
  task.setAttribute('data-task-block', i);
  task.innerHTML = "\n        <input type=\"checkbox\" id=\"todoBtnOk\" class=\"todo-btn-ok\"></input>\n        <label for=\"todoBtnOk\"></label>\n        <span class=\"todo-task\" data-task-num=\"".concat(i, "\">").concat(taskText, "</span>\n        <div class=\"todo-btns\">\n            <button class=\"todo-btn todo-btn__active\" data-btn-fixed=\"").concat(i, "\" id=\"btnFixed\">\n                <svg class=\"todo-btn-icon icon-fixed\">\n                    <use xlink:href=\"#fixed\"></use>\n                </svg>\n            </button>\n            <button class=\"todo-btn\">\n                <svg class=\"todo-btn-icon\">\n                    <use xlink:href=\"#favorites\"></use>\n                </svg>\n            </button>\n        </div>\n    ");
  btnFixed = document.querySelectorAll('.todo-btn');
  todoList[0].prepend(task);
  /* setDataBase({
      [i]: {
          [i]: taskText
      }
  }); */

  btnFixed.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      console.log('ssd');
      TEST(btn, e);
    });
  });
}

function setDataBase(value) {
  console.log(user.uid);
  firebase.database().ref("Todo/".concat(user.uid)).child('task').update(value);
}

function getDataBase() {
  var obj = {};
  var ref = firebase.database().ref("Todo/".concat(user.uid, "/task"));
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

  for (var i = 0; i < obj.length; i++) {
    var task = document.createElement('div');
    task.classList.add('todo-block-task');
    task.innerHTML = "\n        <input type=\"checkbox\" id=\"todoBtnOk\" class=\"todo-btn-ok\"></input>\n        <label for=\"todoBtnOk\"></label>\n        <span class=\"todo-task\" data-task-num=\"".concat(i, "\">").concat(obj[i][i], "</span>\n        <div class=\"todo-btns\">\n            <button class=\"todo-btn todo-btn__active\" data-btn-fixed=\"").concat(i, "\" id=\"btnFixed\">\n                <svg class=\"todo-btn-icon icon-fixed\">\n                    <use xlink:href=\"#fixed\"></use>\n                </svg>\n            </button>\n            <button class=\"todo-btn\">\n                <svg class=\"todo-btn-icon\">\n                    <use xlink:href=\"#favorites\"></use>\n                </svg>\n            </button>\n        </div>\n        ");
    todoList[0].prepend(task);
  }

  ;
  btnFixed = document.querySelectorAll('.todo-btn');
  btnFixed.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      console.log('ssd');
      TEST(btn, e);
    });
  });
}

function loadingList(value) {}

function TEST(btn, e) {
  var i = btn.dataset.btnFixed;
  console.log(i);

  if (e.target == btn || btn.children) {
    console.log('ssd2');
    firebase.database().ref("".concat(user.uid, "/task")).child("".concat(i)).update({
      "fixed": true
    });
  }
}