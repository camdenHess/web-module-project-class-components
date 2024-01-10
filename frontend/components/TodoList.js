import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  state = {
    showCompleted: true
  }

  toggleShowCompleted = () => {
    this.setState({
      ...this.state,
      showCompleted: !this.state.showCompleted
    })
  }

  render() {
    const { todos, toggleComplete } = this.props
    const filteredCompleted = todos.filter(todo => !todo.completed || this.state.showCompleted)
    return (
      <div>
        {
          filteredCompleted.map((todo) => (<Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />))
        }
        <button onClick={this.toggleShowCompleted}>{this.state.showCompleted ? 'Hide Completed' : 'Show All'}</button>
      </div>
    )
  }
}
