import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleCompletion } = this.props
    return (
      <div>
        {
          todos.map((todo) => (<Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />))
        }
      </div>
    )
  }
}
