import React from 'react'
import certi1 from '../navcardpages/pics/certificate_temp/1.jpg'
import certi2 from '../navcardpages/pics/certificate_temp/2.jpg'
import certi3 from '../navcardpages/pics/certificate_temp/3.jpg'
import certi4 from '../navcardpages/pics/certificate_temp/4.jpg'

const Certificate = () => {
  return (
    <div>
      <h1 className='recent_title'>Bills templets</h1>
      <div className='recent_cardgroup'>
        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={certi1} />
            </div>
          </div>
          <h5 className='recentcard_name' >Certificate 1</h5>
        </div>


        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={certi2} />
            </div>
          </div>
          <h5 className='recentcard_name'>Certificate 2</h5>
        </div>

        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={certi3} />
            </div>
          </div>
          <h5 className='recentcard_name'>Certificate 3</h5>
        </div>

        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={certi4} />
            </div>
          </div>
          <h5 className='recentcard_name'>Certificate 4</h5>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Certificate