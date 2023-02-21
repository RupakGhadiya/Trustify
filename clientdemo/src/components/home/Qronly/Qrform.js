import React from 'react'
// import './LoginSignup.css'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TbArrowNarrowRight } from 'react-icons/tb'
import { MdSupervisorAccount } from 'react-icons/md'
import { Si1Password } from 'react-icons/si'

const Qrform = () => {
    return (
        <div className='Qrform'>
            <Card className='qrCard' style={{ width: '94%' }}>
                <Card.Body>
                    <Form >
                        <div className="qrwrapper">
                            <div className="inner-warpper text-center">
                                <h2 className="title1"><b>Welcome!</b></h2><br/><br/><br></br>
                                <h5 className="title2">Please fill up the form to register your Organiztion or just enter url above to Generate QR </h5>
                                <form action="" id="formvalidate">
                                    <div className="input-group inputgroup" >
                                        <input className="form-control input2" name="userName" id="userName" type="text" placeholder=" Institute Name " />
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div className="input-group inputgroup">
                                            <input className="form-control input2" name="userPassword" id="userPassword" type="text" placeholder=" Receiver's First Name" />
                                        </div>
                                        <div className="input-group inputgroup">
                                            <input className="form-control input2" name="userPassword" id="userPassword" type="text" placeholder=" Receiver's Last Name" />
                                        </div>
                                    </div>
                                    <div className="input-group inputgroup" style={{ width: '49.5%' }}>
                                        <input className="form-control input2" name="userName" id="userName" type="text" placeholder=" Certificate Type " />
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div className="input-group inputgroup">
                                            <input className="form-control input2" name="userPassword" id="userPassword" type="text" placeholder=" Event Name" />
                                        </div>
                                        <div className="input-group inputgroup">
                                            <input className="form-control input2" name="userName" id="userName" type="text" placeholder=" Event Type " />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div className="input-group inputgroup">
                                            <input className="form-control input2" name="userName" id="userName" type="date" placeholder=" Start Date " />
                                        </div>
                                        <div className="input-group inputgroup">
                                            <input className="form-control input2" name="userPassword" id="userPassword" type="date" placeholder="Valid Till" />
                                        </div>
                                    </div>
                                    <div className="input-group inputgroup" style={{ height: '10rem' }}>
                                        <input className="form-control input2" name="userPassword" id="userPassword" type="message" placeholder=" About Organization" />
                                    </div><br></br>
                                    <div>
                                        <button type="submit" id="login"> Submit <span className='loginlogo'><TbArrowNarrowRight /></span></button>
                                    </div><br></br><br></br>

                                </form>
                            </div>
                        </div>
                    </Form>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Qrform