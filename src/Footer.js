import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faGraduationCap, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer-container'>
            
            <div className='footer-items'>
               <h2>Learn</h2>
                <i><FontAwesomeIcon icon={faGraduationCap} /></i>
               <p className='learn'>Learn about block chain and cryptocurrencies!</p>
            </div>
            
            <Link to="/prices">
               <div className='footer-items'>
                 <h2>Prices</h2>
                 <i><FontAwesomeIcon icon={faDollarSign} /></i>
                 <p>Checkout real time prices of your favorite crypto!</p>
               </div>
            </Link>

            <div className='footer-items'>
               <h2>Buying</h2>
               <i><FontAwesomeIcon icon={faMoneyBillWave}/></i>
               <p>Learn about buying and selling cryptos!</p>
            </div>
        </div>
    )
}

export default Footer
