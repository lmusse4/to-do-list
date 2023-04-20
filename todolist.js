// Create a to-do list and it must accomplish the following things:

// function to add a new to-do
function addTodo() {
    let todoInput = document.getElementById("new-todo");
    let todoText = todoInput.value;
    let todoList = document.getElementById("todo-list");
    let newTodo = document.createElement("li");
    let newTodoText = document.createTextNode(todoText);

    newTodo.appendChild(newTodoText);
    todoList.appendChild(newTodo);

    // clear input field
    todoInput.value = "";

    // remove to-do when clicked
    newTodo.onclick = function() {
        this.parentNode.removeChild(this);
    }
}

