import React from 'react'

function CompletedItem({ todo }) {
  return (
    <li>
      <span className="title">{todo.title}</span>
      <span>{todo.description}</span>
      <span className="date">{todo.date.toLocaleString('no-NB')}</span>
    </li>
  )
}

export default CompletedItem
