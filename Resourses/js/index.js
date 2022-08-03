// User clicked on Add button
// if there is an item in text then add to the todo list
document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  var target =
    id === 'todo'
      ? document.getElementById('completed')
      : document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);

  
  if (item.parentNode.id === 'completed') {
    this.innerHTML = ' <i class="fa-solid fa-circle-check"></i>';
  } else {
    this.innerHTML = ' <i class="fa-regular fa-circle-check"></i>';
  }
}

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

  // Add click event for removing item
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = '<i class="fa-regular fa-circle-check"></i>';

  // Add click event for complete items
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}
