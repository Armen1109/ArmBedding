import React, { useState } from 'react';
import api from '../api';
import './css/products.css';
import { NavLink } from 'react-router-dom';

function All() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(api);
  console.log(api);

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter the data when the search button is clicked
    const filteredItems = api.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredData(filteredItems);
  };


  return (
    <div className='all-products'>
      <nav className="navbar">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              // type="search"
              placeholder="Search"
              // aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}

            />
            <img className='x-button' src={process.env.PUBLIC_URL + '/x-solid.svg'} alt=""
              onClick={() => {
                setSearchQuery('')
                setFilteredData(api)
              }} />
            <button
              className="btn"
              onClick={handleSearch}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // Prevent form submission
                  handleSearch(e); // Call the search function
                }
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className='products'>
        {
          filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div className={`product`} key={item.id}>
                <div className='image'>
                  <img src={item.image} alt="" />
                </div>
                <strong className='name'>{item.name}</strong>
             <NavLink to={`/products/${item.id}`}>  <button class="btn btn-warning"> Ավելին․․․</button></NavLink>
              </div>
            ))
          ) :
            <p className='error'>Արդյունքներ չեն գտնվել</p>

        }
      </div>



    </div>
  );
}

export default All;
