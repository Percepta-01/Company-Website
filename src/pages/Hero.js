import React from 'react';
import './Hero.css';
import { Link, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';



function Hero ()  {

  const navigate = useNavigate()

  return (
    <div className="hero">
      <div className="hero-content text-center text-white">
        <p className='hero-subname'>WE ARE BAUNFIRE</p>
        <h1 className='hero-title'>A digital agency <br /> focused on web.</h1>
        <p className='hero-subtitle'>We are a creative team of designers, developers, strategists, and <br /> producers building elevated websites in the heart of Silicon Valley.</p>
        <button onClick={() => navigate("/Knowus")} className='button'>GET TO KNOW US +</button>
      </div>
    </div>
  );
};

export default Hero;

