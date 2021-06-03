import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function MainApp() {
    const [todos, setTodos] = useState([]);
    const [editText, setEditText] = useState("");
    const [taskEdit, setTaskEdit] = useState(null);
    const taskId = [
        {
            value: false
        }]
    const addTodo = (todo) => {
        console.log(...todos)
        setTodos([...todos, { id: todos.length + 1, text: todo}]);
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
        let updatedTask = todos.filter(todo => !todo.value)
        setTodos(updatedTask)
    }
    const deleteTodo = (id) => {
        if (isNaN(id)) {
            setTodos([]);
        }
        else {
            let updatedTask = todos.filter((todo) => todo.id !== id)
            setTodos(updatedTask)
        }
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
                setEditText={setEditText}
                taskId={taskId}
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

export default MainApp;
