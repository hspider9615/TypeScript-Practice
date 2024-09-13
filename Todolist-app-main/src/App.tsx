import React, { useState } from 'react';
import Form from './Components/Form';
import Todolist from './Components/Todolist';

// Define the type for Todo item
interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="App">
      <div className="header">
        <h1>Todolist-App</h1>
        <div><Form todos={todos} setTodos={setTodos} /></div>
        <div><Todolist todos={todos} setTodos={setTodos} /></div>
      </div>
    </div>
  );
}

export default App;
