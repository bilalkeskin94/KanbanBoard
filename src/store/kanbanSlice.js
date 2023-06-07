import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Todo',
      taskIds: [],
    },
    'column-2': {
      id: 'column-2',
      title: 'Done',
      taskIds: [],
    },
  },
  tasks: {},
  columnOrder: ['column-1', 'column-2'],
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    createTask: {
      reducer: (state, action) => {
        const { taskId, content, priority, columnId } = action.payload;
        state.tasks[taskId] = { id: taskId, content, priority };
        state.columns[columnId].taskIds.push(taskId);
      },
      prepare: ({ content, priority, columnId }) => {
        const taskId = nanoid();
        return {
          payload: {
            taskId,
            content,
            priority,
            columnId,
          },
        };
      },
    },
    editTask: (state, action) => {
      const { taskId, newContent, newPriority } = action.payload;
      state.tasks[taskId].content = newContent;
      state.tasks[taskId].priority = newPriority;
    },
    moveTask: (state, action) => {
      const { source, destination } = action.payload;
      const { droppableId: startId, index: startIndex } = source;
      const { droppableId: endId, index: endIndex } = destination;

      if (startId === endId) {
        const column = state.columns[startId];
        const [removed] = column.taskIds.splice(startIndex, 1);
        column.taskIds.splice(endIndex, 0, removed);
      } else {
        const startColumn = state.columns[startId];
        const endColumn = state.columns[endId];
        const [removed] = startColumn.taskIds.splice(startIndex, 1);
        endColumn.taskIds.splice(endIndex, 0, removed);
      }
    },
  },
});

export const { createTask, editTask, moveTask } = kanbanSlice.actions;

export default kanbanSlice.reducer;
