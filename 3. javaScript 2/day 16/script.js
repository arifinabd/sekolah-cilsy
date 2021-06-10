const todos = [
    {text: 'makan', completed: false},
    {text: 'mandi', completed: true},
    {text: 'main', completed: true},
    {text: 'Tidur', completed: false}
]

const filters = {
    searchText: '',
    hideCompleted: false
}

document.querySelector('#search').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodo(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
})

const generateTodo = function(todo) {
    const p = document.createElement('p')
    const label =document.createElement('label');
    label.innerHTML = ' x'
    p.textContent = todo.text
    p.appendChild(label)

    return p
}

// const deleteTodo = document.getElementById('todos');
// deleteTodo.addEventListener('click', function(){
//     deleteTodo.removeChild(p);
// })


const renderTodo = function (todos, filters) {
    const filteredTodos = todos.filter((todo) => {
        const searchText = todo.text.toLowerCase()
        .includes(filters.searchText.toLocaleLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed
        return searchText && hideCompleted
    })
    document.querySelector('#todos').innerHTML = ''
    filteredTodos. forEach (todo => {
        document.querySelector('#todos').appendChild(generateTodo(todo))
    });
}

// init awal
renderTodo(todos, filters)

document.querySelector('#new-todo').addEventListener('submit',function(e) {
e.preventDefault()
todos.push({
    text: e.target.elements.text.value,
    completed: false
})

renderTodo(todos, filters)

e.target.elements.text.value = ''

})