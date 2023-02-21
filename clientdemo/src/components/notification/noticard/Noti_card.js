import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import profile from './profile1.png';
import { AiOutlineStar } from 'react-icons/ai'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'


const Noti_card = () => {
    return (
        <div className='noticards'>
            <div className='noti_card '>
                <div className='card_1line'>
                    <div className='profile_pic'><img className='profile_pic' src={profile} alt="Logo" /></div>
                    <div className='name_card'><b> Rupak Ghadiya</b></div>
                    <div className='noticard_icons'>
                        <div className='delet_card'><IoCheckmarkDoneOutline /></div>
                        <div className='delet_card'><AiOutlineStar /></div>
                        <div className='delet_card'><AiOutlineDelete /></div>
                    </div>
                </div>
                <div className='message_card1'>
                    <p>Nostrud eu est pariatur occaecat. Pariatur minim deserunt elit est ad dolore. Excepteur Lorem incididunt aliquip ea Lorem esse nulla dolore non irure nisi esse anim sunt. Officia elit voluptate aute qui fugiat laboris adipisicing eu minim. Anim id sunt mollit magna tempor laboris magna ex elit et.</p>
                </div>
            </div>
            <hr/>
            <div className='noti_card '>
                <div className='card_1line'>
                    <div className='profile_pic'><img className='profile_pic' src={profile} alt="Logo" /></div>
                    <div className='name_card'><b> Rupak Ghadiya</b></div>
                    <div className='noticard_icons'>
                        <div className='delet_card'><IoCheckmarkDoneOutline /></div>
                        <div className='delet_card'><AiOutlineStar /></div>
                        <div className='delet_card'><AiOutlineDelete /></div>
                    </div>
                </div>
                <div className='message_card1'>
                    <p>Nostrud eu est pariatur occaecat. Pariatur minim deserunt elit est ad dolore. Excepteur Lorem incididunt aliquip ea Lorem esse nulla dolore non irure nisi esse anim sunt. Officia elit voluptate aute qui fugiat laboris adipisicing eu minim. Anim id sunt mollit magna tempor laboris magna ex elit et.</p>
                </div>
            </div>
            <hr/>
            <div className='noti_card '>
                <div className='card_1line'>
                    <div className='profile_pic'><img className='profile_pic' src={profile} alt="Logo" /></div>
                    <div className='name_card'><b> Rupak Ghadiya</b></div>
                    <div className='noticard_icons'>
                        <div className='delet_card'><IoCheckmarkDoneOutline /></div>
                        <div className='delet_card'><AiOutlineStar /></div>
                        <div className='delet_card'><AiOutlineDelete /></div>
                    </div>
                </div>
                <div className='message_card1'>
                    <p>Nostrud eu est pariatur occaecat. Pariatur minim deserunt elit est ad dolore. Excepteur Lorem incididunt aliquip ea Lorem esse nulla dolore non irure nisi esse anim sunt. Officia elit voluptate aute qui fugiat laboris adipisicing eu minim. Anim id sunt mollit magna tempor laboris magna ex elit et.</p>
                </div>
            </div>
            <hr/>
            <div className='noti_card '>
                <div className='card_1line'>
                    <div className='profile_pic'><img className='profile_pic' src={profile} alt="Logo" /></div>
                    <div className='name_card'><b> Rupak Ghadiya</b></div>
                    <div className='noticard_icons'>
                        <div className='delet_card'><IoCheckmarkDoneOutline /></div>
                        <div className='delet_card'><AiOutlineStar /></div>
                        <div className='delet_card'><AiOutlineDelete /></div>
                    </div>
                </div>
                <div className='message_card1'>
                    <p>Nostrud eu est pariatur occaecat. Pariatur minim deserunt elit est ad dolore. Excepteur Lorem incididunt aliquip ea Lorem esse nulla dolore non irure nisi esse anim sunt. Officia elit voluptate aute qui fugiat laboris adipisicing eu minim. Anim id sunt mollit magna tempor laboris magna ex elit et.</p>
                </div>
            </div>

        </div>
    )
}

export default Noti_card