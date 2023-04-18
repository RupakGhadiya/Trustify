import React from 'react'
import bill1 from '../navcardpages/pics/bills/1.jpg'
import bill2 from '../navcardpages/pics/bills/2.jpg'
import bill3 from '../navcardpages/pics/bills/3.jpg'
import bill4 from '../navcardpages/pics/bills/4.jpg'
import bill5 from '../navcardpages/pics/bills/5.jpg'
import Navcardsnarrow from "./Navcardsnarrow"

const Bills = () => {
  return (
    <div>
      <h1 className='recent_title'>Bills templets</h1>
      <div className='recent_cardgroup' style={{ gap: "2.3rem" }}>

        <Navcardsnarrow pic={bill1} title="Bill 1" />

        <Navcardsnarrow pic={bill2} title="Bill 2" />

        <Navcardsnarrow pic={bill3} title="Bil 3" />

        <Navcardsnarrow pic={bill4} title="Bill 4" />

        <Navcardsnarrow pic={bill5} title="Bill 5" />

        <Navcardsnarrow pic={bill1} title="Bill 6" />

      </div>
      <hr />
    </div>
  )
}

export default Bills