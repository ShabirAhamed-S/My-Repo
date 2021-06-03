import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function MainApp() {
    const [todos, setTodos] = useState([]);
    const [editText, setEditText] = useState("");
    const [taskEdit, setTaskEdit] = useState(null);
    const [taskId, setTaskId] = useState([
        {
            value: false
        }
    ])

    const addTodo = (todo) => {
        setTodos([...todos, { id: todos.length + 1, text: todo }])
    };
    const editTitle = (id) => {
        const updatedTask = todos.map((todo) => {
            if (todo.id === id) {
                todo.text = editText;
                console.log(todo.text);
            }
            return todo
        });
        setTodos(updatedTask);
        setTaskId(updatedTask);
        setTaskEdit(null);
    }
    const deleteSelect = () => {
        let updatedTask = todos.filter(todo => !todo.value)
        setTodos(updatedTask)
    }
    const deleteTodo = (id) => {
            (isNaN(id)) ?
            setTodos([])
            :
            setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <div >
            <input
                type='checkbox'
                onChange={() => deleteTodo()}
            />
            All Delete
            <TodoForm
                addTodo={addTodo}
                deleteSelect={deleteSelect}
            />
            <Todos
                taskId={taskId}
                setTaskId={setTaskId}
                todos={todos}
                setTodos={setTodos}
                editTitle={editTitle}
                deleteTodo={deleteTodo}
                taskEdit={taskEdit}
                setTaskEdit={setTaskEdit}
                setEditText={setEditText}
            />
        </div>
    );
}

export default MainApp;
