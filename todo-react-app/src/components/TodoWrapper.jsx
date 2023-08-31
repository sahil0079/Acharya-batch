import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }
        ])
    };

    const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))

    const editTodo = (id) => {
        let newTodos = todos.map((todo) => {
            return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        })

        setTodos(newTodos)
    }

    console.log(todos)

    return (
        <div className='todo-wrapper'>
            <h1>Things to complete</h1>
            <TodoForm addTodo={addTodo} />
            {
                todos.map((todo) => (
                    todo.isEditing ? (
                        <EditTodoForm />
                    ) : (
                        <Todo
                            key={todo.id}
                            task={todo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    )

                ))
            }
        </div>
    )
}

export default TodoWrapper