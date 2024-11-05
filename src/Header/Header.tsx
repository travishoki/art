import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	return (
		<header className="App-header">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="gallery">Gallery</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
