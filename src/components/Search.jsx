import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchComponent } from '../store/searchSlice';
import '../styles/Search.scss';
import IconSearch from '../images/search.svg';

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
				placeholder="Search"
				className="search-input"
			/>
			<button onClick={handleSearch} className="search-button">
				<img src={IconSearch} alt="search-icon" />
			</button>
		</div>
	);
};

export default Search;
