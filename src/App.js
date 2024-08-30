// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';  // Ensure this path is correct
import About from './Pages/About';  // Ensure this path is correct
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';





function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
           
            </div>
        </Router>
    );
}

export default App;

