import React from 'react'

const Navcardsnarrow = (props) => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <img className='recent_tempimg' src={props.pic} />
        </div>
      </div>
      <h5 className='recentcard_name'>{props.title}</h5>
    </div>
  )
}

export default Navcardsnarrow