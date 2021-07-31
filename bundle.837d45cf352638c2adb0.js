/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\"/>\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"/>\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\"/>\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://unicons.iconscout.com/release/v3.0.6/css/line.css\\\"/>\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&amp;display=swap\\\" rel=\\\"stylesheet\\\"/>\\n    <title>Easy ToDo</title>\\n  </head>\\n  <body>\\n    <div class=\\\"container\\\">\\n      <section class=\\\"singin\\\">\\n        <div class=\\\"singin-block\\\">\\n          <button class=\\\"singin-btn\\\">Войти через Google<img src=\\\"https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg\\\" alt=\\\"\\\"/></button>\\n        </div>\\n      </section>\\n      <section class=\\\"header\\\">\\n        <input class=\\\"menu\\\" type=\\\"checkbox\\\" id=\\\"menu\\\"/>\\n        <label class=\\\"btn-menu\\\" for=\\\"menu\\\"><i class=\\\"uil uil-list-ui-alt\\\"></i></label><span class=\\\"header-logo\\\">Easy ToDo</span>\\n        <div class=\\\"header-content\\\">\\n          <button class=\\\"todo-add-plus\\\" id=\\\"addTodo\\\"><i class=\\\"uil uil-plus-circle\\\"></i></button>\\n          <button class=\\\"header-exit\\\"><i class=\\\"uil uil-sign-out-alt\\\"></i></button>\\n          <!--div(id=\\\"avatar\\\" class=\\\"profile-avatar\\\")\\n          //- button.header-search\\n          //-     img(src=\\\"../svg/header/search-icon.svg\\\", alt=\\\"\\\")\\n          -->\\n        </div>\\n      </section>\\n      <section class=\\\"content\\\">\\n        <menu class=\\\"content-menu\\\">\\n          <!--.menu-profile\\n          div(id=\\\"avatar\\\" class=\\\"profile-avatar\\\")\\n          span(class=\\\"profile-name\\\" id=\\\"name\\\") Valeriy\\n          -->\\n          <button class=\\\"menu-tabs menu-incoming tab-active\\\" id=\\\"btn-tabs\\\" data-name-tab=\\\"incoming\\\">\\n            <div class=\\\"menu-tabs-img\\\">\\n              <svg class=\\\"menu-tabs-icon\\\">\\n                <use xlink:href=\\\"#incoming\\\"></use>\\n              </svg>\\n            </div><span>Входящие</span>\\n          </button>\\n          <button class=\\\"menu-tabs menu-favorites\\\" id=\\\"btn-tabs\\\" data-name-tab=\\\"favorites\\\">\\n            <div class=\\\"menu-tabs-img\\\">\\n              <svg class=\\\"menu-tabs-icon icon__favorite\\\">\\n                <use xlink:href=\\\"#favorites\\\"></use>\\n              </svg>\\n            </div><span>Избраное</span>\\n          </button>\\n          <button class=\\\"menu-tabs menu-fixed\\\" id=\\\"btn-tabs\\\" data-name-tab=\\\"fixed\\\">\\n            <div class=\\\"menu-tabs-img\\\">\\n              <svg class=\\\"menu-tabs-icon\\\">\\n                <use xlink:href=\\\"#fixed\\\"></use>\\n              </svg>\\n            </div><span>Закрепленое</span>\\n          </button>\\n          <!--button(class=\\\"menu-tabs menu-calendary\\\" id=\\\"btn-tabs\\\" data-name-tab=\\\"calendary\\\")\\n          .menu-tabs-img\\n              svg.menu-tabs-icon\\n                  use(xlink:href=\\\"#calendary\\\")\\n          span Календарь\\n          -->\\n        </menu>\\n        <div class=\\\"content-todo\\\">\\n          <div class=\\\"todo-list\\\" id=\\\"todoList\\\" data-name-list=\\\"incoming\\\"></div>\\n          <div class=\\\"todo-list\\\" id=\\\"todoList\\\" data-name-list=\\\"favorites\\\"></div>\\n          <div class=\\\"todo-list\\\" id=\\\"todoList\\\" data-name-list=\\\"fixed\\\"></div>\\n          <div class=\\\"todo-list\\\" id=\\\"todoList\\\" data-name-list=\\\"folder\\\"></div>\\n        </div>\\n      </section>\\n      <section class=\\\"popup\\\">\\n        <div class=\\\"popup-add-todo\\\">\\n          <div class=\\\"todo-add-body\\\"><span class=\\\"add-todo-title\\\">Добавить новую задачу</span></div>\\n          <div class=\\\"todo-add\\\">\\n            <input class=\\\"todo-add-input\\\" type=\\\"text\\\" id=\\\"todoValue\\\" name=\\\"text-todo\\\" placeholder=\\\"напр., Семейный обед в воскресенье\\\"/>\\n          </div>\\n          <button class=\\\"btn\\\" id=\\\"btnAddTask\\\">Добавить задачу</button><span style=\\\"display: none;\\\" id=\\\"showFolderList\\\">Выбрать папку</span>\\n          <div class=\\\"folder-list\\\"></div>\\n        </div>\\n        <div class=\\\"popup-edit-todo\\\">\\n          <div class=\\\"todo-edit\\\">\\n            <input class=\\\"todo-edit-input\\\" type=\\\"text\\\" id=\\\"editValue\\\" name=\\\"text-todo\\\"/>\\n          </div>\\n          <div class=\\\"popup-todo-btns\\\">\\n            <button class=\\\"btn\\\" id=\\\"btnSave\\\">Cохранить</button><span style=\\\"display: none;\\\" id=\\\"showFolderList\\\">Выбрать папку</span>\\n            <div class=\\\"folder-list\\\"></div>\\n            <div class=\\\"todo-btns\\\">\\n              <button class=\\\"todo-btn\\\" id=\\\"btnFixedEdit\\\">\\n                <svg class=\\\"todo-btn-icon icon-fixed\\\">\\n                  <use xlink:href=\\\"#fixed\\\"></use>\\n                </svg>\\n              </button>\\n              <button class=\\\"todo-btn\\\" id=\\\"btnFavoriteEdit\\\">\\n                <svg class=\\\"todo-btn-icon icon__favorite\\\">\\n                  <use xlink:href=\\\"#favorites\\\"></use>\\n                </svg>\\n              </button>\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\\"popup-add-folder\\\">\\n          <div class=\\\"folder-body\\\"><span class=\\\"folder-body-title\\\">Добавить новую папку</span></div>\\n          <div class=\\\"folder-add\\\">\\n            <input class=\\\"folder-add-input\\\" type=\\\"text\\\" id=\\\"nameFolder\\\" name=\\\"text-folder\\\" placeholder=\\\"напр., Мой проект\\\"/>\\n          </div>\\n          <button class=\\\"btn\\\" id=\\\"createFolder\\\">Добавить папку</button>\\n        </div>\\n      </section>\\n    </div>\\n    <script src=\\\"https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js\\\"></script>\\n    <script src=\\\"https://www.gstatic.com/firebasejs/8.1.1/firebase-auth.js\\\"></script>\\n    <script src=\\\"https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js\\\"></script>\\n  </body>\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://easy-todo/./src/index.html?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://easy-todo/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index */ \"./src/js/index.js\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\n\n\n//# sourceURL=webpack://easy-todo/./src/index.js?");

/***/ }),

/***/ "./src/js/components/buttons.js":
/*!**************************************!*\
  !*** ./src/js/components/buttons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handlerButtonPerfotmend\": () => (/* binding */ handlerButtonPerfotmend),\n/* harmony export */   \"onHandlersButtons\": () => (/* binding */ onHandlersButtons)\n/* harmony export */ });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./src/js/components/firebase.js\");\n\n\nconst handlerButtonDelete = (i) => {\n  const btnDelete = document.querySelector(`[data-btn-delete=\"${i}\"]`)\n  const todoItem = document.querySelector(`[data-task-block=\"${btnDelete.dataset.btnDelete}\"]`)\n\n  btnDelete.addEventListener('click', () => {\n    firebase.database()\n      .ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_0__.user.uid}/All/`)\n      .child(btnDelete.dataset.btnDelete)\n      .remove()\n\n    todoItem.remove()\n  })\n}\n\nconst handlerButtonMore = (i) => {\n  const btnDots = document.querySelector(`[data-btn-dots=\"${i}\"]`)\n  const tooltip = document.querySelector(`[data-tooltip=\"${btnDots.dataset.btnDots}\"]`)\n\n  btnDots.addEventListener('click', () => {\n    tooltip.style.transform = tooltip.style.transform === 'scaleX(1)' ? 'scaleX(0)' : 'scaleX(1)'\n  })\n}\n\nconst handlerButtonPerfotmend = () => {\n  const btnPerfotmend = document.querySelectorAll('.todo-btn-ok')\n\n  btnPerfotmend.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      let task = document.querySelector(\n        `[data-task-num=\"${btn.dataset.btnOk}\"]`\n      )\n\n      if (btn.checked) {\n        task.style.textDecoration = 'line-through'\n      } else {\n        task.style.textDecoration = 'none'\n      }\n\n      firebase\n        .database()\n        .ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_0__.user.uid}/All/${btn.dataset.btnOk}`)\n        .update({\n          performed: btn.checked,\n        })\n    })\n  })\n}\n\nconst handlerButtonFavorite = (i) => {\n  const btnFavorite = document.querySelector(`[data-btn-favorite=\"${i}\"]`)\n  btnFavorite.addEventListener('click', () => {\n    const index = btnFavorite.dataset.btnFavorite\n    btnFavorite.classList.toggle('todo-btn__active')\n\n    firebase\n      .database()\n      .ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_0__.user.uid}/All/${index}`)\n      .update({\n        favorites: btnFavorite.classList.contains('todo-btn__active'),\n      })\n  })\n}\n\nconst handlerButtonFixed = (i) => {\n  const btnFixed = document.querySelector(`[data-btn-fixed=\"${i}\"]`)\n  btnFixed.addEventListener('click', () => {\n    const index = btnFixed.dataset.btnFixed\n    btnFixed.classList.toggle('todo-btn__active')\n\n    firebase\n      .database()\n      .ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_0__.user.uid}/All/${index}`)\n      .update({\n        fixed: btnFixed.classList.contains('todo-btn__active'),\n      })\n  })\n}\n\nconst onHandlersButtons = (id) => {\n  handlerButtonDelete(id)\n  handlerButtonFavorite(id)\n  handlerButtonFixed(id)\n  handlerButtonMore(id)\n}\n\n\n//# sourceURL=webpack://easy-todo/./src/js/components/buttons.js?");

/***/ }),

/***/ "./src/js/components/create-todos-with-db.js":
/*!***************************************************!*\
  !*** ./src/js/components/create-todos-with-db.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoListWithDB\": () => (/* binding */ createTodoListWithDB)\n/* harmony export */ });\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ \"./src/js/components/todo-item.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ \"./src/js/components/buttons.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ \"./src/js/components/popup.js\");\n\n\n\n\n\nconst testSelector = (obj) => {\n  document.querySelector(`[data-btn-ok=\"${obj['id']}\"]`).checked =\n    obj['performed']\n\n  if (obj['performed']) {\n    document.querySelector(\n      `[data-task-block=\"${obj['id']}\"]`\n    ).style.textDecoration = 'line-through'\n  }\n\n  if (obj['fixed']) {\n    document\n      .querySelector(`[data-btn-fixed=\"${obj['id']}\"]`)\n      .classList.add('todo-btn__active')\n  }\n\n  if (obj['favorites']) {\n    document\n      .querySelector(`[data-btn-favorite=\"${obj['id']}\"]`)\n      .classList.add('todo-btn__active')\n  }\n}\n\nconst createTodoListWithDB = (object) => {\n  for (let i in object) {\n    ;(0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.addTodoItem)(object[i]['value'], object[i]['id'])\n\n    ;(0,_buttons__WEBPACK_IMPORTED_MODULE_1__.onHandlersButtons)(object[i]['id'])\n    testSelector(object[i])\n  }\n\n  (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.handlerButtonPerfotmend)()\n  ;(0,_popup__WEBPACK_IMPORTED_MODULE_2__.openPopUpEdit)()\n}\n\n\n//# sourceURL=webpack://easy-todo/./src/js/components/create-todos-with-db.js?");

/***/ }),

/***/ "./src/js/components/edit-tast.js":
/*!****************************************!*\
  !*** ./src/js/components/edit-tast.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editTask\": () => (/* binding */ editTask)\n/* harmony export */ });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./src/js/components/firebase.js\");\n\n\nconst editTask = (event) => {\n  const edit = document.querySelector('#editValue')\n  const popUpEdit = document.querySelector('.popup-edit-todo')\n  const popUp = document.querySelector('.popup')\n\n  if ((event.code === 'Enter' || event.type === 'click') && edit.value != '' && edit.value.trim()) {\n    const task = document.querySelector(`[data-task-num=\"${edit.dataset.taskEdit}\"]`)\n    task.textContent = edit.value\n\n    firebase\n      .database()\n      .ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_0__.user.uid}/All/${edit.dataset.taskEdit}`)\n      .update({\n        value: edit.value,\n      })\n\n    popUp.style.display = 'none'\n    popUpEdit.style.bottom = '-700px'\n  }\n}\n\n\n//# sourceURL=webpack://easy-todo/./src/js/components/edit-tast.js?");

/***/ }),

/***/ "./src/js/components/firebase.js":
/*!***************************************!*\
  !*** ./src/js/components/firebase.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"user\": () => (/* binding */ user),\n/* harmony export */   \"obj\": () => (/* binding */ obj),\n/* harmony export */   \"googleSignin\": () => (/* binding */ googleSignin),\n/* harmony export */   \"googleSignout\": () => (/* binding */ googleSignout)\n/* harmony export */ });\n/* harmony import */ var _initial_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-db */ \"./src/js/components/initial-db.js\");\n\n\nconst singIn = document.querySelector('.singin')\nconst header = document.querySelector('.header')\nconst content = document.querySelector('.content')\n\n// const avatar = document.querySelector('#avatar')\n// const nameUser = document.querySelector('#name')\nlet user\nlet obj = {}\n\nvar firebaseConfig = {\n  apiKey: 'AIzaSyCQp4B5XmxiRcOH5xnPbRNN-EvgGgYt30o',\n  authDomain: 'food-f53db.firebaseapp.com',\n  databaseURL: 'https://food-f53db.firebaseio.com',\n  projectId: 'food-f53db',\n  storageBucket: 'food-f53db.appspot.com',\n  messagingSenderId: '662890986544',\n  appId: '1:662890986544:web:2156f9f8ed044df3f581f5',\n}\n// Initialize Firebase\nfirebase.initializeApp(firebaseConfig)\nvar provider = new firebase.auth.GoogleAuthProvider()\n\nfirebase.auth().onAuthStateChanged(function (users) {\n  if (users) {\n    // User is signed in.\n    console.log('User is signed in.')\n    user = firebase.auth().currentUser\n    console.log(user)\n\n    // avatar.style.backgroundImage = `url(${user.photoURL})`\n    // nameUser.textContent = user.displayName\n\n    singIn.style.display = 'none'\n    header.style.display = 'flex'\n    content.style.display = 'flex'\n\n    if (user != undefined) {\n      (0,_initial_db__WEBPACK_IMPORTED_MODULE_0__.getTodosWithDB)(obj)\n    }\n    //getFolders();\n  } else {\n    // No user is signed in.\n    console.log('No user is signed in.')\n    document.querySelector('.singin').style.display = 'flex'\n  }\n})\n\nfunction googleSignin() {\n  firebase\n    .auth()\n    .signInWithPopup(provider)\n    .then((result) => {\n      var token = result.credential.accessToken\n      user = result.user\n      user.photoURL\n\n      avatar.style.backgroundImage = `url(${user.photoURL})`\n\n      document.querySelector('.singin').style.display = 'none'\n      document.querySelector('.header').style.display = 'flex'\n      document.querySelector('.content').style.display = 'flex'\n    })\n    .catch((error) => {\n      var errorCode = error.code\n      var errorMessage = error.message\n\n      console.log(error.code)\n      console.log(error.message)\n    })\n}\n\nfunction googleSignout() {\n  firebase\n    .auth()\n    .signOut()\n    .then(() => {\n        console.log('Signout Succesfull')\n      },\n      (error) => {\n        console.log('Signout Failed')\n      }\n    )\n}\n\n\n//# sourceURL=webpack://easy-todo/./src/js/components/firebase.js?");

/***/ }),

/***/ "./src/js/components/initial-db.js":
/*!*****************************************!*\
  !*** ./src/js/components/initial-db.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodosWithDB\": () => (/* binding */ getTodosWithDB)\n/* harmony export */ });\n/* harmony import */ var _create_todos_with_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todos-with-db */ \"./src/js/components/create-todos-with-db.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ \"./src/js/components/firebase.js\");\n\n\n\nconst getTodosWithDB = (data) => {\n  const ref = firebase.database().ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_1__.user.uid}/All/`)\n\n  ref.once('value', (snapshot) => {\n      if (data == null) return\n      data = snapshot.val()\n      ;(0,_create_todos_with_db__WEBPACK_IMPORTED_MODULE_0__.createTodoListWithDB)(data)\n    }, (error) => {\n      console.log('Error: ' + error.code)\n    }\n  )\n}\n\n\n//# sourceURL=webpack://easy-todo/./src/js/components/initial-db.js?");

/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openPopUpEdit\": () => (/* binding */ openPopUpEdit)\n/* harmony export */ });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./src/js/components/firebase.js\");\n\n\nconst openPopUpEdit = () => {\n  const popUp = document.querySelector('.popup')\n  const task = document.querySelectorAll('.todo-block-task')\n\n  let index\n\n  task.forEach((item, i) => {\n    item.addEventListener('click', (e) => {\n      if (e.target === item) {\n        popUp.style.display = 'block'\n        index = item.dataset.taskBlock\n\n        editValue.setAttribute('data-task-edit', index)\n        editValue.value = document.querySelectorAll('.todo-task')[i].textContent\n\n        if (\n          document\n            .querySelector(`[data-btn-favorite=\"${index}\"]`)\n            .classList.contains('todo-btn__active')\n        ) {\n          document\n            .querySelector('#btnFavoriteEdit')\n            .classList.add('todo-btn__active')\n          console.log(index)\n        }\n        if (\n          document\n            .querySelector(`[data-btn-fixed=\"${index}\"]`)\n            .classList.contains('todo-btn__active')\n        ) {\n          document\n            .querySelector('#btnFixedEdit')\n            .classList.add('todo-btn__active')\n          console.log(index)\n        }\n\n        setTimeout(\n          () =>\n            (document.querySelector('.popup-edit-todo').style.bottom =\n              'calc(100% - 261px)'),\n          200\n        )\n      }\n    })\n  })\n\n  document.querySelector('#btnFavoriteEdit').addEventListener('click', (e) => {\n    document\n      .querySelector('#btnFavoriteEdit')\n      .classList.toggle('todo-btn__active')\n    console.log(index)\n    document\n      .querySelector(`[data-btn-favorite=\"${index}\"]`)\n      .classList.toggle('todo-btn__active')\n    firebase\n      .database()\n      .ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_0__.user.uid}/All/${index}`)\n      .update({\n        favorites: document\n          .querySelector(`[data-btn-favorite=\"${index}\"]`)\n          .classList.contains('todo-btn__active'),\n      })\n  })\n  document.querySelector('#btnFixedEdit').addEventListener('click', (e) => {\n    document.querySelector('#btnFixedEdit').classList.toggle('todo-btn__active')\n    console.log(index)\n    document\n      .querySelector(`[data-btn-fixed=\"${index}\"]`)\n      .classList.toggle('todo-btn__active')\n    firebase\n      .database()\n      .ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_0__.user.uid}/All/${index}`)\n      .update({\n        fixed: document\n          .querySelector(`[data-btn-fixed=\"${index}\"]`)\n          .classList.contains('todo-btn__active'),\n      })\n  })\n}\n\n\n//# sourceURL=webpack://easy-todo/./src/js/components/popup.js?");

/***/ }),

/***/ "./src/js/components/set-database.js":
/*!*******************************************!*\
  !*** ./src/js/components/set-database.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDataBase\": () => (/* binding */ setDataBase)\n/* harmony export */ });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./src/js/components/firebase.js\");\n\n\nconst setDataBase = (value, index) => {\n  firebase.database().ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_0__.user.uid}/All/`).child(index).update({\n    id: index,\n    value: value,\n    performed: false,\n    favorites: false,\n    fixed: false,\n  })\n}\n\n\n//# sourceURL=webpack://easy-todo/./src/js/components/set-database.js?");

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideTaskList\": () => (/* binding */ hideTaskList),\n/* harmony export */   \"updateListInTab\": () => (/* binding */ updateListInTab)\n/* harmony export */ });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./src/js/components/firebase.js\");\n\n;\n\n\nconst hideTaskList = (index) => {\n  for (let i = 0; i < todoList.length; i++) {\n    if (index === i) {\n      todoList[i].style.display = 'block'\n    } else {\n      todoList[i].style.display = 'none'\n    }\n  }\n}\n\nconst updateListInTab = (tab) => {\n\n  const list = document.querySelector(`[data-name-list=\"${tab}\"]`)\n  console.log(list)\n  let ref2 = firebase.database().ref(`Todo/${_firebase__WEBPACK_IMPORTED_MODULE_0__.user.uid}/All/`)\n\n  ref2.once('value', (snapshot) => {\n      // if (obj == null) return\n      let obj = snapshot.val()\n\n      if (tab === 'incoming') {\n        for (let i in obj) {\n          list.prepend(\n            document.querySelector(`[data-task-block=\"${obj[i]['id']}\"]`)\n          )\n        }\n      }\n\n      for (let i in obj) {\n        if (obj[i][tab]) {\n\n          list.prepend(\n            document.querySelector(`[data-task-block=\"${obj[i]['id']}\"]`)\n          )\n        }\n      }\n    },\n    (error) => {\n      console.log('Error: ' + error.code)\n    }\n  )\n}\n\n\n//# sourceURL=webpack://easy-todo/./src/js/components/tabs.js?");

/***/ }),

/***/ "./src/js/components/todo-item.js":
/*!****************************************!*\
  !*** ./src/js/components/todo-item.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoItem\": () => (/* binding */ addTodoItem)\n/* harmony export */ });\n/* harmony import */ var _set_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-database */ \"./src/js/components/set-database.js\");\n\n\n;\n\nconst addTodoItem = (todoText, id = 0, newTodo = false) => {\n  const todoList = document.querySelector('#todoList')\n\n  const todoItem = document.createElement('div')\n  id = id !== 0 ? id : Date.now()\n\n  todoItem.classList.add('todo-block-task')\n  todoItem.setAttribute('data-task-block', id)\n\n  todoItem.innerHTML = `\n         <input type=\"checkbox\" data-btn-ok=${id} id=${id} class=\"todo-btn-ok\">\n         <label for=${id}></label>\n         <span class=\"todo-task\" data-task-num=\"${id}\">${todoText}</span>\n         <div class=\"todo-btns\">\n            <button class=\"todo-btn\" data-btn-edit=\"${id}\" id=\"btnEdit\">\n                <i class=\"todo-btn-icon icon-edit uil uil-edit\"></i>\n            </button>\n            <button class=\"todo-btn btn-dots\" id=\"btnDots\" data-btn-dots=${id}>\n                <i class=\"todo-btn-icon uil uil-elipsis-double-v-alt\"></i>\n            </button>\n            \n            <div class=\"todo-btns-tooltip\" data-tooltip=\"${id}\">\n                <button class=\"todo-btn\" data-btn-fixed=\"${id}\" id=\"btnFixed\">\n                    <i class=\"todo-btn-icon icon-fixed uil uil-arrow-circle-up\"></i>\n                </button>\n                <button class=\"todo-btn\" data-btn-favorite=\"${id}\" id=\"btnFavorite\">\n                    <i class=\"todo-btn-icon icon__favorite uil uil-heart-alt\"></i>\n                </button>\n                <button class=\"todo-btn btn-delete\" id=\"btnDelete\" data-btn-delete=${id}>\n                    <i class=\"todo-btn-icon uil uil-times-circle\"></i>\n                </button>\n            </div>\n        </div>\n    `\n\n  todoList.prepend(todoItem)\n  newTodo && (0,_set_database__WEBPACK_IMPORTED_MODULE_0__.setDataBase)(todoText, id)\n}\n\n\n//# sourceURL=webpack://easy-todo/./src/js/components/todo-item.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/firebase */ \"./src/js/components/firebase.js\");\n/* harmony import */ var _components_todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo-item */ \"./src/js/components/todo-item.js\");\n/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs */ \"./src/js/components/tabs.js\");\n/* harmony import */ var _components_edit_tast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit-tast */ \"./src/js/components/edit-tast.js\");\n\n\n;\n\n\n\n\n\n\n// const btnAddFolder = document.querySelector('#btnAddFolder')\n// const btnCreateFolder = document.querySelector('#createFolder')\nconst btnAddTask = document.querySelector('#btnAddTask')\nconst btnSave = document.querySelector('#btnSave')\n// const folderBlock = document.querySelector('.folder-block')\n// const folderList = document.querySelectorAll('.folder-list')\nconst taskContent = document.querySelector('#todoValue')\nconst $tabs = document.querySelectorAll('#btn-tabs')\nconst todoList = document.querySelector('#todoList')\nconst addTodo = document.querySelector('#addTodo')\nconst popUp = document.querySelector('.popup')\n\nconst menu = document.querySelector('#menu')\n\nmenu.addEventListener('click', () => {\n  if (menu.checked) {\n\n    if (window.innerWidth > 768) {\n      document.querySelector('.content-todo').style.width = '100%'\n    }\n\n    document.querySelector('.content-menu').style.left = '-320px'\n    document.querySelector('.content-menu').style.width = '0px'\n  } else {\n\n    if (window.innerWidth > 768) {\n      document.querySelector('.content-todo').style.width = '100%'\n    }\n\n    document.querySelector('.content-menu').style.left = '0px'\n    document.querySelector('.content-menu').style.width = '320px'\n  }\n})\n\nconst singinBtn = document.querySelector('.singin-btn')\nconst exitBtn = document.querySelector('.header-exit')\n\nsinginBtn.addEventListener('click', _components_firebase__WEBPACK_IMPORTED_MODULE_0__.googleSignin)\n\nexitBtn.addEventListener('click', () => {\n  todoList.innerHTML = ''\n  ;(0,_components_firebase__WEBPACK_IMPORTED_MODULE_0__.googleSignout)()\n})\n\n// function setDataBase(value, index) {\n//   console.log(user.uid)\n//\n//   firebase.database().ref(`Todo/${user.uid}/All/`).child(index).update({\n//     id: index,\n//     value: value,\n//     performed: false,\n//     favorites: false,\n//     fixed: false,\n//   })\n// }\n\n// function getFolders() {\n//   const ref = firebase.database().ref(`Todo/${user.uid}/Folder/`)\n//   let folders = {}\n//   ref.once(\n//     'value',\n//     function (snapshot) {\n//       folders = snapshot.val()\n\n//       for (const folderName in folders) {\n//         folderBlock.insertAdjacentHTML(\n//           'afterbegin',\n//           `<span class='folder-name'>${folderName}</span>`\n//         )\n//         folderList.forEach((list) => {\n//           list.insertAdjacentHTML(\n//             'afterbegin',\n//             `<span class='folder-name'>${folderName}</span>`\n//           )\n//         })\n//       }\n\n//       document.querySelectorAll('.folder-name').forEach(item => {\n//         item.addEventListener('click', () => {\n//           document.querySelectorAll('#showFolderList').forEach(btn => {\n//             btn.textContent = item.textContent;\n//           })\n//         })\n//       })\n//     },\n//     function (error) {\n//       console.log('Error: ' + error.code)\n//     }\n//   )\n// }\n\n// function addTastInFolder(index) {\n//   document.querySelectorAll('.folder-name').forEach((item) => {\n//     item.addEventListener('click', () => {\n//       document.querySelectorAll('#showFolderList').forEach((btn) => {\n//         btn.textContent = item.textContent\n\n//         firebase\n//           .database()\n//           .ref(`Todo/${user.uid}/Folder/`)\n//           .child(item.textContent)\n//           .update({\n//             id: index,\n//           })\n//       })\n//     })\n//   })\n// }\n\n\ndocument.addEventListener('keypress', (event) => {\n  if (\n    event.code === 'Enter' &&\n    taskContent.value != '' &&\n    taskContent.value.trim()\n  ) {\n    (0,_components_todo_item__WEBPACK_IMPORTED_MODULE_1__.addTodoItem)(taskContent.value)\n    taskContent.value = ''\n    popUp.style.display = 'none'\n    document.querySelector('.popup-add-todo').style.top = '-700px'\n  }\n})\n\nbtnAddTask.addEventListener('click', (event) => {\n  if (taskContent.value != '' && taskContent.value.trim()) {\n    (0,_components_todo_item__WEBPACK_IMPORTED_MODULE_1__.addTodoItem)(taskContent.value, 0, true)\n    taskContent.value = ''\n    popUp.style.display = 'none'\n    document.querySelector('.popup-add-todo').style.top = '-700px'\n  }\n})\n\naddTodo.addEventListener('click', () => {\n  popUp.style.display = 'block'\n  setTimeout(\n    () => (document.querySelector('.popup-add-todo').style.top = '71px'),\n    10\n  )\n})\n\n\n// editValue.addEventListener('keypress', (event) => editTask(event))\n\nbtnSave.addEventListener('click', (event) => (0,_components_edit_tast__WEBPACK_IMPORTED_MODULE_3__.editTask)(event))\n\n\n// btnAddFolder.addEventListener('click', () => {\n//   popUp.style.display = 'block';\n//   setTimeout(\n//     () => (document.querySelector('.popup-add-folder').style.top = '71px'),\n//     10\n//   );\n// });\n\n// btnCreateFolder.addEventListener('click', (event) => createFolder(event));\n\npopUp.addEventListener('click', (e) => {\n  if (e.target === popUp) {\n    popUp.style.display = 'none'\n    document\n      .querySelector('#btnFavoriteEdit')\n      .classList.remove('todo-btn__active')\n    document.querySelector('#btnFixedEdit').classList.remove('todo-btn__active')\n    document.querySelector('.popup-add-todo').style.top = '-700px'\n    //document.querySelector('.popup-add-folder').style.top = '-700px';\n    document.querySelector('.popup-edit-todo').style.bottom = '-700px'\n  }\n})\n\n\n$tabs.forEach((tab, index) => {\n\n  tab.addEventListener('click', () => {\n    for (let i = 0; i < $tabs.length; i++) {\n      $tabs[i].classList.remove('tab-active')\n    }\n\n    tab.classList.add('tab-active')\n\n    ;(0,_components_tabs__WEBPACK_IMPORTED_MODULE_2__.hideTaskList)(index, todoList)\n    ;(0,_components_tabs__WEBPACK_IMPORTED_MODULE_2__.updateListInTab)(tab.dataset.nameTab)\n  })\n})\n\n\n\n//# sourceURL=webpack://easy-todo/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;