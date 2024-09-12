import React from 'react';

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue, handleCancelEditTodos, isEditing } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder='Enter todo...'
      />
      <button onClick={() => handleAddTodos(todoValue)}>
        {isEditing ? 'Update' : 'Add'}
      </button>
      {isEditing && (
        <button onClick={() => handleCancelEditTodos()}>
          Cancel
        </button>
      )}
    </header>
  );
}
