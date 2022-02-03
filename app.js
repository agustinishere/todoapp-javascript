//Selectors
const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const filterOption = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo);
filterOption.addEventListener("click", filterTodos);
window.addEventListener("DOMContentLoaded", getTodos);

//Functions
function addTodo(e) {
  e.preventDefault();
  const todo = todoInput.value;

  //create div
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  //create li
  const newLi = document.createElement("li");
  newLi.innerText = todo;
  saveLocalTodos(todo);
  todoInput.value = "";
  //append li
  newDiv.appendChild(newLi);
  newLi.classList.add("todo-item");
  //add buttons
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  newDiv.appendChild(completeBtn);
  completeBtn.innerHTML = "<i class='fas fa-check'></i>";
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
  trashBtn.classList.add("trash-btn");
  newDiv.appendChild(completeBtn);
  newDiv.appendChild(trashBtn);
  //appenb newDiv
  todoList.appendChild(newDiv);
}

function removeTodo(e) {
  const item = e.target;
  const todo = item.parentElement;
  if (item.classList.contains("complete-btn")) {
    todo.classList.toggle("completed");
  }
  if (item.classList.contains("trash-btn")) {
    todo.classList.add("fall");
    removeLocalTodos(todo);
    addEventListener("transitionend", function () {
      todo.remove();
    });
  }
}

function filterTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.splice(todos.indexOf(todo.innerText), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //create div
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    //create li
    const newLi = document.createElement("li");
    newLi.innerText = todo;
    //append li
    newDiv.appendChild(newLi);
    newLi.classList.add("todo-item");
    //add buttons
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    newDiv.appendChild(completeBtn);
    completeBtn.innerHTML = "<i class='fas fa-check'></i>";
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
    trashBtn.classList.add("trash-btn");
    newDiv.appendChild(completeBtn);
    newDiv.appendChild(trashBtn);
    //appenb newDiv
    todoList.appendChild(newDiv);
  });
}
