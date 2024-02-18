import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

const LOCAL_STORAGE_KEY = "todos";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedTodos || [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'incomplete') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Todo List</h1>
              <TodoForm onAdd={addTodo} />
            </div>
            <ul className="list-group list-group-flush">
              <TodoList
                todos={filteredTodos}
                onComplete={toggleComplete}
                onDelete={deleteTodo}
              />
            </ul>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <TodoFilter filter={filter} setFilter={setFilter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
