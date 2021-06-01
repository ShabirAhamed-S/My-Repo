import React from 'react'

const Todo = (props) => {
  return (
    <table>
      <thead>
        <th>SN</th>
        <th>Task</th>
      </thead>
      <tbody>
        {props.item.map(item => (
          <tr>
            <td key={item.id}>{item.id}</td>
            <td key={item.task}>{item.task}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Todo;