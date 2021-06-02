import React from 'react';
import Todo from './Todo'

const Todos = ({ todos, setTodos, editTitle, deleteTodo, setEditText, taskEdit, setTaskEdit }) => {

    const handleSelect = (e) => {
        const id = e.target.id;
        const todo = () => {
            const t=0,t1=0
            return (
                todos = todos.map(
                    todo => (todo.id == id? {
                        ...todo,
                        value: !todo.value
                    } : todo
                    ))
            )
        }
        console.log(+id)
        setTodos(todo);
    }

    return (
        <div >
            <div ><br></br>
                <b> ToDo List </b></div>
            <br></br>
            {
                todos.map((todo, index) => (
                    <div key={todo.id}>
                        <input
                            type={"checkbox"}
                            id={todo.id}
                            checked={todo.value}
                            onChange={(e) => handleSelect(e)}
                        />
                        <Todo
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

        </div >
    );
};

export default Todos;
