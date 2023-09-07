import React from 'react'
import api from '../api'
import './css/products.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';

function Products() {
    return (
        <div className="product-container">

        <div className='products'>
            {api.map((e, i) => {
                if (i < 6)
                    return (  
                      <NavLink to={`/products/${e.id}`}> 
                        <div className={`product`} key={e.id}>
                            <div className='image'>
                                <img src={e.image} alt="" />
                            </div>
                            <strong className='name'>{e.name}</strong>
                   
                        </div> 
                         </NavLink>
                    )
            })}
          
        </div>
        <NavLink to={'/Products'}> <button type="button" class="btn btn-warning">Տեսնել Ավելին․․․</button></NavLink>
        </div>
    )
}

export default Products