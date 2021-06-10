// 1. membuat list array object todo list
const todos = [
    {act: 'mandi', completed: true},
    {act: 'makan', completed: false},
    {act: 'solat', completed: true},
    {act: 'ngepel', completed: false},
    {act: 'cuci motor', completed: false},
];
// 5. membuat penampung filter(search dan hide)
const filters = {
    searchText: '',
    hideCompleted: false
}


// 6. memanggil #search pada html untuk filter
document.querySelector('#search').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodo(todos, filters)
})
// 7. memanggil #completed_hide pada html untuk filter
document.querySelector('#completed_hide').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
})


// 4.1 membuat const renderTodo supaya todos.foreach dan filters.foreach tidak di copas dibawah, jd lebih rapih 
const renderTodo = (todos, filters) => {
    // 8. membuat fungsi dari semua filter
    const filteredTodos = todos.filter((todo) => {
        console.log(todo)
        const searchText = 
            todo.act.toLocaleLowerCase()
            .includes(filters.searchText.toLocaleLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed

        return searchText && hideCompleted
    })


    document.querySelector('#todos').innerHTML = '' /*data kosongkan supaya input sebelumnya tidak berulang*/
    // 2.1 membuat pengulangan looping dengan foreach
    filteredTodos.forEach(todo => {
        // 2.2 membuat element P
        const p = document.createElement('p')
        p.textContent = todo.act
        // 2.3 menggabungkan element p dengan Html
        document.querySelector('#todos').appendChild(p)
        
    });
}
//  init awal renderTodo
renderTodo(todos, filters)

// 3.1 menginput list todo yang baru pada daftar
    // 3.2 memanggil #newTodo pada Html
document.querySelector('#newTodo').addEventListener('submit', (e) => {
    e.preventDefault()
    // 3.3 menambah list baru kedalam list lama dengan (push)
    // console.log(e)
    todos.push({
        act: e.target.elements.kata.value,
        completed: false /* mengapa false?, karena kita menambah todo baru yang blom kita kerjakan*/
    }) /*karena todos list awal berbentuk object maka harus di isi dengan object juga */

    renderTodo(todos, filters) /*4.2 memanggil pengulangan renderTodo*/

    e.target.elements.kata.value = '' 
    /* setelah terisi semua pengulangan(menjadi list baru) kemudian kosongkan input */
});
 