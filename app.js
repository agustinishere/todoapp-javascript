//Selectors
const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const filterOption = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

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
