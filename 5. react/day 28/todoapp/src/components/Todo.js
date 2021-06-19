import React from 'react';

export default function Todo({no, data, onCompletedTodo}) {
    const onCompleted = (id) => {
        onCompletedTodo(id)
    }

    return (
        <div>
            <h4 
                style={{textDecoration: data.completed ? 'line-through' : 'none'}}>
                    {no}.{data.text}
            </h4>
            {!data.completed && <button onClick={() => onCompleted(data.id)}>CLEAR</button>}  
        </div>
        )   
}