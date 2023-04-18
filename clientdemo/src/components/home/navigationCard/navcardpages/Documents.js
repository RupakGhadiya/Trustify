import React from 'react'
import doc1 from '../navcardpages/pics/documents/1.jpg'
import doc2 from '../navcardpages/pics/documents/2.jpg'
import doc3 from '../navcardpages/pics/documents/3.jpg'
import doc4 from '../navcardpages/pics/documents/4.jpg'
import doc5 from '../navcardpages/pics/documents/5.jpg'
import Navcardsnarrow from "./Navcardsnarrow"

const Documents = () => {
  return (
    <div>
      <h1 className='recent_title'>Bills templets</h1>
      <div className='recent_cardgroup' style={{ gap: "2.3rem" }}>

        <Navcardsnarrow title="Letter head 1" pic={doc1} />

        <Navcardsnarrow title="Letter head 2" pic={doc2} />

        <Navcardsnarrow title="Letter head 3" pic={doc3} />

        <Navcardsnarrow title="Letter head 4" pic={doc4} />

        <Navcardsnarrow title="Letter head 5" pic={doc5} />

        <Navcardsnarrow title="Letter head 6" pic={doc1} />
        
      </div>
      <hr />
    </div>
  )
}

export default Documents