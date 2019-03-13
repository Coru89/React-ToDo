import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

// aplying completed class if complete
setClass = () => {
    if (this.props.todo.completed) {
        return 'item complete'
    } else {
        return 'item'
    }
}

  render() {
    return (
      <div className={this.setClass()}>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, this.props.todo.id)}></input>
        {this.props.todo.title}
        <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}>X</button>    
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const btnStyle= {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
