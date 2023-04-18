import './Nav.css';
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSetting } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoPersonOutline } from 'react-icons/io5'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { FiLogIn } from 'react-icons/fi'
import { BiLockOpenAlt } from 'react-icons/bi'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/" className="title"><span className='span_logo'><VscWorkspaceTrusted /></span> Trustify</Link>

            <ul className='link_name'>
                <li>
                    <Link to="/home" className='linkaa'>Home</Link>
                </li>

                <li>
                    <Link to="/verify" className='linkaa'>Verify Documents</Link>
                </li>

                <li>
                    <Link to="/contactus" className='linkaa'>Contact Us</Link>

                </li>
            </ul>


            <ul className='link_icon'>
                <li>
                    <Link to="/notification" className='iconaa'><IoMdNotificationsOutline /></Link>
                </li>

                <li>
                    <Link to="/setting" className='iconaa'><AiOutlineSetting /></Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/signup" className='login' ><span className='loginlogo1'><BiLockOpenAlt /></span>Sign Up</Link>
                </li>
                <li>
                    <NavDropdown className='login' id="basic-nav-dropdown" title="Profile">
                        <NavDropdown.Item>
                            <Link to="/about" className='login'>Your Profile</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/" className='login'>Policies</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className='login'>Change Theme</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to="/login" className='login'><span className='loginlogo1'><FiLogIn /></span>Login</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </li>


            </ul>
        </nav>
    )
}