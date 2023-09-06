import React from 'react'
import Products from './Products'
import Carousel from './Carousel'
import './css/products.css'

function Home() {
  return (
    <div className='Home'>
        <Carousel/>
        <Products/>
    </div>
  )
}

export default Home