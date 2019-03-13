import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
// import uuid from 'uuid';
import './App.css';

class App extends Component {
state = {
  todos: []
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(json => this.setState({ todos: json}))
}

toggleComplete = (id) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  });
}

deleteTodo = (id) => {
  fetch('https://jsonplaceholder.typicode.com/todos/${id}', {
    method: 'delete',
  })
  .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
}

addTodo = (title) => {
  const newTodoBody = {
    title,
    completed: false
  }
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'post',
    body: JSON.stringify(newTodoBody)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const newTodo = {
      title,
      completed: false,
      id: data.id
    }
   this.setState({todos: [...this.state.todos, newTodo] })
  })
}

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path ="/" render={props => (
            <React.Fragment>
              <AddToDo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
