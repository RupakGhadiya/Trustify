import React from 'react'
import { useState } from "react";
import './NavigationCard.css'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { MdPendingActions } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'
import { HiOutlineIdentification } from 'react-icons/hi'
import { IoDocumentsOutline } from 'react-icons/io5'
import { BiMailSend } from 'react-icons/bi'
import { MdOutlineDevicesOther } from 'react-icons/md'
import { RiBillLine } from 'react-icons/ri'
import Navcardpages from './navcardpages/Navcardpages'
import Bills from './navcardpages/Bills'
import Certificate from './navcardpages/Certificate'
import Documents from './navcardpages/Documents'
import IDcards from './navcardpages/IDcards'
import Letters from './navcardpages/Letters'
import Others from './navcardpages/Others'
import Recent from './navcardpages/Recent/Recent'


const NavigationCard = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className='navcard'>
        <div className='navcard_heading'>
          <h3 className='navcard_text1'>Design for your Tommorow?</h3>
          <div className='navcard_btngroup'>
            <Link to="/qronly"><button className='genqr'>Create events</button></Link>
          </div>
        </div>
        <form className="d-flex">
          <input className="form-control me-2 searchbar" type="search" placeholder="Search..." aria-label="Search" />
          <button className="btn btn-outline-success searchbtn" type="submit"><BsSearch /></button>
        </form>
        <div className=''>
          <div class="parent">
            <div>
              <button className={toggleState === 1 ? "tabs2 active-tabs2" : "round-6"}
                onClick={() => toggleTab(1)} id='blank'><span className='certilogo'><MdPendingActions /></span></button>
            </div>
            <div>
              <button className={toggleState === 2 ? "tabs2 active-tabs2" : "round-6"}
                onClick={() => toggleTab(2)}><span className='certilogo'><RiBillLine /></span></button>
            </div>
            <div>
              <button className={toggleState === 3 ? "tabs2 active-tabs2" : "round-6"}
                onClick={() => toggleTab(3)}><span className='certilogo'><TbCertificate /></span></button>

            </div>
            <div>
              <button className={toggleState === 4 ? "tabs2 active-tabs2" : "round-6"}
                onClick={() => toggleTab(4)}><span className='certilogo'><HiOutlineIdentification /></span></button>
            </div>
            <div>
              <button className={toggleState === 5 ? "tabs2 active-tabs2" : "round-6"}
                onClick={() => toggleTab(5)}><span className='certilogo'><IoDocumentsOutline /></span></button>
            </div>
            <div>
              <button className={toggleState === 6 ? "tabs2 active-tabs2" : "round-6"}
                onClick={() => toggleTab(6)}><span className='certilogo'><BiMailSend /></span></button>
            </div>
            <div>
              <button className={toggleState === 7 ? "tabs2 active-tabs2" : "round-6"}
                onClick={() => toggleTab(7)}><span className='certilogo'><MdOutlineDevicesOther /></span></button>
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



          <div className="content-tabs">
            <div style={{padding: "0px"}} className={toggleState === 1 ? "content  active-content" : "content"} >
              <div>
              <Recent />
              </div>
            </div>


            <div className={toggleState === 2 ? "content  active-content" : "content"} >
              <div>
              <Bills />
              </div>
            </div>


            <div className={toggleState === 3 ? "content  active-content" : "content"} >
              <div>
              <Certificate />
              </div>
            </div>


            <div className={toggleState === 4 ? "content  active-content" : "content"} >
              <div>
              <IDcards />
              </div>
            </div>


            <div className={toggleState === 5 ? "content  active-content" : "content"} >
              <div>
              <Documents />
              </div>
            </div>

            <div className={toggleState === 6 ? "content  active-content" : "content"} >
              <div>
              <Letters />
              </div>
            </div>

            <div className={toggleState === 7 ? "content  active-content" : "content"} >
              <div>
              <Others />
              </div>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default NavigationCard