import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
  return (
    <div className="foot">
      <header className="foot-header">
        <div className="logo">
          <span className="logo-icon">Λ</span>
        </div>
        <div className="tagline">
          <p>Making great things in <br></br>Silicon Valley.</p>
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
          <i id='ins' class="fa-brands fa-instagram color: #B197FC  ;"> </i>
          <i id='tw' class="fa-brands fa-twitter color: #63E6BE; "></i>
          <i id='fa' class="fa-brands fa-facebook color: #d2144d ;"></i>

        </div>
      </header>
    </div>
  );
}

export default Footer;
