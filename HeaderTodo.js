import React from 'react';
export default function HeaderTodo(){
  const headerStyle = { padding: '10px 0', lineHeight: '1.5em' };
  return (
    <header style={headerStyle}>
      <h3 style={{fontSize: '20px', marginBottom:8}}>Simple Todo App</h3>
      <p style={{fontSize: '14px'}}>Please add to-dos item(s) through the input field</p>
    </header>
  );
}
