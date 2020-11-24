'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var taskContent = document.querySelector('#todoValue');
  var Tabs = document.querySelectorAll('#btn-tabs');
  var listTask = document.querySelectorAll('#todoList');
  var objTest = {};
  var btnPerfotmend, btnDelete, btnFixed, btnFavorite;
  /* const getAllButtons = () => {
      btnPerfotmend = document.querySelectorAll('#todoBtnOk'),
      btnDelete = document.querySelectorAll('#btnDelete'),
      btnFixed = document.querySelectorAll('#btnFixed'),
      btnFavorite = document.querySelectorAll('#btnFavorite');
  }; */

  var hamdlerButtonDelete = function hamdlerButtonDelete() {
    btnDelete = document.querySelectorAll('#btnDelete');
    btnDelete.forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        if (event.target == btn || event.target == btn.children) {
          document.querySelector("[data-task-block=\"".concat(btn.dataset.btnDelete, "\"]")).remove();
        }
      });
    });
  };

  var handlerButtonPerfotmend = function handlerButtonPerfotmend() {
    btnPerfotmend = document.querySelectorAll('.todo-btn-ok');
    btnPerfotmend.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.checked) {
          console.log(btn.checked);
          document.querySelector("[data-task-num=\"".concat(btn.dataset.btnOk, "\"]")).style.textDecoration = 'line-through';
        } else {
          console.log(btn.checked);
          document.querySelector("[data-task-num=\"".concat(btn.dataset.btnOk, "\"]")).style.textDecoration = 'none';
        }
      });
    });
  };

  var handlerButtonFavorite = function handlerButtonFavorite() {
    btnFavorite = document.querySelectorAll('#btnFavorite');
    btnFavorite.forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        if (event.target == btn || event.target == btn.children) {
          var i = btn.dataset.btnFavorite; //putInTub('favorites', i);

          objTest[i] = {
            'id': i,
            'favorites': true
          };
          console.log(objTest);
        }
      });
    });
  };

  var handlerButtonFixed = function handlerButtonFixed() {
    btnFixed = document.querySelectorAll('#btnFavorite');
    btnFixed.forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        if (event.target == btn || event.target == btn.children) {
          console.log('done');
        }
      });
    });
  };

  var putInTub = function putInTub(nameTab, index) {
    var tab = document.querySelector("[data-name-list=\"".concat(nameTab, "\"]")),
        copyTask = document.querySelector("[data-task-block=\"".concat(index, "\"]")).cloneNode(true);
    tab.prepend(copyTask);
    handlerButtonPerfotmend();
    handlerButtonFixed();
    handlerButtonFavorite();
    hamdlerButtonDelete();
    /* let task = document.createElement('div');
    let taskText = 'test';
     task.classList.add('todo-block-task');
    task.setAttribute('data-task-block', index);
    task.innerHTML = `
        <input type="checkbox" data-btn-ok=${index} id=${index} class="todo-btn-ok"></input>
        <label for=${index}></label>
        <span class="todo-task" data-task-num="${index}">${taskText}</span>
        <div class="todo-btns">
            <button class="todo-btn todo-btn__active" data-btn-fixed="${index}" id="btnFixed">
                <svg class="todo-btn-icon icon-fixed">
                    <use xlink:href="#fixed"></use>
                </svg>
            </button>
            <button class="todo-btn" data-btn-favorite="${index}" id="btnFavorite">
                <svg class="todo-btn-icon">
                    <use xlink:href="#favorites"></use>
                </svg>
            </button>
            <button class="todo-btn btn-delete" id="btnDelete" data-btn-delete=${i}>
            </button>
        </div>
    `;
    tab.append(task); */
  };

  var addTask = function addTask(taskText) {
    var taskList = document.querySelector('#todoList');
    var task = document.createElement('div'),
        i = Date.now();
    task.classList.add('todo-block-task');
    task.setAttribute('data-task-block', i);
    task.innerHTML = "\n            <input type=\"checkbox\" data-btn-ok=".concat(i, " id=").concat(i, " class=\"todo-btn-ok\"></input>\n            <label for=").concat(i, "></label>\n            <span class=\"todo-task\" data-task-num=\"").concat(i, "\">").concat(taskText, "</span>\n            <div class=\"todo-btns\">\n                <button class=\"todo-btn todo-btn__active\" data-btn-fixed=\"").concat(i, "\" id=\"btnFixed\">\n                    <svg class=\"todo-btn-icon icon-fixed\">\n                        <use xlink:href=\"#fixed\"></use>\n                    </svg>\n                </button>\n                <button class=\"todo-btn\" data-btn-favorite=\"").concat(i, "\" id=\"btnFavorite\">\n                    <svg class=\"todo-btn-icon\">\n                        <use xlink:href=\"#favorites\"></use>\n                    </svg>\n                </button>\n                <button class=\"todo-btn btn-delete\" id=\"btnDelete\" data-btn-delete=").concat(i, ">\n                </button>\n            </div>\n        ");
    taskList.prepend(task);
    handlerButtonPerfotmend();
    handlerButtonFixed();
    handlerButtonFavorite();
    hamdlerButtonDelete();
  };

  document.addEventListener('keypress', function (event) {
    if (event.code === 'Enter' && taskContent.value != '' && taskContent.value.trim()) {
      addTask(taskContent.value);
      taskContent.value = '';
    }
  });

  var hideTaskList = function hideTaskList(index) {
    for (var i = 0; i < listTask.length; i++) {
      if (index === i) {
        listTask[i].style.display = 'block';
      } else {
        listTask[i].style.display = 'none';
      }
    }
  };

  var ddd = function ddd(tab) {
    var list = document.querySelector("[data-name-list=\"".concat(tab, "\"]"));

    for (var i in objTest) {
      if (objTest[i].hasOwnProperty(tab)) {
        console.log('done');
        console.log(document.querySelector("[data-task-block=\"".concat(objTest[i]['id'], "\"]")));
        list.prepend(document.querySelector("[data-task-block=\"".concat(objTest[i]['id'], "\"]")));
      }
    }
  };

  Tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      for (var i = 0; i < Tabs.length; i++) {
        Tabs[i].classList.remove('tab-active');
      }

      tab.classList.add('tab-active');
      hideTaskList(index);
      console.log(tab.dataset.nameTab);
      ddd(tab.dataset.nameTab);
    });
  });
});