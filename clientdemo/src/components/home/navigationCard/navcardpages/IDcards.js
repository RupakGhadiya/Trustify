import React from 'react'
import idc1 from '../navcardpages/pics/idcard_temp/1.jpg'
import idc2 from '../navcardpages/pics/idcard_temp/2.jpg'
import idc3 from '../navcardpages/pics/idcard_temp/3.jpg'
import idc4 from '../navcardpages/pics/idcard_temp/4.jpg'

const IDcards = () => {
  return (
    <div>
    <h1 className='recent_title'>ID Cards templets</h1>
    <div className='recent_cardgroup'>
      <div>
        <div class="card">
          <div class="card-body">
            <img className='recent_tempimg' src={idc1} />
          </div>
        </div>
        <h5 className='recentcard_name' >Employee ID 1</h5>
      </div>


      <div>
        <div class="card">
          <div class="card-body">
            <img className='recent_tempimg' src={idc2} />
          </div>
        </div>
        <h5 className='recentcard_name'>Employee ID 2</h5>
      </div>

      <div>
        <div class="card">
          <div class="card-body">
            <img className='recent_tempimg' src={idc3} />
          </div>
        </div>
        <h5 className='recentcard_name'>Employee ID 3</h5>
      </div>

      <div>
        <div class="card">
          <div class="card-body">
            <img className='recent_tempimg' src={idc4} />
          </div>
        </div>
        <h5 className='recentcard_name'>Employee ID 4</h5>
      </div>
    </div>
    <hr />
  </div>
  )
}

export default IDcards