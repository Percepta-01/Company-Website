import React from 'react'
import './Knownus.css'
import { Link } from 'react-router-dom'


function Knowus() {
  return (
    <div>
      <p className='para'>WHO WE ARE</p>

      <h1 className='a1'>A passionate <br></br> team, rooted in<br></br> digital.</h1>


      <p className='para2' style={{marginRight:"80px"}}>Building great things in the <br></br> heart of Silicon Valley.</p>

      {/* //image */}

        <img src='https://i.postimg.cc/rwqzdH09/About-Hero-2.webp' className='a2' />

        <div className='div1'>
          <p className='para3'>A DIGITAL AGENCY</p>

          <h1 className='hed2'>Building great websites <br></br> for industry-leading <br></br> brands.</h1>

          <Link  id='work'> OUR  WORK  + </Link>

        </div>
        <div class="header">
</div>

<div class="timeline">
  <ul>
    <span class="default-line"></span>
    <span class="draw-line"></span>
    <h1 className='g1' >Our <br></br> Culture,<br></br>Values,and <br></br> beliefs.</h1>
    <li className='sub'>
      <h1>Forward-Thinking</h1>
      We pride ourselves on pushing the boundaries of digital design and development. We combine relevant trends and best practices to build platforms with longevity.
        <div>
        </div> 
      </li>
      <li className='sub'>
      <h1>Constant Growth</h1>
      Our team is composed of ambitious creatives and strategists; each member is dedicated to perfecting their craft and taking brands to the next level.
        <div>
        </div> 
      </li>
      <li>
      <h1>Well-Deserved Benefits</h1>
      Medical, dental, and vision coverage. Paid vacation, sick days, and a 401(k) plan. Sweeping views in the heart of Downtown San Jose. Dim sum and boba runs. Our team deserves it all.

        <div>
        </div> 
      </li>
      <li>
      <h1>Detail-Oriented</h1>
      We sweat the small stuff, because we believe that the details make the design. A time-tested and true platform values quality over quantity.        <div>
        </div> 
      </li>
      <li>
      <h1>Great Character</h1>
      More than skill, drive, or experience, great work is rooted in character; hiring the right people and investing in personal development is essential to our growth.          <div>
        </div> 
      </li>
      <li>  <h1>Self-Starting</h1>
      Having an entrepreneurial mindset ensures that every member of our team proudly takes ownership of each project, from concept to execution.        <div> 
        </div>
      </li>
      <li>
      <h1>Stay Humble</h1>
      We stand up for what we believe in, but never let ego get in the way. The key to growth is to embrace feedback and from team members and clients.           <div>
        </div> 
      </li>
      <li>
      <h1>Work Hard, Play Hard</h1>
      Sometimes the late nights, early mornings, and long design sprints call for strong drinks with good company. We value hard work and celebrate accordingly.         <div>
        </div> 
      </li>

  </ul>
</div>

<header className="App-header">
        <div className="container">
          <h1>Awards we've earned along the way.</h1>
          <div className="awards">
          <img className='im1' src='https://i.postimg.cc/906d5GdH/logo-awwwards.webp'  />
  <img className='im2' src='https://i.postimg.cc/NMxcR84G/logo-aaf.webp'  />
  <img className='im3' src='https://i.postimg.cc/vmzqz0pK/award-opl.webp'  />
  <img className='im4' src='https://i.postimg.cc/yNQ5KfvZ/logo-addy.webp'  />
  <img className='im5' src='https://i.postimg.cc/cJg7KXdY/logo-cssda.webp'  />

          </div>
        </div>
      </header>
      <div>
        <img className='test' src='https://i.postimg.cc/YSdZ6QyM/About-Testimonial-1.webp' />
        <h1 className='hed4'>Making each of our<br></br> clients happy, one <br></br> project at a time.</h1>


<div className="timeline">
  <ul>
    <span className="default-line"></span>
    <span className="draw-line"></span>
    <h1>NETGEAR</h1>
      <li>Baunfire leads all web and digital efforts for my Fortune 500 company, and I could not be more impressed. Their project management and design teams are second to none.
        <div>
          <p className='pa'> --- Chris Salazar, Director of Digital Strategy, at Netgear</p>
        </div> 
      </li>
      <h1>Pulse Secure</h1>
      <li>An unbelievable team with incredible talent. I would recommend Baunfire to anyone looking for a highly creative digital agency.
        <div>
          <p className='pa'> --- Adam Jaques, Director of Worldwide Marketing at Pulse Secure</p>
        </div> 
      </li>
      <h1 >Maximum Integrated</h1>
      <li>Great team, easy to work with, timely support, exceptional results.
        <div>
          <p className='pa'> --- Dmitry Lipkin, Marketing Executive at Maxim Integrated</p>
        </div> 
      </li>
      
  </ul>
</div>
</div>
<div className='c1'>
  <p className='c2'>A DIGITAL AGENCY</p>
  <h1 className='c3'>Making great things in <br></br> the heart of Silicon <br></br> Valley.</h1>

</div>
<div>
  <h1 className='d1'>Studio <br></br> views</h1>
  <p className='d2'>A look at where we work and play,<br></br> with sweeping views of Downtown <br></br> San Jose.</p>
  <img className='d3' src='https://i.postimg.cc/8Px2Ts4w/About-Gallery-04.webp'/>

</div>
<div className='e1'>
  <p className='e2'>WORK WITH US</p>
  <h1 className='e3'>Let’s work together <br></br>to build something<br></br>great.</h1>
  <Link className='e4'>SAY HELLO   +</Link>
</div>

    </div>
  )
}

export default Knowus
