import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import KanbanBoard from './components/KanbanBoard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.scss';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (value) => {
		setSearchTerm(value);
	};

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div className="app">
					<Navbar onSearch={handleSearch} />
					<div className="main">
						<Sidebar />

						<KanbanBoard searchTerm={searchTerm} />
					</div>
				</div>
			</PersistGate>
		</Provider>
	);
};

export default App;
