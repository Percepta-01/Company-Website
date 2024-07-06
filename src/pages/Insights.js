import React from 'react'
import './Insights.css';



function Insights() {
  return (
    <div><div className='div'>
        <h1 className='h1'>Latest Insights</h1>
        <p className='p'>Our thoughts and perspectives on digital.</p>
        </div>
        

        <div className='div1' >
          <div>
          <img className='photo1' src='https://i.postimg.cc/cLhWTxPs/1.jpg' />
          <h4 className='in1'>WEB & DIGITAL DESIGN</h4>
          <p className='hed1'>Website Design Briefs: A Guide to <br></br> 
          Writing a Creative RFP for <br></br> Agencies</p>
          </div>

          <div>
          <img className='photo2' src='https://i.postimg.cc/yxB3pSgy/2.jpg' />
          <h4 className='in2'>WEB & DIGITAL DESIGN</h4>
          <p className='hed2'>Beyond the Click: Crafting B2B <br></br> Websites That Convert</p>

          </div>

          <div>
          <img className='photo3' src='https://i.postimg.cc/wv382nm3/3.jpg' />
          <h4 className='in3'>WEB & DIGITAL DESIGN</h4>
          <p className='hed3'>Driving Engagement On <br></br> Your Corporate Website</p>

          </div>
          
          <div>
          <img className='photo4' src='https://i.postimg.cc/4NR44Nc5/4.jpg' />
          <h4 className='in4'>WEB & DIGITAL DESIGN</h4>
          <p className='hed4'>Crafting a Memorable Web <br></br> Experience for Your Users</p>

          </div>

        </div>
        <button className='btn'>VIEW MORE INSIGHTS +</button>

            </div>

  )
}

export default Insights