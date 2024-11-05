import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	return (
		<header className="App-header">
			<nav className="boxed">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
