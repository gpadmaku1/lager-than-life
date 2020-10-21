import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  console.log(title);
  return (
    <div>
      <nav className='navbar bg-primary'>
        <h1 className='navbar-header'>
          <i class='fas fa-beer' /> <i class='fas fa-cocktail' /> {title}{' '}
          <i class='fas fa-wine-glass' />{' '}
          <i class='fas fa-glass-martini-alt'></i>
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

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
