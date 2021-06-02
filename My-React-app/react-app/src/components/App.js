import React, { useState } from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            items: [],
            text: "Write a new task",
            value: true
        },
        {
            id: 2,
            text: "Add Task",
            value: false
        },
        {
            id: 3,
            text: "Delete Task",
            value: true
        }
    ]);
    const [editText, setEditText] = useState("");
    const [taskEdit, setTaskEdit] = useState(null);


    const addTodo = (todo) => {
        console.log(...todos)
        setTodos([...todos, { id: todos.length + 1, text: todo, value: false }]);
    };

    const editTitle = (id) => {
        const updatedTask = todos.map((todo) => {
            if (todo.id === id) {
                todo.text = editText;
                console.log(todo.text);
            }
            return todo;
        });
        setTodos(updatedTask);
        setTaskEdit(null);
    }

    const deleteSelect = () => {
        let updatedTask = todos.items = todos.filter(todo => !todo.value)
        setTodos(updatedTask)

    }

    const deleteTodo = (id) => {
        let updatedTask = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTask)
    }

    const deleteAll = () => {
        let updatedTask = []
        setTodos(updatedTask);
    }

    return (
        <div ><br></br>
            <input type='checkbox' onChange={deleteAll} /> All Delete
            <TodoForm
                addTodo={addTodo}
                deleteSelect={deleteSelect}
            />

            <Todos
                setEditText={setEditText}
                taskEdit={taskEdit}
                todos={todos}
                editTitle={editTitle}
                setTodos={setTodos}
                deleteTodo={deleteTodo}
                setTaskEdit={setTaskEdit}
            />
        </div>
    );
}

export default App;
