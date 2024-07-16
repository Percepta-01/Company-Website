// src/components/Contact.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';



function Contact  ()  {
  const navigate = useNavigate()

  return (
    <section id="contact" className="py-5 bg-light">
      <div id='div' className="container">
        <div className="star">
          <i className="fa-solid fa-star fa-beat fa-2xl" style={{ marginLeft: "10px", marginBottom: "20px" }}></i>
          <h5 className='do'>WHAT WE DO</h5>
        </div>
        <img className='pic' src='https://i.postimg.cc/W4ppqJ14/CMP-Baunfire-Services-Creative-2.webp' alt='Creative Work' />
      </div>
      <p className='para1'>We build impactful experiences through <br></br> great UX , design and development .</p>
      <br></br>
      <Button onClick={()=> navigate("/service")}  className='btn1'>VIEW OUR SERVICES +</Button>

      {/* <div>
      <img className='pic1' src='https://i.postimg.cc/sXR4fR9f/download.jpg' ></img>
      <p className='para2'>We identify business challenges and <br></br> develop solutions to achieve your goals .</p>
      <br></br>
      </div>
      <div>
      <img className='pic2' src='https://i.postimg.cc/ncT4PcQy/images-2.jpg' ></img>
      <p className='para3'>We identify business challenges and <br></br> develop solutions to achieve your goals .</p>
      <button className='btn1'>VIEW OUR SERVICES +</button>
      <br></br>
      </div> */}
    </section>
  );
};

export default Contact;
