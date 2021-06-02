import React from 'react'

const Todo = ({ todo, editTitle, deleteTodo, setEditText, taskEdit, setTaskEdit }) => (

  <div id={todo.id}>
    {
      todo.id === taskEdit ?
        (<input
          type="text"
          onChange={
            (e) => setEditText(e.target.value)
          }
        /> ) : (
          <div onClick={() => setTaskEdit(todo.id)}><p>{todo.id}</p>
            {todo.text}
          </div>
        )} 
    {
      todo.id === taskEdit ? [(
        <button onClick={
          () => editTitle(todo.id)}> Update</button>
      )] : (
        <button onClick={
          () => deleteTodo(todo.id)
        } id={todo.id}>  Delete  </button>
      )}
  </div>
)

export default Todo;