var data = {
  todo: [],
  complete: [],
};
// User clicked on Add button
// if there is an item in text then add to the todo list
document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);

    document.getElementById('item').value = '';
    data.todo.push(value);
    itemLeft();
  }
});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;
  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
  } else {
    data.complete.splice(data.complete.indexOf(value), 1);
  }
  parent.removeChild(item);
  // itemLeft();
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;

  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
    data.complete.push(value);
  } else {
    data.complete.splice(data.complete.indexOf(value), 1);
    data.todo.push(value);
  }

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
  // itemLeft();
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
  complete.addEventListener('click', deco);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}

function deco() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  if (id === 'completed') {
    item.classList.add('text');
  } else {
    item.classList.remove('text');
  }
}


function itemLeft() {
  document.querySelector('h3').innerText = `${data.todo.length} Tasks left`;
}
