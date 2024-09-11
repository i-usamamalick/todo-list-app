import React from 'react';

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue, handleCancelEditTodos } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder='Enter todo...'
      />
      <button onClick={() => handleAddTodos(todoValue)}>
        {todoValue ? 'Update' : 'Add'}
      </button>
      {todoValue && (
        <button onClick={() => handleCancelEditTodos()}>
          Cancel
        </button>
      )}
    </header>
  );
}
