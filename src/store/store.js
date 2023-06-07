import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from './kanbanSlice';
import searchReducer from './searchSlice';

export default configureStore({
  reducer: {
    kanban: kanbanReducer,
    search: searchReducer,
  },
});
