import React, { useState } from 'react'

const TodoForm = ({ addTodo, deleteSelect }) => {
    const [value, setvalue] = useState('');
    const handleChange = (e) => {
        setvalue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setvalue('');
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    type={"text"}
                    placeholder={"Add a ToDo"}
                    value={value}
                    onChange={handleChange}
                />
                <input
                    type={"submit"}
                    value={"Add"}
                />
                <button
                    onClick={() => deleteSelect()}
                >Delete Selected</button>
            </form>
        </>
    )
};

export default TodoForm;