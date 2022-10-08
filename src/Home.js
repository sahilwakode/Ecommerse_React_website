import React from 'react';

import './Home.css';

import Product from './Product';

function Home() {
    
  return (

    <div className='home'>
        <div className="home__container">
            <img 
            className='home__image'
            src="https://pipocasclub.com.br/wp-content/uploads/2022/05/amazonprime.webp"  
            alt="" />
            {/* <video
            className='home__image'
            src='https://youtu.be/vAw8d7fDJ7k'
            /> */}

          
        </div>
        <div className="home__row">
            <Product
            id="12321341"
            title="Apple AirPods Max (Pink) "
            image="https://d2xamzlzrdbdbn.cloudfront.net/products/e3f6fd45-2c07-4d8f-82a4-c6fc6848a8eb_416x416.jpg"
            price={150.5}
            rating={5}
            />
            <Product
            id="12321342"
            title="Samsung Galaxy S20 FE (Cloud Navy, 8GB RAM, 128GB Storage)"
            image="https://images-eu.ssl-images-amazon.com/images/I/41CkKbseMGL._SX300_SY300_QL70_FMwebp_.jpg"
            price={40.3}
            rating={5}
            /> 
            <Product
            id="12321343"
            title="Wildcraft 44 Ltrs Casual Backpack (11629-Wolf_Black)"
          
            image="https://m.media-amazon.com/images/I/41Fz+sra7xL.jpg"
            price={2.17}
            rating={4}
            
            />
        </div>
        <div className="home__row">
            <Product
            id="12321345"
            title="Hercules TOP Gear A26 R1 with Shimano Gears-Matte Black"
          
            image="https://m.media-amazon.com/images/I/81XZVNnZoNL._SX522_.jpg"
            price={13.599}
            rating={4}
            />
            <Product
            id="12321346"
            title="Adidas Boy's Howzat Spike Junior 20 Cricket Shoe"
          
            image="https://m.media-amazon.com/images/I/61eMAz0Cm2L._UX695_.jpg"
            price={3.451}
            rating={4}
            />
        </div>
        <div className="home__row">
        <Product
        id="12321347"
         title="Home Theathre Mega Size dedicated for the movements of rejoicement with the dear ones"
         image="https://previews.123rf.com/images/vasabii/vasabii1212/vasabii121200004/16815816-3d-illustration-of-home-cinema-system-isolated-on-white-background.jpg"
         price={12981}
         thousandSeparator={true}
         rating={4}

        />
        <Product 
        id="12321348"
        title="Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad"
        image="https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg"
        price={115}
        rating={5}
         />
            {/* {Product}
            {Product} */}
        </div>

    </div>
  )
}

export default Home