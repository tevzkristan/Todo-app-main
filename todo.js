const todoList = document.getElementById("todo-list");
const addTodo = document.getElementById("add-todo");
const input = document.getElementById("input");
const todoCount = document.getElementById("todo-count");
const showAllBtn = document.getElementById("all");
const showActiveBtn = document.getElementById("active");
const showCompletedBtn = document.getElementById("completed");

// Function to update the todo count
function updateTodoCount() {
  const todos = document.getElementsByClassName("todo");
  let todosNotCrossed = 0;

  for (let i = 0; i < todos.length; i++) {
    const todoContent = todos[i].querySelector(".todo-content");
    if (!todoContent.classList.contains("todo-content-crossed")) {
      todosNotCrossed++;
    }
  }

  todoCount.innerHTML = `${todosNotCrossed} todo${
    todosNotCrossed !== 1 ? "s" : ""
  } left`;
}

updateTodoCount();

// Add a new todo
addTodo.addEventListener("click", function () {
  const todoText = input.value.trim();

  if (todoText) {
    const todo = document.createElement("div");
    todo.classList.add("todo", "active");
    todo.innerHTML = `
      <button type='button' onclick='crossTodo(${todoList.children.length})' class="btn-todo">
        <img class="todo-done button-image" src="./images/icon-check.svg" alt="">
      </button>
      <p class="todo-content">${todoText}</p>
      <img src="./images/icon-cross.svg" class="todo-cross" alt="" onclick='deleteTodo(this)'>
    `;

    todoList.appendChild(todo);
    input.value = "";
  }

  updateTodoCount();
});

// Cross todo text
function crossTodo(index) {
  const todo = document.getElementsByClassName("todo")[index];
  const todoContent = todo.querySelector(".todo-content");
  const buttonImage = todo.querySelector(".button-image");
  const button = todo.querySelector(".btn-todo");

  todoContent.classList.toggle("todo-content-crossed");
  buttonImage.classList.toggle("todo-done-active");
  button.classList.toggle("btn-todo-active");

  updateTodoCount(); // Call the function to update the todo count
}

// Delete todo
function deleteTodo(imageElement) {
  const todo = imageElement.parentNode;
  todoList.removeChild(todo);

  updateTodoCount(); // Call the function to update the todo count
}

// Clear completed

function clearCompleted() {
  const todos = document.getElementsByClassName("todo");
  const crossedTodos = [];

  // Find crossed todos
  for (let i = 0; i < todos.length; i++) {
    const todoContent = todos[i].querySelector(".todo-content");
    if (todoContent.classList.contains("todo-content-crossed")) {
      crossedTodos.push(todos[i]);
    }
  }

  // Delete crossed todos
  for (let i = 0; i < crossedTodos.length; i++) {
    todoList.removeChild(crossedTodos[i]);
  }

  updateTodoCount(); // Update the todo count after deletion
}

// Event listener for the "All" button
showAllBtn.addEventListener("click", function showAll() {
  const todos = document.getElementsByClassName("todo");
  for (let i = 0; i < todos.length; i++) {
    todos[i].style.display = "flex";
  }
  showCompleted();
  showActive();
});

// Event listener for the "Active" button

showActiveBtn.addEventListener("click", function showActive() {
  const todos = document.getElementsByClassName("todo");

  for (let i = 0; i < todos.length; i++) {
    const todoContent = todos[i].querySelector(".todo-content");
    if (todoContent.classList.contains("todo-content-crossed")) {
      todos[i].style.display = "none";
    }
    if (!todoContent.classList.contains("todo-content-crossed")) {
      todos[i].style.display = "flex";
    }
  }
  showAll();
  showCompleted();
});

showCompletedBtn.addEventListener("click", function showCompleted() {
  const todos = document.getElementsByClassName("todo");

  for (let i = 0; i < todos.length; i++) {
    const todoContent = todos[i].querySelector(".todo-content");
    if (!todoContent.classList.contains("todo-content-crossed")) {
      todos[i].style.display = "none";
    }
    if (todoContent.classList.contains("todo-content-crossed")) {
      todos[i].style.display = "flex";
    }
  }
  showActive();
  showAll();
});
