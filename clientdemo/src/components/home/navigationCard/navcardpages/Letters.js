import React from 'react'
import letter1 from '../navcardpages/pics/letters/1.jpg'
import letter2 from '../navcardpages/pics/letters/2.jpg'
import letter3 from '../navcardpages/pics/letters/3.jpg'
import letter4 from '../navcardpages/pics/letters/4.jpg'
import letter5 from '../navcardpages/pics/letters/5.jpg'

const Letters = () => {
  return (
    <div>
      <h1 className='recent_title'>Bills templets</h1>
      <div className='recent_cardgroup' style={{ gap: "2.3rem" }}>
        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={letter1} />
            </div>
          </div>
          <h5 className='recentcard_name' >Letter - 1</h5>
        </div>


        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={letter2} />
            </div>
          </div>
          <h5 className='recentcard_name'>Letter - 2</h5>
        </div>

        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={letter3} />
            </div>
          </div>
          <h5 className='recentcard_name'>Letter - 3</h5>
        </div>

        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={letter4} />
            </div>
          </div>
          <h5 className='recentcard_name'>Letter - 4</h5>
        </div>

        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={letter5} />
            </div>
          </div>
          <h5 className='recentcard_name'>Letter - 5</h5>
        </div>


        <div>
          <div class="card">
            <div class="card-body">
              <img className='recent_tempimg' src={letter1} />
            </div>
          </div>
          <h5 className='recentcard_name'>Letter - 6</h5>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Letters