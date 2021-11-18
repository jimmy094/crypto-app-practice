import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
// import Body from './Body'
// import Prices from './Prices'
import { FaWonSign } from "react-icons/fa";

function Header() {
    return (
        <div className='header-container'>
            <Link to="/">
                <div className='header-left'>
                <FaWonSign className='sign'/>
              <h1>Cryptocurrenzy</h1>
              </div>
            </Link>

            <div className='navbar-container'>
                <nav className="navbar">
                
                    <Link to='/'>Home</Link>
                    <Link to='/prices'>Prices</Link>
                    <Link to='/learn'>Learn</Link>
                    <Link to='/signin'>Sign in</Link> 
                    <Link to='/signup'>Sign up</Link>
                
                </nav>
            </div>
            
        </div>
    )
}

export default Header
