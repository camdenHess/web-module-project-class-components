import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0

let getId = () => ++id

let initialTodos = [
    {
      name: 'Organize Garage',
      id: getId(),
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: getId(),
      completed: false
    }
  ]

export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  toggleComplete = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (id === todo.id) return { ...todo, completed: !todo.completed}
        return todo
      })
    })
  }

  addTodo = name => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ name: name, id: getId(), completed: false })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} />
        <Form addTodo={this.addTodo} />
      </div>
    )
  }
}
