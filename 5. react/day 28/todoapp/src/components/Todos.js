import React, {useState} from 'react';
import Header from './Header';
import ActionTodo from './ActionTodo';
import Footer  from './Footer';
import FilterTodo from './FilterTodo';

export default function Todos(){
    const [todos, setTodos] = useState([
        {id: 1, text: 'Learn React', completed: false},
        {id: 2, text: 'Learn Js', completed: true},
        {id: 3, text: 'Learn HTML', completed: true},
    ]);
    const [filter, setFilter] = useState(
        {search: '', completed: false}
    )
    const onAddTodo = (text) => {
        todos.push(
            {id: todos.length + 1, text: text, completed: false}
        )
        setTodos([
            ...todos,
        ])
    }
    const onFilterTodo = (search, completed) => {
        setFilter({search, completed})
    }
    const filteredTodo = todos.filter((todo) => {
        const searchText = todo.text.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase())
        const hideCompleted = !filter.completed || !todo.completed

        return searchText && hideCompleted
    })

    return (
        <div>
            <Header/>
            <FilterTodo onFilterTodo={onFilterTodo}/>
            {filteredTodo.map((val, key) =>{
                return (
                    <h4 key={key}>{key +1}.{val.text}</h4>
                )
            })}
            <ActionTodo onAddTodo={onAddTodo}/>
            <Footer/>
        </div>
    )
}