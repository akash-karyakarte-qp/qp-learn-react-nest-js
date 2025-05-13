import type React from 'react'

export const TodoListScreen : React.FC = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        <li>Buy milk</li>
        <li>Walk the dog</li>
        <li>Learn React</li>
      </ul>
    </div>
  )
}
