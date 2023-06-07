import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
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
      <div className="app">
        <Navbar onSearch={handleSearch} />
        <div className="main">
          <Sidebar />
          <KanbanBoard searchTerm={searchTerm} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
