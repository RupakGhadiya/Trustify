import React from 'react'
import './Notification.css'
import { Link } from 'react-router-dom'
import { RiInboxArchiveFill } from 'react-icons/ri'
import { IoSend } from 'react-icons/io5'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { RiSpamFill } from 'react-icons/ri'
import { FaTrashAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import Noti_card from './noticard/Noti_card'
const Notification = () => {
  return (
    <div className='notification'>
      <div className='noti_left_side'>
        <h1 className='noti_title'>Notification</h1>
        <ul className='noti_link_name'>
          <li>
            <Link to="" className='linkaa'><span className='noti_left_logo'><RiInboxArchiveFill /></span>Inbox</Link>
          </li>
          <hr/>
          <li>
            <Link to="" className='linkaa'><span className='noti_left_logo'><IoSend /></span>Sent</Link>
          </li>
          <hr/>
          <li>
            <Link to="" className='linkaa'><span className='noti_left_logo'><IoCheckmarkDoneSharp /></span>Mark as read</Link>
          </li>
          <hr/>
          <li>
            <Link to="" className='linkaa'><spam className="noti_left_logo"><RiSpamFill /></spam>Spam</Link>
          </li>
          <hr/>
          <li>
            <Link to="" className='linkaa'><span className='noti_left_logo'><FaTrashAlt /></span>Trash</Link>
          </li>
        </ul>
        <div className='mark_all_as_read'>
          <button className='markasreadbtn'>Mark all as read</button>
        </div>
      </div>
      <div className='noti_right_side'>
      <form className="d-flex">
          <input className="form-control me-2 noti_searchbar " type="search" placeholder="Search..." aria-label="Search" />
          <button className="btn btn-outline-success searchbtn" type="submit"><BsSearch /></button>
        </form>
        <hr/>
        <Noti_card/>
      </div>
    </div>
  )
}

export default Notification