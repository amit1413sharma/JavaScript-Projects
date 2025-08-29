// Get tasks from localStorage
function get_todos() {
  let todos = [];
  const todos_str = localStorage.getItem('todo');
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

// Add new task to the list
function add() {
  const task = document.getElementById('task').value.trim();
  if (task === "") return false; // Prevent empty entries

  const todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));
  document.getElementById('task').value = "";
  show();
  return false;
}

// Remove task by index
function remove() {
  const id = this.getAttribute('id');
  const todos = get_todos();
  todos.splice(id, 1); // Remove task at that index
  localStorage.setItem('todo', JSON.stringify(todos));
  show();
}

// Display all tasks
function show() {
  const todos = get_todos();
  let html = '<ul>';

  for (let i = 0; i < todos.length; i++) {
    html += `<li>${todos[i]} <button class="remove" id="${i}">x</button></li>`;
  }

  html += '</ul>';
  document.getElementById('todos').innerHTML = html;

  // Attach event listeners to remove buttons
  const buttons = document.getElementsByClassName('remove');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  }
}

// Add button click triggers add()
document.getElementById('add').addEventListener('click', add);

// Initial display of tasks
show();
