import React from 'react'

function Todo({ task, deleteTodo, editTodo }) {
    return (
        <div className='todo'>
            <p>{task.task}</p>
            <div>
                <button className='edit-btn' onClick={() => editTodo(task.id)}>Edit</button>
                <button className='delete-btn' onClick={() => deleteTodo(task.id)} >Delete</button>
            </div>
        </div>
    )
}

export default Todo