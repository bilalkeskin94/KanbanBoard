import React from 'react';
import '../styles/Sidebar.scss';
import HomeLogo from '../images/homealt.svg';
import DashboardLogo from '../images/dashboard.svg';
import Explorelogo from '../images/explore.svg';
import RepeatLogo from '../images/repeat.svg';
import PlusLogo from '../images/plus.svg';
import ChatLogo from '../images/chatalt.svg';
import BellLogo from '../images/bell.svg';
import UserLogo from '../images/ellipse-1155@2x.png';
import CompanyLogo from '../images/company.svg';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul className="sidebar-list">
				<li>
					<img src={HomeLogo} alt="Home Logo" />
					<span>Dashboard</span>
				</li>
				<li>
					<img src={ChatLogo} alt="Chat Logo" />
					<span>Feedback</span>
				</li>
				<li className="active">
					<img src={DashboardLogo} alt="DashboardLogo" />
					<span className="active-text">Task</span>
				</li>
				<li
					style={{
						marginTop: '16px',
					}}
				>
					<img src={Explorelogo} alt="Explore Logo" />
					<span>Roadmap</span>
				</li>
				<li>
					<img src={RepeatLogo} alt="Repeat Logo" />
					<span>Changelog</span>
				</li>
			</ul>
			<ul className="sidebar-list">
				<li>
					<img src={PlusLogo} alt="Plus Logo" />
					<span>Invite people</span>
				</li>
				<li>
					<img src={HomeLogo} alt="Home Logo" />
					<span>Help & Community</span>
				</li>
				<li>
					<img src={BellLogo} alt="Bell Logo" />
					<span>Notifications</span>
				</li>
				<hr class="seperator" />
				<li>
					<img className="user-image" src={UserLogo} alt="User Logo" />
					<span className="user-image-text">Neil Larkins</span>
				</li>
				<hr class="seperator" />
				<li>
					<img src={CompanyLogo} alt="Company Logo" />
					<span className="user-image-text">Epodbay Inc</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
