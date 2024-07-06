import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <div>
        <i class="fa-solid fa-star fa-beat fa-2xl" style={{marginLeft:"-40px" , marginTop:"70px"}}></i>
        <h3 className='digital'>A DIGITAL AGENCY</h3>
          <div id='color' className="col">
            <p className="lead">We are a web design and development company, <br></br> building websites that drive traffic, engagement,<br></br> and conversion for
               industry-leading brands and <br></br> startups in Silicon Valley . </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
