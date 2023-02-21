import React from 'react'
import '../navcardpage.css'
import certi1 from '../pics/certipics/certi1.png' 
import certi2 from '../pics/certipics/certi2.png' 
import certi3 from '../pics/certipics/certi3.png' 
import certi4 from '../pics/certipics/certi4.png'

import id1front from '../pics/IDcards/rupakidfront.png'
import id1back from '../pics/IDcards/rupakidback.png' 
const Recent = () => {
    return (
        <div>
            <h1 className='recent_title'>Recent templets</h1>
            <div className='recent_cardgroup'>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={certi1} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' >Certificate of Appreciation</h5>
                </div>


                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={certi2} />
                        </div>
                    </div>
                    <h5 className='recentcard_name'>Certificate of Achievement</h5>
                </div>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={certi3} />
                        </div>
                    </div>
                    <h5 className='recentcard_name'>Certificate Of Completion</h5>
                </div>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={certi4} />
                        </div>
                    </div>
                    <h5 className='recentcard_name'>Certificate of Participation</h5>
                </div>
            </div>
            <hr/>

            <div className='recent_cardgroup'>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={id1front} />
                            <img className='recent_tempimg' src={id1back} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' >MIT ADTU IDcards</h5>
                </div>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={id1front} />
                            <img className='recent_tempimg' src={id1back} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' >ID cards</h5>
                </div>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={id1front} />
                            <img className='recent_tempimg' src={id1back} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' >ID cards</h5>
                </div>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={id1front} />
                            <img className='recent_tempimg' src={id1back} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' >ID cards</h5>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Recent