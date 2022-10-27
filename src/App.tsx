import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import TodoList from './components/TodoList/TodoList';
import { TodoInterface } from './types';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(''); 
  const [todos, setTodos] = useState<TodoInterface[]>([]); 

  const handleTasksAdd = (e: React.FormEvent) => { 
    e.preventDefault();
    if (todo) { 
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]); 
      setTodo('');
    }
  }

  return ( 
    <div className='App'>
      <span className="heading">Taskify</span>
      <InputForm todo={todo} setTodo={setTodo} onSubmit={handleTasksAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
 