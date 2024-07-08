import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <div className="foot">
      <header className="foot-header">
        <div className="logo">
          <span className="logo-icon">Λ</span>
        </div>
        <div className="tagline">
          <p>Making great things in Silicon Valley.</p>
        </div>
        <div className="contact">
          <h2>GET IN TOUCH</h2>
          <a href="mailto:hello@baunfire.com">hello@baunfire.com</a>
          <p>(408) 899-8998</p>
        </div>
        <div className="explore">
          <h2>EXPLORE</h2>
          <ul>
            <li><a href="#">Work</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Insights</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <address>75 E Santa Clara St, Ste 1425 San Jose, California 95113</address>
        </div>
        <div className="social-media">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </header>
    </div>
  );
}

export default Footer;
