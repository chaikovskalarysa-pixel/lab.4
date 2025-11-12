import React from 'react';
import TodoItem from './TodoItem';

export default function TodosList({ todos, handleChangeProps, deleteTodoProps }){
  return (
    <ul style={{paddingLeft:0}}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
}
