import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Carousel() {
  return (
    <div>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.mobilecentre.am/img/slider/d1ba6316f5d8dff4f83a_webbigS21FeA54.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.mobilecentre.am/img/slider/51c05e3dcdd3be173e6d_webbigA342414.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.mobilecentre.am/img/slider/e943d382c6a9661a85a2_webbigS22.png" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel