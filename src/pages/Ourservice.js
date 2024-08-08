import React from 'react';
import './Ourservice.css';
import { Link } from 'react-router-dom';

function Ourservice() {
  return (
    <div>
      <p className='os1'>WHAT WE DO</p>
      <h1 className='os2'>Driving brands <br></br> forward online.</h1>
      <p className='os3'>A digital-first approach to <br></br> strategy and creative.</p>
      
      <div>
        <img className='os4' src='https://i.postimg.cc/prmrJdjZ/Services-Hero-3.webp' alt='' />
      </div>

      <div>
        <h1 className='os5'>Elevating your brand <br></br> at every touchpoint.</h1>
        <div className='services-list'>
          <ul className='left-column'>
            <li>Website Design <span>+</span></li>
            <li>UI/UX Design <span>+</span></li>
            <li>Website Development <span>+</span></li>
            <li>Insights & Analytics <span>+</span></li>
            <li>Research & Discovery <span>+</span></li>
            <li>Marketing Materials <span>+</span></li>
            <li>Competitive Analysis <span>+</span></li>
          </ul>
          <ul className='right-column'>
            <li>Responsive Web Design <span>+</span></li>
            <li>Content Management <span>+</span></li>
            <li>Corporate Identity <span>+</span></li>
            <li>Motion Graphics <span>+</span></li>
            <li>Content Strategy <span>+</span></li>
            <li>Presentations <span>+</span></li>
            <li>SEO Services <span>+</span></li>
          </ul>
        </div>
      </div>
      <div>
      <header className="App-header">
        <h1 className='os6'>Some friends we’ve <br></br> made in the process.</h1>
      </header>
      <div className="logo-grid">
        <img src='https://i.postimg.cc/BbYHGt3d/Baunfire-Client-Google-v1.webp' />
        <img  src='https://i.postimg.cc/QNfX1wq4/service-logo-nike-1.webp'/>
        <img  src='https://i.postimg.cc/BQGnqHMs/logo-03-2x.webp'/>
        <img  src='https://i.postimg.cc/yNRGYgf4/logo-01-2x.webp'/>
        <img  src='https://i.postimg.cc/PrZKDsWY/logo-05-2x.webp'/>
        <img  src='https://i.postimg.cc/MGkSD8Nw/logo-06-2x.webp'/>
        <img  src='https://i.postimg.cc/FFCwp4k6/logo-07-2x.webp'/>
        <img  src='https://i.postimg.cc/xT4J9cJP/logo-08-2x.webp'/>
        <img  src='https://i.postimg.cc/Mprpy4bb/logo-09-2x.webp'/>
        <img  src='https://i.postimg.cc/9QwvnnHB/service-logo-arlo.webp'/>
        <img  src='https://i.postimg.cc/76R3dmkg/logo-11-2x.webp'/>
        <img  src='https://i.postimg.cc/7L2Jbw8T/logo-12-2x.webp'/>

        
      </div>
    </div>


   <div className='lui'>
    <div class="timeline1">
  <ul>
    <span class="default-line1"></span>
    <span class="draw-line"></span>
    <h1 className='g11' >Design-Driven <br></br>  Strategy-led.</h1>
    <li className='sub'>
      <h1>01 Discover</h1>
      Our goal is to fully understand each client's business and the environment in which it operates. We look to completely understand the target audience and how they will interact with the digital products we deliver.        <div>
        </div> 
      </li>
      <li className='sub'>
      <h1>02 Strategize</h1>
      Our planning process turns research into a clear set of action items to meet business goals. We take this information to build the blueprint to drive more traffic and convert web visitors into web leads.        <div>
        </div> 
      </li>
      <li>
      <h1>03 Execute</h1>
      Our dedicated team of designers use their gained knowledge of your company to create visually-engaging designs with the overall user experience in mind. We're proud of every project we ship and are confident that you and your team will be as well.
        <div>
        </div> 
      </li>
      <li>
      <h1>04 Launch</h1>
      During the Implementation, our job is to translate creative into a full program that goes live. Implementation often includes an array of services, which can include design, development and search marketing.          <div> 
      </div> 
      </li>
      <li>
      <h1>05 Evolve</h1>
      Last but not least, our task is to use scientific metrics to track and analyze campaign performance. This helps us easily identify what worked and what did not, we then initiate new strategies to maximize your business goals.               <div>
        </div> 
      </li>
     

  </ul>
</div>


</div>
<div>
  <h1 className='os7'>Here's how we <br></br> can partner <br></br> together</h1>
  <img className='os8' src='https://i.postimg.cc/V67yGjR2/Services-Collaborate-1.webp'/>
  <h4 className='os9'>Project-Based</h4>
  <p className='os10'>For one-time needs that require a <br></br> more agile approach—we work with <br></br> your team on projects that have a <br></br>clearly defined brief, budget, and <br></br> timeline.</p>
  <h4 className='os11'>Agency of Record</h4>
  <p className='os12 '>An ideal fit for companies that have <br></br>ongoing design needs—we work<br></br> with you to build out the<br></br> deliverables needed to drive your<br></br> marketing efforts.</p>
</div>

<div className='e1'>
  <p className='e2'>WORK WITH US</p>
  <h1 className='e3'>Let’s work together <br></br>to build something<br></br>great.</h1>
  <Link className='e4'>SAY HELLO   +</Link>
</div>
</div>
  );
}

export default Ourservice;