import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../api'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/single.css'

function Single() {
    const { id } = useParams();
    const [prod, setProd] = useState(`product1`)

  return (
    <div key={id}>
       {
        api.map((e)=>{
            if (e.id === id) {
                return (
                    <div className='item' key={id}>
                        <div className="image">
                        <img src={e.image} alt="" />
                        </div>
                        <div className="info">
                        <strong>{e.name}</strong>
                        <div className='product-info'>
                            <p>Տեսակը։ {e[prod].name}</p>
                            <p>Գինը։ {e[prod].price}</p>
                            <p>Չափսը։ {e[prod].size}</p>
                            <p>Բարձի չափսը։ {e[prod].barc}</p>
                        </div>
                        <div className='buttons'>
                        <button type="button" className="btn btn-warning" onClick={(e)=> setProd('product1')}>Մեկ Տեղանոց</button>
                        <button type="button" className="btn btn-warning" onClick={(e)=> setProd('product2')}>Երկու Տեղանոց</button>
                        <button type="button" className="btn btn-warning" onClick={(e)=> setProd('product3')}>Ընտանեկան</button>
                        </div>
                        </div>

                    </div>
                )
            }
        })
       } 
    </div>
  )
}

export default Single