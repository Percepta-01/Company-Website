import React from 'react';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Insights from './pages/Insights';
import { Route, Routes } from 'react-router-dom';
import Knowus from './pages/Knowus';
import Works from './pages/Works';
import Ourservice from './pages/Ourservice';
import Moreinsights from './pages/Moreinsights';
import NavigationBar from './components/Navbar';
import Work1 from './pages/Work1';
import Work2 from './pages/Work2';
import Work3 from './pages/Work3';
import Work4 from './pages/Work4';



function App() {
  return (
    <div className="App">
            <NavigationBar/>
      <Routes>
        <Route
          path="/"
          element={
            <>

              {/* Hero Section */}
              <Hero />

              {/* Services Section */}
              <Services />

              {/* Testimonials Section */}
              <Testimonials />

              {/* Contact Section */}
              <Contact />

              {/* {Insights} */}
              <Insights />
            </>
          }
        />

        <Route
          path="/Knowus"
          element={<Knowus />}
        />
        
        <Route
          path="/works"
          element={<Works />}
        />

        
       <Route
          path="/service"
          element={<Ourservice />}
        />

<Route
          path="/work1"
          element={<Work1 />}
        />
         <Route
          path="/work2"
          element={<Work2 />}
        />
         <Route
          path="/work3"
          element={<Work3 />}
        />
         <Route
          path="/work4"
          element={<Work4 />}
        />


         <Route
          path="/insights"
          element={<Moreinsights />}
        />
        
       




      </Routes>




      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;


// Nithin Branch


// Abhiram Branch