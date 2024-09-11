import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [isEditing, setIsEditing] = useState(false); 

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    if (!newTodo.trim()) {
      alert("Please enter a valid todo.");
      return;
    }

    if (isEditing) {
      const updatedTodos = todos.map((todo, index) =>
        index === isEditing ? newTodo : todo
      );
      persistData(updatedTodos);
      setTodos(updatedTodos);
      setIsEditing(false); 
    } else {
      const newTodoList = [...todos, newTodo];
      persistData(newTodoList);
      setTodos(newTodoList);
    }
    setTodoValue(''); 
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    setIsEditing(index); 
  }

  function handleCancelEditTodos() {
    setTodoValue(''); 
    setIsEditing(false); 
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
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
        handleCancelEditTodos={handleCancelEditTodos}
      />
      <TodoList
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
        todoValue={todoValue}
      />
    </>
  );
}

export default App;
