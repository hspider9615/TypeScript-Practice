import React from 'react';
import Todo from './Todo';

interface TodolistProps {
  todos: Array<{ id: string, name: string, completed: boolean }>;
  setTodos: React.Dispatch<
    React.SetStateAction<
      Array<{ id: string, name: string, completed: boolean }>
    >
  >;
}

const Todolist: React.FC<TodolistProps> = ({ todos, setTodos }) => {
  return (
    <div className='todo-ul'>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
