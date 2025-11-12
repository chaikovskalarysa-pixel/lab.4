import React from 'react';

export default function TodoItem({ todo, handleChangeProps, deleteTodoProps }){
  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.6,
    textDecoration: 'line-through'
  };
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
      <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
    </li>
  );
}
