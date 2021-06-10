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

// menghubungkan filter dengan HTML #search 
document.querySelector('#search').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodo(todos, filters)
})

// menghubungkan filter hide dengan HTML #hide-completed
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
})


// ini buat render todo dan filter
const renderTodo = (todos,filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchText = 
            todo.text.toLocaleLowerCase()
            .includes(filters.searchText.toLocaleLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed

        return searchText && hideCompleted
    })
    

    document.querySelector('#todos').innerHTML = ''
    filteredTodos.forEach(todo => {
        const p = document.createElement('p')
        p.textContent = todo.text

        document.querySelector('#todos').appendChild(p)
    });
}
// init todo
renderTodo(todos,filters)


document.querySelector('#new-todo').addEventListener('submit',function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    
    renderTodo(todos, filters)
    
    e.target.elements.text.value = ''
    
    })