import React from 'react';
import Search from './Search';
import '../styles/Navbar.scss';
import Logo from '../images/logo--header.svg';
import Controls from '../images/controls.svg';
import Filter from '../images/filter.svg';
import Plus from '../images/plus1.svg';

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
				<img src={Plus} alt="plus icon" />
			</div>
		</nav>
	);
};

export default Navbar;
