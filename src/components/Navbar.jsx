import React from 'react';
import AddTaskForm from './AddTaskForm';
import Search from './Search';
import '../styles/Navbar.scss';
import Logo from '../images/logo--header.svg';
import Controls from '../images/controls.svg';
import Filter from '../images/filter.svg';

const Navbar = ({ onSearch }) => {
	return (
		<nav className="navbar">
			<div className="left-section">
				<img src={Logo} alt="Producter Logo" />
				<hr className="logo-seperator" />
			</div>
			<Search />
			<div className="button-background btn-bg">
				<img src={Controls} alt="Controls" />
			</div>
			<div className="filter-background btn-bg">
				<img src={Filter} alt="Filter" />
			</div>
			<div className="add-task">
				<AddTaskForm />
			</div>
		</nav>
	);
};

export default Navbar;
