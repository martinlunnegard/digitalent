import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <ul className="main-nav__nav-links">
          <li>
            <Link to="/" style={{ color: '#ffffff', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase' }}>Hem</Link>
          </li>
          <li>
            <Link to="/search" style={{ color: '#ffffff', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase' }}>Sök</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header; 