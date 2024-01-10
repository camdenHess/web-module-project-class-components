import React from 'react'

export default class Form extends React.Component {
  state = {
    name: ''
  }

  onChange = evt => {
    this.setState({
      ...this.state,
      name: evt.target.value
    })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { addTodo } = this.props
    addTodo(this.state.name)
    this.setState({
      ...this.state,
      name: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.name} placeholder='Type Todo' onChange={this.onChange} />
        <input type='submit' />
      </form>
    )
  }
}
