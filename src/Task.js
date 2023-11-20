import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  console.log('Task ID:', task.id);

  return (
    <div className="task">
      <input type="checkbox"/>
    <p>{task.content}</p>
  </div>
  );
};

export default Task;
