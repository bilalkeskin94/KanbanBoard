import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchComponent } from '../store/searchSlice';
import '../styles/Search.scss';

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchComponent(searchTerm));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by name or ID"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
