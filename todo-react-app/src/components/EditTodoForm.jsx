import React from 'react'

function EditTodoForm() {
    return (
        <form className='todo-form'>
            <input className='todo-input' type='text' placeholder='editTask' />
            <button type='submit' className='todo-btn'>Save</button>
        </form>
    )
}

export default EditTodoForm