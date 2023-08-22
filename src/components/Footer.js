import React from 'react';
import '../sass/Footer.scss';
import '../sass/Responsive.scss';
import logo from '../assets/logo_white.png';

function Footer() {
  return (
    <div className='footer'>
        <div className='droits'>
            <img src={logo} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer