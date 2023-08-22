import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import background from '../assets/background_about.png';

function Apropos() {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <div className="banner">
          <img src={background} alt="" />
          
        </div>
        <div className='list'>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Apropos;