import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import Body from './Body'
import Prices from './Prices'
import { FaWonSign } from "react-icons/fa";

function Header() {
    return (
        <div className='header-container'>
            <a href="#" className='logo'>
                <FaWonSign />
              <h1>Cryptocurrenzy</h1>
            </a>

            <div className='navbar-container'>
                <nav className="navbar">
                
                    <a to='/'>Home</a>
                    <a to='/prices'>Prices</a>
                    <a to='/learn'>Learn</a>
                    <a to='/signin'>Sign in</a> 
                    <a to='/signup'>Sign up</a>
                
                </nav>
            </div>
            
        </div>
    )
}

export default Header
