import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from './Home';
import { Gallery } from './Gallery';
import { NoPage } from './NoPage';

const Layout = (children:ReactNode) => {
  return(
    <div>{children}</div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="gallery">Gallery</Link></li>
          </ul>
        </nav>
        </header>

        <Routes>
        <Route path="/" element={<Layout />}>
        <Route  element={<Home />}>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NoPage />} />
        </Route>
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}



export default App;
