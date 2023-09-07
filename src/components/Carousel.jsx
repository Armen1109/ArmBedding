import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Carousel() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img src={process.env.PUBLIC_URL + '/carousel1.jpeg'} className="d-block w-100" alt="..." /> */}
          </div>
          <div className="carousel-item">
            {/* <img src={process.env.PUBLIC_URL + '/carousel2.jpeg'} className="d-block w-100" alt="..." /> */}
          </div>
          <div className="carousel-item">
            {/* <img src={process.env.PUBLIC_URL + '/carousel3.jpeg'} className="d-block w-100" alt="..." /> */}
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel