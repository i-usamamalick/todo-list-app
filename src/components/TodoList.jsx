import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos, todoValue} = props
  return (
    <ul className='main'>
        {todos.map((todo, index) => {
            return (
                <TodoCard {...props} key={index} index={index} disableActions={todoValue.length > 0}>
                    <p>{todo}</p>
                </TodoCard>
            )
        }
    )}
    </ul>
  )
}
