import React from 'react';
import './carousel.css';

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active  bg-primary" data-interval="2000">
          <div className='row'>

            <div className="carousel-caption  col-6">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
            <div className='col-6'>
              <img src='https://via.placeholder.com/620 ' alt='' className="bg-dark" />
            </div>
          </div>
        </div>
        <div className="carousel-item bg-success" data-interval="2000">
          <div className='row h-100'>
            <div className="carousel-caption  col-6">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
            <div className='col-6'>
              <img src='https://via.placeholder.com/620 ' alt='' className="bg-dark" />
            </div>
          </div>
        </div>
        <div className="carousel-item   bg-info" data-interval="2000">
          <div className='row'>
            <div className="carousel-caption  col-6">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
            <div className='col-6'>
              <img src='https://via.placeholder.com/620 ' alt='' className="bg-dark" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
