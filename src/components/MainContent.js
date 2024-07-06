import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContent = () => {
  return (
    <main className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <h1>A digital agency focused on web.</h1>
          <p>We are a creative team of designers, developers, strategists, and producers building elevated websites in the heart of Silicon Valley.</p>
        </div>
        <div className="col-md-4">
          <h2>Sidebar</h2>
          <p>This is the sidebar content.</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
