import React from 'react'
import api from '../api'
import './css/products.css'

function Products() {
    // const [product,setProduct] = useState([])
  return (
    <div className='products'>
        {api.map((e)=>{
            return(
                <div className='product'>
                    <div className='image'>
                        <img src={e.image} alt="" />
                        </div>
                            <strong className='name'>{e.name}</strong>

                </div>
            )
        })}
    </div>
  )
}

export default Products