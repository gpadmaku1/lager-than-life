import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <div>
      <nav className='navbar bg-primary'>
        <h1 className='navbar-header'>
          <i className='fas fa-beer' /> {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
