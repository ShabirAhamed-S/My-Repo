import React, {useState} from 'react'

const TodoForm = ({addTodo, deleteSelect }) =>{
    const [value, setvalue] = useState('');

    const handleChange = (e) => {   
        setvalue(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();     
        if (!value)             
            return;
        addTodo(value);
        setvalue('');
    };

    return(
        <div>
            <br></br>
            <form onSubmit={handleSubmit} >
                <input  type={"text"} placeholder={"Add a ToDo"} value={value} onChange={handleChange}/>
                <input type={"submit"} value={"Add"}/>
                <br></br>
                <button onClick={()=>deleteSelect()}>Delete</button>
            </form>
        </div>
    )
};

export default TodoForm;