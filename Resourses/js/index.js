// User clicked on Add button
// if there is an item in text then add to the todo list
document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
});

// Adds a new item to the todo list
function addItemTodo(text) {
  var list = document.getElementById('todo');
  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = '<i class="fa-regular fa-circle-check"></i>';

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}
