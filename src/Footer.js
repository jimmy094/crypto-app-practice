import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faGraduationCap, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-items'>
               <h1>Learn</h1>
               <p className='learn'>Learn about block chain and cryptocurrencies!</p>
                <i><FontAwesomeIcon icon={faGraduationCap} /></i>
            </div>
            <div className='footer-items'>
               <h1>Prices</h1>
               <p>Checkout real time prices of your favorite crypto!</p>
               <i><FontAwesomeIcon icon={faDollarSign} /></i>
               </div>
            <div className='footer-items'>
               <h1>Buying</h1>
               <p>Learn about buying and selling cryptos!</p>
               <i><FontAwesomeIcon icon={faMoneyBillWave}/></i>
            </div>
        </div>
    )
}

export default Footer
