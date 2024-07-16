import React from 'react';
import './Insights.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Insights() {
  const navigate = useNavigate()

  return (
    <div className="insights-container">
      <div className="header">
        <h1 className="title">Latest Insights</h1>
        <p className="subtitle">Our thoughts and perspectives on digital.</p>
      </div>

      <div className="insights-grid">
        <div className="insight">
          <img className="photo" src="https://i.postimg.cc/cLhWTxPs/1.jpg" alt="Insight 1" />
          <h4 className="category">WEB & DIGITAL DESIGN</h4>
          <p className="description">Website Design Briefs: A Guide to <br /> Writing a Creative RFP for <br /> Agencies</p>
        </div>

        <div className="insight">
          <img className="photo" src="https://i.postimg.cc/yxB3pSgy/2.jpg" alt="Insight 2" />
          <h4 className="category">WEB & DIGITAL DESIGN</h4>
          <p className="description">Beyond the Click: Crafting B2B <br /> Websites That Convert</p>
        </div>

        <div className="insight">
          <img className="photo" src="https://i.postimg.cc/wv382nm3/3.jpg" alt="Insight 3" />
          <h4 className="category">WEB & DIGITAL DESIGN</h4>
          <p className="description">Driving Engagement On <br /> Your Corporate Website</p>
        </div>

        <div className="insight">
          <img className="photo" src="https://i.postimg.cc/4NR44Nc5/4.jpg" alt="Insight 4" />
          <h4 className="category">WEB & DIGITAL DESIGN</h4>
          <p className="description">Crafting a Memorable Web <br /> Experience for Your Users</p>
        </div>
      </div>

      <Button onClick={() => navigate("/insights")} className="view-more-btn">VIEW MORE INSIGHTS +</Button>
    </div>
  );
}

export default Insights;