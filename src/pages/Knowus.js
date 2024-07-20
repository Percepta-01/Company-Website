import React from 'react'
import './Knownus.css'
import { Link } from 'react-router-dom'


function Knowus() {
  return (
    <div>
      <p className='para'>WHO WE ARE</p>

      <h1 className='hed1'>A passionate <br></br> team, rooted in<br></br> digital.</h1>


      <p className='para2' style={{marginRight:"80px"}}>Building great things in the <br></br> heart of Silicon Valley.</p>

      {/* //image */}

        <img src='https://i.postimg.cc/rwqzdH09/About-Hero-2.webp' className='img1' />

        <div className='div1'>
          <p className='para3'>A DIGITAL AGENCY</p>

          <h1 className='hed2'>Building great websites <br></br> for industry-leading <br></br> brands.</h1>

          <Link  id='work'> OUR  WORK  + </Link>

        </div>
    </div>
  )
}

export default Knowus