import React from 'react'
import { useEffect, useState } from "react";

const Contact = () => {

  const [userData, setUserData] = useState({name: "", email: "", message: ""});
  const userContact = async () => {
    try {
      const res = await fetch('/getdata',{
        method: "GET",
        headers:{
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      console.log(data);
      setUserData({...userData, name: data.name, email:data.email});

      if (!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userContact();
  }, []);


  // data storing 

  const handleInputs = (e) =>{
    const name = e.target.name;
    const value = e.target.value

    setUserData({ ...userData, [name]:value });
  } 

  // send data to backend 

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, message} = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, message
      })
    });

    const data = await res.json();

    if (!data){
      console.log("message not send");
    } else {
      alert("Message send");
      setUserData({...userData, message: ""})
    }
  }


  return (
    <div>
      <div>
        {/* contact info phone, email, address, etc  */}
      </div>

      {/* contact us form  */}

      <div className='contact'>
        <form method='POST' id='contact_form'>
          <input type='text' name='name' value={userData.name} placeholder='Your name' required='true' />

          <input type='email' name='email' value={userData.email} placeholder='Your Email' required='true' />

          <textarea type='text' name='message' value={userData.message} onChange={handleInputs} placeholder='Message' required='true' />

          <button onClick={contactForm} type='submit'>Send message</button>
        </form>

      </div>
    </div>
  )
}

export default Contact