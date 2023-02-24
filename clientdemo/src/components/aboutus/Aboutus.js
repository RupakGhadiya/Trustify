import React from 'react'
import './aboutus.css'
import Aboutus from './Aboutus.jpg'
import Qrcode from './Qrcode.jpg'
import Valid from './Valid.jpg'
import Verify from './Verify.png'

const AboutUs = () => {
    return (
        <div>
            <div className='hero'>
            {/* <h1 className="heading">ABOUT US</h1> */}
                <div className='hero_container'>

                
                    <div className='left_sidehero'>
                        {<img className='aboutus' src={Aboutus} />}
                    </div>
                    <div className='right_sidehero'>
                        <h1 className='hero_text1'>ABOUT US</h1>
                        <p className='hero_text2'>Trustify is here to win your trust! 
Generate documents of all kinds; merits certificates to Appreciation Letters using templates of your choice and  not to forget a unique QR code for each document.
Register yourself, enter the right details and generate a QR code like none other. This unique QR code shall help an individual to prove the authenticity of the document and prevent any kind of duplication.</p>
                        {/* <button id='knowmore' className='form-submit knowmore'><span>Know more about Trustify</span></button> */}

                    </div>

                </div>
            </div>


            {/* ------SERVICES-------- */}
            <h1 className="heading">OUR SERVICES</h1>
            <div className="container">
            
                <div className="column">
                    <div className="card-image">
                        {<img className="verification" src={Verify} />}
                        <h2 className="card-title">Verification</h2>
                        <div className="hide">Any third party individual can scan the QR code on the document and verify whether the details being stated by document holder are true or not wrt to the specifics of the document
                        </div>
                    </div>
                </div>



                <div className="column">
                    <div className="card-image">
                        {<img className="validation" src={Valid} />}
                        <h2 className="card-title">Validation</h2>
                        <div className="hide">Our system shall help in proving the validity of the document. It means the cross-checking of the details of the issuer and receiver and specifications of the event like the date, venue, merit/participation, etc
                        </div>
                    </div>
                </div>




                <div className="column">
                    <div className="card-image">
                        {<img className="qr" src={Qrcode} />}
                        <h2 className="card-title">QR Generation</h2>
                        <div className="hide">Our system helps users generate unique QR codes for every document. This QR code is generated on the basis of the type of document and the details of it. This QR code helps prove the authenticity of the document when verified in the future
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs