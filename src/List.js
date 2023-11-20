// List.js
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import './App.css';

const List = ({ list, tasks }) => {
  return (
    <div className="list">
    <h2 className="list-title">{list.title}</h2>
    <Droppable droppableId={list.id.toString()}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="list-Container">
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Task key={task.id} task={task} index={index} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
  );
};

export default List;
