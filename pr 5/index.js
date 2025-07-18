let input = document.querySelector('input');
let button = document.querySelector('button');
let todoList = document.getElementById('todo-list');

button.addEventListener('click', function () {
  const value = input.value.trim();

  if (value === '') {
    alert('Please enter a todo!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = value;

  // Optional: Add a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  input.value = '';
});
