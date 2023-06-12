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

const store = configureStore({
	reducer: persistedReducer,
});

let persistor = persistStore(store);

export { store, persistor };
