import React from 'react';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <button className="btn btn-primary px-3 mx-3" onClick={() => setFilter('all')}>All</button>
      <button className="btn btn-success px-3 mx-3" onClick={() => setFilter('completed')}>Completed</button>
      <button className="btn btn-warning px-3 mx-3" onClick={() => setFilter('incomplete')}>Incomplete</button>
    </div>
  );
};

export default TodoFilter;
