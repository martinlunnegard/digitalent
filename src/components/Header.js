import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <header className="bg-white fixed-top pt-3 pb-3">
      <nav className="main-nav container">
        <ul className="w-100 d-flex justify-content-between">
          <li>
            <Link to="/" style={{ fontSize: 24, color: '#1b3752', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase' }}>Hem</Link>
          </li>
          <li>
            <Link to="/search" className="d-flex align-items-center" style={{ fontSize: 24, color: '#1b3752', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase' }}>
              <span>Sök</span><Search className="ml-2" style={{ fontSize: 18 }} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header; 