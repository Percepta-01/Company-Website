import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import { Link, } from 'react-router-dom';



const Services = () => {

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="">
        <i class="fa-solid fa-star fa-beat fa-2xl" style={{marginLeft:"-50px"}}></i>
          <div className="col ">
            <h1 className='h1'>Featured Work</h1>
            <p className="lead">Explore some of our latest website projects..</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <img src='https://i.postimg.cc/YC0JsTWS/Baunfire-Karat-Website-Case-Study-00-Thumbnail-840x1122.webp'></img>

            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <img src='https://i.postimg.cc/L8hjg3r7/01-U-Baunfire-Case-Study-Cellares-Website-Thumbnail.webp'></img>

            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <img src='https://i.postimg.cc/m2K5mjQx/Baunfire-Case-Study-Lumana-00-Thumbnail-840x1122-A-1.webp'></img>

            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <img src='https://i.postimg.cc/Hks947NG/Baunfire-Case-Study-Ambi-Robotics-Thumbnail-Image.webp'></img>

            </div>
          </div>
        <Link to="/works" className='link1'>View More Works  + </Link>

        </div>
      </div>
    </section>
  );
};

export default Services;
