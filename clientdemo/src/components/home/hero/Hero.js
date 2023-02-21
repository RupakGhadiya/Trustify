import React from 'react'
import './Hero.css';
import QRillustrate from './QRillustrate.png'
const Hero = () => {
    return (
        <div className='heromain'>
            <div className='hero'>
                <div className='herotext'>
                    <h1>Verify your documents in just one step!</h1>
                    <img src={QRillustrate}/>
                    <button className='herobtn1'>Generate QR</button>
                    <button className='herobtn2'>Explore More</button>
                </div>
                
            </div>
        </div>
    )
}

export default Hero