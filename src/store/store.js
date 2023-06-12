import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import kanbanReducer from './kanbanSlice';
import searchReducer from './searchSlice';

const reducers = combineReducers({
	kanban: kanbanReducer,
	search: searchReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const idGenerationMiddleware =
	({ getState }) =>
	(next) =>
	(action) => {
		// Check if this is the createTask action
		if (action.type === 'kanban/createTask') {
			const state = getState();
			const { type } = action.payload;

			// Count the current number of tasks of the specified type
			const currentCount = Object.values(state.kanban.tasks).filter((task) =>
				task.id.startsWith(type)
			).length;

			// Create a new unique ID
			const newId = `${type}-${String(currentCount + 1).padStart(2, '0')}`;

			// Override the action payload with the new ID
			action.payload.taskId = newId;
		}

		return next(action);
	};

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			idGenerationMiddleware
		),
});

let persistor = persistStore(store);

export { store, persistor };
