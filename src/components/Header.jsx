import React from 'react';
import './css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  return (
    
        <header>
            <p className='logo'>ArmBedding</p>
            <ul className='nav'>
                <li>Գլխավոր էջ</li>
                <li>Լավագույն ապրանքներ</li>
                <li>Զեղչեր</li>
                <li>Մեր Մասին</li>
            </ul>
            <nav class="navbar">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="search-button" type="submit">Search</button>
    </form>
  </div>
</nav>
        </header>
  )
}

export default Header