import React from 'react'
import './Verifypage.css'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import rupak from './Rupak_Ghadiya.png'
import {TbCertificate} from 'react-icons/tb'
import {AiFillTags} from 'react-icons/ai'
import {VscTypeHierarchy} from 'react-icons/vsc'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {FaBookReader} from 'react-icons/fa'

const Verifypage = () => {
  return (
    <div className='verify'>
      <div className='verify-leftside'>
        
        <img src={rupak} />
        
        <h1 className='verify_usertitle'>Rupak Ghadiya</h1>
        <h1 className='verify_iserid'>(2205501)</h1>
        <h1 className='verifymark'><VscWorkspaceTrusted /> Verified</h1>
      </div>
      <div className='verify-rightside'>

        <h1 className='orgname'>MIT ADT University</h1>
        <label className='verifylabel'><span className='verifyspanlogo'><TbCertificate /></span> Achievement
          <h2 className='certitype'>Best Team MIT</h2>
        </label>
        <div className='eventdetails'>
          <label className='verifylabel'><span className='verifyspanlogo'><AiFillTags /></span> Event Name
            <h2 className='eventname'>CodeBreak 3.0</h2>
          </label>
          <label className='verifylabeltype'><span className='verifyspanlogo'><VscTypeHierarchy /></span> Event Type
            <h2 className='eventtype'>Hackathon</h2>
          </label>
        </div>
        <div className='eventTime'>
          <label className='verifylabel'><span className='verifyspanlogo'><BsFillCalendarEventFill /></span> Valid From
            <h2 className='validfrom'>01/01/2023</h2>
          </label>
          <label className='verifylabeltill'><span className='verifyspanlogo'><BsFillCalendarCheckFill /></span> Validity
            <h2 className='validtill'>10 Years</h2>
          </label>
        </div>
        <label className='verifylabel'><span className='verifyspanlogo'><FaBookReader /></span> About Organization
          <h2 className='aboutorg'>CodeBreak 3.0 is a new era National Level Hackathon 
          organized by the skilled team of the Department of Computer Science and 
          Engineering and Information Technology, MIT ADT University.</h2>
        </label>
      </div>
    </div>
  )
}

export default Verifypage