import {
  readTodosFromLocalStorage,
  saveTodosToLocalStorage,
  isDuplicate,
  addNewTodo,
  deleteDoneTodos,
  filterTodos,
} from "./lib.js";

let todos = readTodosFromLocalStorage();
const deleteTodosButton = document.querySelector("#delete-todos");
const addTodoBtn = document.querySelector("#add-todo");
const todoListEl = document.querySelector("#todo-list");
const todoFilterEl = document.querySelector("#todo-filter");

function renderTodos(todos) {
  todoListEl.innerHTML = "";
  todos.forEach((currentTodo) => {
    const newTodoLiEl = document.createElement("li");
    const todoCheckboxEl = document.createElement("input");
    todoCheckboxEl.setAttribute("type", "checkbox");
    todoCheckboxEl.checked = currentTodo.done;
    newTodoLiEl.appendChild(todoCheckboxEl);
    const textNode = document.createTextNode(currentTodo.todo);
    newTodoLiEl.append(textNode);
    newTodoLiEl.todo = currentTodo;
    newTodoLiEl.classList.toggle("done", currentTodo.done);
    todoListEl.appendChild(newTodoLiEl);
  });
}

function updateTodoList() {
  const filterValue = document.querySelector(
    '#todo-filter input[type="radio"]:checked'
  ).value;
  const filteredTodos = filterTodos(todos, filterValue);
  renderTodos(filteredTodos);
}

addTodoBtn.addEventListener("click", () => {
  const newTodoEl = document.querySelector("#new-todo");
  const newTodoText = newTodoEl.value.trim();
  if (newTodoText.length > 0 && !isDuplicate(newTodoText, todos)) {
    todos = addNewTodo(todos, newTodoText);
    saveTodosToLocalStorage(todos);
    updateTodoList();
    newTodoEl.value = "";
  }
});

deleteTodosButton.addEventListener("click", () => {
  todos = deleteDoneTodos(todos);
  saveTodosToLocalStorage(todos);
  updateTodoList();
});

todoFilterEl.addEventListener("change", updateTodoList);

todoListEl.addEventListener("change", (event) => {
  const checkbox = event.target;
  checkbox.parentElement.todo.done = checkbox.checked;
  saveTodosToLocalStorage(todos);
  updateTodoList();
});

updateTodoList();
