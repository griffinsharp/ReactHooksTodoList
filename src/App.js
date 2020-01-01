import React, {useState} from 'react';
import ToDoForm from './TodoForm';
import TodoList from "./TodoList";
import Typography from '@material-ui/core/Typography';
import './App.css';

function App() {

  // initial state of our todo list is an empty array
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
      Todos
      </Typography>

      <ToDoForm saveTodo={console.warn}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
