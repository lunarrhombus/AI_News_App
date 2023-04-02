import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          BroadcastMX
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
