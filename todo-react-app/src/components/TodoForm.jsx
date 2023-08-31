import React, { useState } from 'react'

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState("");

    // console.log(todo)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo) {
            //logic to add todo
            addTodo(todo);
            //clear the form after submission
            setTodo("");
        }
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input className='todo-input' placeholder='What is your task today?' type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Todo</button>


        </form>
    )
}

export default TodoForm