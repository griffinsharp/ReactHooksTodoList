import React from 'react';
import ToDoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
      Todos
      </Typography>

      <ToDoForm saveTodo={console.warn}/>
    </div>
  );
}

export default App;
