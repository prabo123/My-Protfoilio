import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="container">
      <div className="site-banner">
        <div className="header-menu">
          <a href="/">Logo</a>
          <span id="menu-icon" onClick={toggleMenu}>
            <img src="images/menu.svg" alt="Menu Icon" />
          </span>
          <span
            id="header-right-menu"
            style={{ display: menuVisible ? 'block' : 'none' }}
          >
            <a href="#">Our work</a>
            <a href="#">About</a>
            <a href="#">News</a>
            <a href="#" className="header-active">
              Contact
            </a>
          </span>
        </div>
        <h1 className="heading">Contact Us</h1>
      </div>
      <div className="footer">
        <div className="footer-column">
          <img className="map-image" src="images/location.jpg" alt="Location" />
        </div>
        <div className="footer-column">
          <div className="tile-content">
            <h1>Meet Us</h1>
            <div className="contact-row">
              <img src="images/phone.svg" alt="Phone" />
              <span className="tile-field">+466723723666</span>
            </div>
            <div className="contact-row">
              <img src="images/at-sign.svg" alt="Email" />
              <span className="tile-field">contact@admin.com</span>
            </div>
            <div className="contact-row">
              <img src="images/map-pin.svg" alt="Location" />
              <span className="tile-field">1784 Griffin Street, Alabama</span>
            </div>
          </div>
        </div>
        <div className="footer-column contact-form-container">
          <div className="tile-content">
            <form method="POST">
              <h1>Contact</h1>
              <div className="contact-row">
                <input
                  type="text"
                  className="form-field"
                  placeholder="Name"
                />
              </div>
              <div className="contact-row">
                <textarea
                  rows="5"
                  className="form-field"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
