import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { moveTask } from '../store/kanbanSlice';
import '../styles/KanbanBoard.scss';

const KanbanBoard = ({ searchTerm }) => {
  const { columns, columnOrder } = useSelector((state) => state.kanban);
  const dispatch = useDispatch();

  let filteredColumnOrder = columnOrder;
  if (searchTerm) {
    filteredColumnOrder = columnOrder.filter((columnId) => {
      const column = columns[columnId];
      if (!column) {
        return false;
      }

      const tasks = column.taskIds.map(
        (taskId) => columns[columnId].tasks[taskId]
      );

      const filteredTasks = tasks.filter(
        (task) =>
          task.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.id.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return filteredTasks.length > 0;
    });
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (
      result.source.droppableId === result.destination.droppableId &&
      result.source.index === result.destination.index
    ) {
      return;
    }

    dispatch(moveTask(result));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {filteredColumnOrder.map((columnId) => {
          console.log(columnId)
          const column = columns[columnId];
          if (!column) {
            return null;
          }
          return <Column key={column.id} column={column} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
