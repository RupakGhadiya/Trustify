import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div>
        <h1>404</h1>
        <h2> we are sorry page not found!</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <Link to='/'></Link>
    </div>
  )
}

export default Errorpage