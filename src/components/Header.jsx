import React, { useState } from 'react';
import './css/header.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <NavLink to={'/'}>
          <img className='logo-img' src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
        </NavLink>
      </div>

      <div className={isMenuOpen ? 'open-menu' : 'burger-menu'}>

          <img className='burger' onClick={toggleMenu} src={process.env.PUBLIC_URL + '/burger-menu.svg'} alt="" />

      <ul className={`nav${isMenuOpen ? '-open' : ''}`}>
        <li><NavLink to={'/'} className={isMenuOpen ? 'open-link' : 'nlink'}>Գլխավոր էջ</NavLink></li>
        <li><NavLink to={'/Products'} className={isMenuOpen ? 'open-link' : 'nlink'}>Տեսականի</NavLink></li>
        <li><NavLink to={'/delivery'} className={isMenuOpen ? 'open-link' : 'nlink'}>Առաքում</NavLink></li>
        <li><NavLink to={'/feedback'} className={isMenuOpen ? 'open-link' : 'nlink'}>Հետադարձ կապ</NavLink></li>
      </ul>
      </div>
    </header>
  )
}

export default Header;
