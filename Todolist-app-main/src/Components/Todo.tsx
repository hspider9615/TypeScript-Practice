import React, { useState, ChangeEvent } from 'react';

interface TodoProps {
  todo: { id: string; name: string; completed: boolean };
  todos: Array<{ id: string; name: string; completed: boolean }>;
  setTodos: React.Dispatch<
    React.SetStateAction<
      Array<{ id: string; name: string; completed: boolean }>
    >
  >;
  id: string;
}

const Todo: React.FC<TodoProps> = ({ todo, todos, setTodos, id }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [inputedit, setInputedit] = useState<string>(todo.name);

  const onchangedsave = (e: ChangeEvent<HTMLInputElement>) => {
    setInputedit(e.target.value);
  };

  const onEdit = () => {
    setEdit(true);
  };

  const onSave = (id: string) => {
    setEdit(false);
    if (inputedit) {
      saveinput(inputedit, id);
    } else {
      setInputedit(todo.name);
    }
  };

  const saveinput = (inputedit: string, id: string) => {
    const savetodos = [...todos];
    savetodos.forEach((item) => {
      if (item.id === id) {
        item.name = inputedit;
      }
    });
    setTodos(savetodos);
  };

  const onDelete = () => {
    setTodos(todos.filter((item) => todo.id !== item.id));
  };

  const onComplete = () => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return edit ? (
    <div className='todo-li'>
      <li className='li-list'>
        <input
          className='li-input'
          value={inputedit}
          onChange={onchangedsave}
        />
        <button className='button-save' onClick={() => onSave(id)}>
          <span className='text-save'>Save</span>
        </button>
      </li>
    </div>
  ) : (
    <div className='todo-li'>
      <li className={`li-list ${todo.completed ? 'completed' : ''}`}>
        <input className='li-input' value={todo.name} onChange={() => {}} />
        <button className='button-complete' onClick={onComplete}>
          <span className='text-complete'>Complete</span>
        </button>
        <button className='button-edit' onClick={onEdit}>
          <span className='text-edit'>Edit</span>
        </button>
        <button className='button-delete' onClick={onDelete}>
          <span className='text-delete'>Delete</span>
        </button>
      </li>
    </div>
  );
};

export default Todo;
