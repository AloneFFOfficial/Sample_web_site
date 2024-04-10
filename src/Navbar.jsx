import React from 'react';
import './App.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <label className="logo">IIC</label>
      <ul>
        <li><a className="active" href="App.jsx">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Our Events</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
