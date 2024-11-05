import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Gallery } from './pages/Gallery/Gallery';
import { NoPage } from './pages/NoPage/NoPage';

function App() {
	return (
		<div className="App">
			<Router>
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

				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
