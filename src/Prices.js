import React from 'react'
import './Prices.css'
import Priceitem from './Priceitem.js'


const cryptos = [
    {
        id: 1,
        title: 'Bitcoin',
        desc: 'Biggest crypto in the world',
        image: 'https://w7.pngwing.com/pngs/65/309/png-transparent-bitcoin-com-cryptocurrency-logo-zazzle-bitcoin-text-trademark-logo.png',
        price: '$61,000',
        blockchain: 'Bitcoin'
    },
    {
        id: 2,
        title: 'Ethereum',
        image: 'https://w7.pngwing.com/pngs/368/176/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png',
        desc: '#2 crypto in the world, smart contract platform',
        price: '$4200',
        blockchain: 'Ethereum'
    },
    {
        id: 3,
        title: 'ADA',
        image: 'https://banner2.cleanpng.com/20180616/ivg/kisspng-cardano-zug-cryptocurrency-blockchain-ethereum-bitcoin-wallet-5b257988b3ddc7.3868005515291826007367.jpg',
        desc: 'Up and coming smart contract platform',
        price: '$2.30',
        blockchain: 'Cardano'
    },
    {
        id: 4,
        title: 'Sol',
        image: 'https://logowik.com/content/uploads/images/solana-sol9611.jpg',
        desc: 'Fork of Ethereum, with added capabilities',
        price: '$210',
        blockchain: 'Solana'
    },
    {
        id: 5,
        title: 'Decentraland',
        image: 'https://cdn.dribbble.com/users/13940/screenshots/6005133/decentraland_logo.png',
        desc: 'Ethereum token used to pay for vitrual plots of land in the metaverse',
        price: '$2.30',
        blockchain: 'Ethereum'
    },
]

function Prices() {
    return (
        <div className='prices-container'>
            <h1 className='prices'>Prices</h1>
            {cryptos.map((crypto) => (
                <Priceitem 
                key={crypto.id}
                image={crypto.image}
                title={crypto.title}
                desc={crypto.desc}
                price={crypto.price}
                blockchain={crypto.blockchain}
                
                />
            )
            )}
        </div>
    )
}

export default Prices;
