import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center text-white">
        <Link className='link' to="/contact">LET'S TALK</Link>
        <i style={{ marginRight: '-1100px' }} id='menu' className="fa-solid fa-bars fa-fade text-white fa-2xl"></i>
        <h2 className='hero-name'>BAUNFIRE</h2>
        <p className='hero-subname'>WE ARE BAUNFIRE</p>
        <h1 className='hero-title'>A digital agency <br /> focused on web.</h1>
        <p className='hero-subtitle'>We are a creative team of designers, developers, strategists, and <br /> producers building elevated websites in the heart of Silicon Valley.</p>
        <button className='button'>GET TO KNOW US +</button>
      </div>
    </div>
  );
};

export default Hero;
