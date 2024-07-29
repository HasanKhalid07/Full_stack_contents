import React from 'react';


function Task({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
