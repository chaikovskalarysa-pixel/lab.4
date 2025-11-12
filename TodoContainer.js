import React, { Component } from 'react';
import HeaderTodo from './HeaderTodo';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends Component {
  state = {
    todos: [
      { id: uuidv4(), title: 'Moon', completed: false },
      { id: uuidv4(), title: 'Earth', completed: true },
      { id: uuidv4(), title: 'NASA', completed: false },
    
    ]
  };

  handleChange = (id) => {
    this.setState(prev => ({
      todos: prev.todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    }));
  };

  delTodo = (id) => {
    this.setState(prev => ({
      todos: prev.todos.filter(t => t.id !== id)
    }));
  };

  addTodoItem = (title) => {
    const newTodo = { id: uuidv4(), title, completed: false };
    this.setState(prev => ({ todos: [...prev.todos, newTodo] }));
  };

  render(){
    return (
      <div>
        <HeaderTodo />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
