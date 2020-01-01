import React, {useState} from 'react';
import ToDoForm from './TodoForm';
import TodoList from "./TodoList";
import Typography from '@material-ui/core/Typography';
import './App.css';

function App() {

  // initial state of our todo list is an empty array
  const [todos, setTodos] = useState([]);

  const saveTodo = (text) => {
    let trimmed = text.trim();

    if (trimmed.length > 0) {
      setTodos([...todos, trimmed]);
    }

    // Just combining the exisiting todos and the new todo.
    // We destructure ...todos, and combine it with trimmed into a new array.

    // Another way that also works:
      // if (trimmed.length > 0) {
      //   let newTodos = todos.concat([trimmed]);
      //   setTodos(newTodos);
      // }
  };

  const deleteTodo = (todoIndex) => {
    const survivingTodos = todos.filter((_, index) => index !== todoIndex );
    setTodos(survivingTodos);
  };

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
      Todos
      </Typography>

      <ToDoForm saveTodo={saveTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
