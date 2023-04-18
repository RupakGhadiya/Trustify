import React from 'react'
import QRillustrate from '../img/QRillustrate.png'
import { Link } from 'react-router-dom'


import './hero.css'
const Demohero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero_container'>
          <div className='left_sidehero'>
            <h1 className='hero_text1'>Your one-stop destination for reliable and authentic Documents verification</h1>
            <p className='hero_text2'>Register your organization, Create your documents using our pre-designed templates or upload your own, add the resources for your documents, and we'll create your QR code, Utilize that QR code on your documents to confirm his owner.</p>
            <Link to="/abouttrustify"><button id='knowmore' className='form-submit knowmore'><span>Know more about Trustify</span></button></Link>
          </div>
          <div className='right_sidehero'>
            <img className='QRillustrate' src={QRillustrate} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Demohero