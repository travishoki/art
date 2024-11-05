import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Gallery } from './pages/Gallery/Gallery';
import { NoPage } from './pages/NoPage/NoPage';
import { Header } from './Header/Header';
import { Project } from './pages/Project/Project';

export const App = () => {
	return (
		<Router>
			<Header />
			<div id="content">
				<Routes>
					<Route index path="/" element={<Gallery />} />
					<Route path="/gallery/:id" element={<Project />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</div>
		</Router>
	);
};
