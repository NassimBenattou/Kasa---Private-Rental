import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import '../sass/Navbar.scss';
import '../sass/Responsive.scss';


function Navbar() {

    return (
        <div className='navbar'>
            <img src={logo} alt="logo"/>
            <nav>
                <NavLink to="/" style={({ isActive }) => {
                        return {
                        textDecoration: isActive ? "underline" : "",
                        };
                    }}>Accueil
                </NavLink>
                <NavLink to="/apropos" style={({ isActive }) => {
                        return {
                        textDecoration: isActive ? "underline" : "",
                        };
                    }}>A Propos
                </NavLink>
            </nav>
        </div>
    )
}   

export default Navbar;