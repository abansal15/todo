import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary px-3 mx-3" type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
