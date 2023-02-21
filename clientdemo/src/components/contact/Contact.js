import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>
        {/* contact info phone, email, address, etc  */}
      </div>

      {/* contact us form  */}

      <div className='contact'>
        <form id='contact_form'>
          <input type='text' placeholder='Your name' required='true' />

          <input type='email' placeholder='Your Email' required='true' />

          <input type='number' placeholder='Your phone no' required='true' />


          <textarea placeholder='Message'></textarea>

          <button type='submit'>Send message</button>
        </form>

      </div>
    </div>
  )
}

export default Contact