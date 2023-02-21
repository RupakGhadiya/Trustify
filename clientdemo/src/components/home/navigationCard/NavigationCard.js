import React from 'react'
import './NavigationCard.css'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { MdPendingActions } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'
import { HiOutlineIdentification } from 'react-icons/hi'
import { IoDocumentsOutline } from 'react-icons/io5'
import { BiMailSend } from 'react-icons/bi'
import { MdOutlineDevicesOther } from 'react-icons/md'
import {RiBillLine} from 'react-icons/ri'
import Navcardpages from './navcardpages/Navcardpages'

const NavigationCard = () => {
  return (
    <div>
      <div className='navcard'>
        <div className='navcard_heading'>
          <h3 className='navcard_text1'>Design for your Tommorow?</h3>
          <div className='navcard_btngroup'>
            <Link to="/qronly"><button className='genqr'>Generate QR</button></Link>
            <Link to="/verify"><button className='searchid'>Search ID</button></Link>
          </div>
        </div>
        <form className="d-flex">
          <input className="form-control me-2 searchbar" type="search" placeholder="Search..." aria-label="Search" />
          <button className="btn btn-outline-success searchbtn" type="submit"><BsSearch /></button>
        </form>
        <div className=''>
          <div class="parent">
            <div>
              <button className="round-6" id='blank'><span className='certilogo'><MdPendingActions /></span></button>
            </div>
            <div>
              <button className="round-6"><span className='certilogo'><RiBillLine /></span></button>
            </div>
            <div>
              <button className="round-6"><span className='certilogo'><TbCertificate /></span></button>

            </div>
            <div>
              <button className="round-6"><span className='certilogo'><HiOutlineIdentification /></span></button>
            </div>
            <div>
              <button className="round-6"><span className='certilogo'><IoDocumentsOutline /></span></button>
            </div>
            <div>
              <button className="round-6"><span className='certilogo'><BiMailSend /></span></button>
            </div>
            <div>
              <button className="round-6"><span className='certilogo'><MdOutlineDevicesOther /></span></button>
            </div>
          </div>
          <div className='navcardlabels'>
            <h5 id='one'>Recent</h5>
            <h5 id='two'>Bills</h5>
            <h5 id='three'>Certificate</h5>
            <h5 id='four'>ID cards</h5>
            <h5 id='five'>Documents</h5>
            <h5 id='six'>Letters</h5>
            <h5 id='seven'>Others</h5>
          </div>
        </div>
      </div>
      <Navcardpages/>
    </div>
  )
}

export default NavigationCard