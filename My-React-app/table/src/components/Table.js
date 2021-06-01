import React from 'react'

const Table = (props) => {
  return (
    <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </thead>
      <tbody>
        {props.item.map(item => (
          <tr>
            <td key={item.id}>{item.id}</td>
            <td key={item.name}>{item.name}</td>
            <td key={item.email}>{item.email}</td>
            <td key={item.phone}>{item.phone}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;