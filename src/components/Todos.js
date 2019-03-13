import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((someVariableName) => (
        <TodoItem 
        key={someVariableName.id}
        todo={someVariableName}
        toggleComplete={this.props.toggleComplete} 
        deleteTodo={this.props.deleteTodo}
        />
    ));
  }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos;
