import React from 'react';
import LeftArrow from '../images/arrowleft.svg';
import SprLogo from '../images/spr06.svg';
import Team10 from '../images/team10.svg';
import NewSprintLogo from '../images/newsprint.svg';
import UsersLogo from '../images/users.svg';
import BookLogo from '../images/book.svg';
import BlueFilterLogo from '../images/bluefilter.svg';
import CompleteButton from '../images/completesprint.svg';

function ColumnNavbar() {
	return (
		<div className="column-navbar-wrapper">
			<img src={LeftArrow} alt="Left Arrow" />
			<hr className="column-seperator" />
			<img src={SprLogo} alt="Spr Logo" />
			<h5>SPR-03</h5>
			<hr className="column-seperator" />
			<img src={Team10} alt="Team 10" />
			<h5>TEAM-10</h5>
			<hr className="column-seperator" />
			<h4>New Sprint Name</h4>
			<img src={NewSprintLogo} alt="New Sprint Logo" />
			<img src={UsersLogo} alt="Users Logo" />
			<img
				style={{ marginLeft: '24px' }}
				src={CompleteButton}
				alt="Complete Button"
			/>
			<div class="right-side">
				<img src={BookLogo} alt="Book Logo" />
				<img src={BlueFilterLogo} alt="Blue Filter Logo" />
			</div>
		</div>
	);
}

export default ColumnNavbar;
