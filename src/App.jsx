import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}));
  }

  function handleAddTodos(newTodo) {
    if (!newTodo.trim()) { 
      alert("Please enter a valid todo.");
      return;
    }
    const newtodoList = [...todos, newTodo];
    persistData(newtodoList);
    setTodos(newtodoList);
  }

  function handleDeleteTodos(index) {
    const newtodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newtodoList);
    setTodos(newtodoList);
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  useEffect(() => {
    let storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      storedTodos = JSON.parse(storedTodos).todos;
      setTodos(storedTodos);
    }
  }, []);

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todoValue={todoValue}/>
    </>
  );
}

export default App;
