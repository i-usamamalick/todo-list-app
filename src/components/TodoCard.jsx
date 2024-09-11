import React, { Children } from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodos, handleEditTodos, index, disableActions} = props
  return (
    <div>
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={()=> {handleEditTodos(index)}}  disabled={disableActions}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={()=> {handleDeleteTodos(index)}}  disabled={disableActions}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    </div>
  )
}
