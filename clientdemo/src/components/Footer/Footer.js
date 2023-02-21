import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGoogle} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div style={{ fontSize: '2rem' }}>
          <a href='' className='me-4 text-reset' bgColor='light'>
            <FaFacebookF fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiOutlineTwitter fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiOutlineGoogle fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiOutlineInstagram fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiFillLinkedin fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiFillGithub fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <Link to="/" className="title"><span className='span_logo'><VscWorkspaceTrusted /></span> Trustify</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Queries</h6>
              <p>
                <a href='#!' className='text-reset'>
                  AboutUs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Faqs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Demo Videos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Policies
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Generate QR
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Verify ID
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  ContactUs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                
              </p>
              <p>
                
              </p>
              <p>

              </p>
              <p>

              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         
        </a>
      </div>
    </MDBFooter>
  );
}