import React from 'react'

const TodosList = ({ todo, editTitle, deleteTodo, setEditText, taskEdit, setTaskEdit }) => (
  <div id={todo.id}>
    {
      todo.id === taskEdit ?
        [(
          <input
            type="text"
            onChange={(e) => setEditText(e.target.value)}
          />
        ), (
          <button
            onClick={() => editTitle(todo.id)}
          > Update</button>
        )] : [(
          <div
            onClick={() => setTaskEdit(todo.id)}
          >
            <p>{todo.id}</p>
            {todo.text}
          </div>
        ), (
          <button
            onClick={() => deleteTodo(todo.id)}
            id={todo.id}
          >  Delete  </button>
        )]
    }
  </div>
)

export default TodosList;