import React from 'react';
import '../sass/Navbar.scss';
import '../sass/Responsive.scss';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    
    const link = useNavigate();

    return (
        <div className='navbar'>
            <img src={logo} alt="logo"/>
            <nav>
                <ul>
                    <li><a onClick={() => link('/')}>Accueil</a></li>
                    <li><a onClick={() => link('/apropos')}>À Propos</a></li>
                </ul>
            </nav>
        </div>
    )
}   

export default Navbar;