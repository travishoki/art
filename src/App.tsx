import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Gallery } from './pages/Gallery/Gallery';
import { NoPage } from './pages/NoPage/NoPage';
import { Header } from './Header/Header';

export const App = () => {
	return (
		<Router>
			<Header />
			<div id="content">
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</div>
		</Router>
	);
};
