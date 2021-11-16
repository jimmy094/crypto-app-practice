import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faGraduationCap, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-items'>
               <h1>Learn</h1>
                <i><FontAwesomeIcon icon={faGraduationCap} /></i>
               <p className='learn'>Learn about block chain and cryptocurrencies!</p>
            </div>
            <div className='footer-items'>
               <h1>Prices</h1>
               <i><FontAwesomeIcon icon={faDollarSign} /></i>
               <p>Checkout real time prices of your favorite crypto!</p>
               </div>
            <div className='footer-items'>
               <h1>Buying</h1>
               <i><FontAwesomeIcon icon={faMoneyBillWave}/></i>
               <p>Learn about buying and selling cryptos!</p>
            </div>
        </div>
    )
}

export default Footer
