import React from 'react'
import './Priceitem.css'
//create list for each crypto
function Priceitem({title, price, desc, blockchain}) {
    return (
        <div className='price-item-container'>
            
                <div className='crypto-item'>
                    <p>{title}</p>
                </div>
                <div className='crypto-item'>
                    <p>{price}</p>
                </div>
                <div className='crypto-item'>
                    <p>{blockchain}</p>
                </div>
                <div className='crypto-item'>
                    <p>{desc}</p>
                </div>
            
        </div>
    )
}

export default Priceitem
