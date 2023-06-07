import React from 'react';
import Search from './Search';
import '../styles/Navbar.scss';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="left-section">Producter Logo</div>
      <Search />
      <div className="right-section">
        <button className="add-task-button">Add Task Icon</button>
      </div>
    </nav>
  );
};

export default Navbar;
