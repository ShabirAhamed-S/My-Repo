import React from 'react';
import TodosList from './TodosList'

const Todos = ({ taskId, todos, setTodos, editTitle, deleteTodo, setEditText, taskEdit, setTaskEdit }) => {
    const handleSelect = (e) => {
        const id = e.target.id;
        const todo = () => {
            return (
                todos.map(
                    todo => (todo.id === +id ? {
                        ...todo,
                        value: !todo.value
                    } : todo
                    ))
            )
        }
        setTodos(todo);
    }
    return (
        <>
            <b> ToDo List </b>
            {
                todos.map((todo, index) => (
                    <div
                        key={todo.id}>
                        <input
                            type={"checkbox"}
                            id={todo.id}
                            checked={taskId.value}
                            onChange={(e) => handleSelect(e)}
                        />
                        <TodosList
                            todo={todo}
                            key={index}
                            editTitle={editTitle}
                            deleteTodo={deleteTodo}
                            setEditText={setEditText}
                            taskEdit={taskEdit}
                            setTaskEdit={setTaskEdit}
                        />
                    </div>
                ))
            }

        </ >
    );
};

export default Todos;
