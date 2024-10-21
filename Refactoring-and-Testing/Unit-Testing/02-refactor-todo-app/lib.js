export function readTodosFromLocalStorage() {
  const todosFromStorage = localStorage.getItem("todos");
  return todosFromStorage ? JSON.parse(todosFromStorage) : [];
}

export function saveTodosToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function isDuplicate(todo, todos) {
  return todos.some(
    (currentTodo) => currentTodo.todo.toLowerCase() === todo.toLowerCase()
  );
}

export function filterTodos(todos, filterValue) {
  return todos.filter((todo) => {
    if (filterValue === "all") return true;
    if (filterValue === "done") return todo.done;
    return !todo.done;
  });
}

export function addNewTodo(todos, newTodoText) {
  return [...todos, { todo: newTodoText, done: false }];
}

export function deleteDoneTodos(todos) {
  return todos.filter((todo) => !todo.done);
}
