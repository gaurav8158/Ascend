import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from './List';

const initialData = {
  lists: [
    {
      id: 1,
      title: 'List 1',
      tasks: [
        { id: 1, content: 'Task 1' },
        { id: 2, content: 'Task 2' },
      ],
    },
    {
      id: 2,
      title: 'List 2',
      tasks: [
        { id: 3, content: 'Task 3' },
        { id: 4, content: 'Task 4' },
      ],
    },
    {
      id: 3,
      title: 'List 3',
      tasks: [
        { id: 5, content: 'Task 5' },
        { id: 6, content: 'Task 6' },
      ],
    },
  ],
};

const TaskBoard = () => {
  const [data, setData] = useState(initialData);


  return (
    <DragDropContext >
      <Droppable droppableId="board" direction="horizontal">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="board">
            {data.lists.map((list) => (
              <List key={list.id} list={list} tasks={list.tasks} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskBoard;
