import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional: Import CSS for styling

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About Us</Link></li>
                    <li className="nav-item"><Link to="/services">Services</Link></li>
                    <li className="nav-item"><Link to="/gallery">Gallery</Link></li>
                    <li className="nav-item"><Link to="/projects">Projects</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;
