import React, { useState, ChangeEvent, FormEvent } from 'react';
import { v4 as uuid } from 'uuid';

interface FormProps {
  todos: Array<{ id: string; name: string; completed: boolean }>;
  setTodos: React.Dispatch<
    React.SetStateAction<
      Array<{ id: string; name: string; completed: boolean }>
    >
  >;
}

const Form: React.FC<FormProps> = ({ todos, setTodos }) => {
  const [input, setInput] = useState<string>('');

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, { name: input, completed: false, id: uuid() }]);
    setInput('');
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        className='form-input'
        type='text'
        placeholder='enter a todos'
        autoComplete='off'
        value={input}
        onChange={onchange}
      />
      <button className='form-button' type='submit'>
        Add
      </button>
    </form>
  );
};

export default Form;
