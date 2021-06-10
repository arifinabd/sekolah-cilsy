let todos = [
  {text: 'Makan', completed: false},
  {text: 'Mandi', completed: true},
  {text: 'Maen', completed: true},
  {text: 'Tidur', completed: false},
  // {text: 'test', completed: false}
]

const filters = {
  searchText: '',
  hideCompleted: false
}

function addTodo() {
  const newTodo = {
    text: 'test',
    completed: false,
  }
  todos = [...todos, newTodo] // bukan memanipulasi object sebelumnya tetapi dia initiate object baru (immutable)
  todos.push(newTodo); // push itu memanipulasi object sebelumnya (mutable)
}

document.querySelector('#search').addEventListener('input', function (e) {
  e.preventDefault()
  console.log(e)
  filters.searchText = e.target.value
  renderTodo(todos, filters)
});

document.querySelector('#hide-completed').
  addEventListener('change', function (e) {
    console.log(e);
  filters.hideCompleted = e.target.checked
  renderTodo(todos, filters)
})

function del(idx) {
  console.log(idx)
  todos = todos.filter((_, index) => {
    return index !== idx
  });
  document.querySelector('#todos').innerHTML = ''
  todos.forEach((todo, index) => {
    document.querySelector('#todos').appendChild(generateTodo(todo, index))
  });
}

const generateTodo = function (todo, index) {
  const p = document.createElement('p')
  const label = document.createElement('label');
  label.innerHTML = ' x';
  this.idx = index;
  label.onclick = function() {
    del(index);
  }
  p.textContent = todo.text
  p.appendChild(label);
  return p
}

const renderTodo = function (todos, filters) {
  const filteredTodos = todos.filter((todo) => {
    const searchText =
      todo.text.toLocaleLowerCase()
        .includes(filters.searchText.toLocaleLowerCase())
    const hideCompleted = !filters.hideCompleted || !todo.completed
    

    return searchText && hideCompleted
  })

  console.log(filteredTodos)

  document.querySelector('#todos').innerHTML = ''
  filteredTodos.forEach((todo, index) => {
    document.querySelector('#todos').appendChild(generateTodo(todo, index))
  });
}

// init awal
renderTodo(todos, filters)

function onSubmitForm(e) {
  e.preventDefault();
  console.log('click on submit form');
  todos.push({
    text: e.target.elements.text.value,
    completed: false
  });

  renderTodo(todos, filters)
}

document.querySelector('#new-todo').addEventListener('submit', function (e) {
   e.preventDefault()

   todos.push({
     text: e.target.elements.text.value,
     completed: false
   })

   renderTodo(todos, filters)

   e.target.elements.text.value = ''
})