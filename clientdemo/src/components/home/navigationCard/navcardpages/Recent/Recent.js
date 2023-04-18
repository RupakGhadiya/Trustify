import React from 'react'
import '../navcardpage.css'
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import certi1 from '../pics/certipics/certi1.png'
import certi2 from '../pics/certipics/certi2.png'
import certi3 from '../pics/certipics/certi3.png'
import certi4 from '../pics/certipics/certi4.png'
import mit from '../pics/mit.png'

import id1front from '../pics/IDcards/rupakidfront.png'
import id1back from '../pics/IDcards/rupakidback.png'


import ToastContainer from 'react-bootstrap/ToastContainer';



const Recent = () => {
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [showD, setShowD] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    const toggleShowC = () => setShowC(!showC);
    const toggleShowD = () => setShowD(!showD);

    const [position, setPosition] = useState('top-start');

    return (
        <div>
            <h1 className='recent_title'>Recent templets</h1>
            <div className='recent_cardgroup'>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={certi1} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' onClick={toggleShowA} >Certificate of Appreciation</h5>
                </div>
                <ToastContainer >
                    <Toast style={{ width: "72rem", height: "36rem" }} show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <strong className="me-auto">Recent Design</strong>
                        </Toast.Header>
                        <Toast.Body style={{ display: "flex" }}>
                            <img style={{ objectFit: "fill", width: "52rem", height: "32rem" }} className='recent_tempimg' src={certi1} />
                            <br /><hr />
                            <div style={{ padding: "2rem", width: "100%" }}>
                                <h3 style={{ textAlign: "left", marginBottom: "1rem", fontWeight: "600" }}>Certificate of Appreciation to Rupak Ghadiya</h3>
                                <h6 style={{ marginBottom: "3rem" }}>Template no: 3214</h6>
                                <div style={{ display: "flex", marginBottom: "1rem" }}>
                                    <div>
                                        <img style={{ width: "4rem" }} src={mit} />
                                    </div>
                                    <div>
                                        <h8>BY: MIT ADT University</h8><br />
                                        <h8>ON: 12/01/2021</h8>
                                    </div>
                                </div>
                                <Button style={{ width: "100%", marginBottom: "1rem" }} variant="primary">Edit</Button><br />
                                <Button style={{ width: "100%", marginBottom: "1rem", border: "2px solid #0d6efd" }} variant="outline-primary">Make a copy</Button><br />
                                <Button style={{ width: "100%", marginBottom: "1rem", border: "2px solid #0d6efd" }} variant="outline-primary">Share this Template</Button>
                            </div>
                        </Toast.Body>
                    </Toast>
                </ToastContainer>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={certi2} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' onClick={toggleShowB}>Certificate of Achievement</h5>
                </div>
                <ToastContainer >
                    <Toast style={{ width: "72rem", height: "36rem" }} show={showB} onClose={toggleShowB}>
                        <Toast.Header>
                            <strong className="me-auto">Recent Design</strong>
                        </Toast.Header>
                        <Toast.Body style={{ display: "flex" }}>
                            <img style={{ objectFit: "fill", width: "52rem", height: "32rem" }} className='recent_tempimg' src={certi2} />
                            <br /><hr />
                            <div style={{ padding: "2rem", width: "100%" }}>
                                <h3 style={{ textAlign: "left", marginBottom: "1rem", fontWeight: "600" }}>Certificate of Achievement to Vaidehi Yogesh Devi</h3>
                                <h6 style={{ marginBottom: "3rem" }}>Template no: 8224</h6>
                                <div style={{ display: "flex", marginBottom: "1rem" }}>
                                    <div>
                                        <img style={{ width: "4rem" }} src={mit} />
                                    </div>
                                    <div>
                                        <h8>BY: MIT ADT University</h8><br />
                                        <h8>ON: 12/01/2021</h8>
                                    </div>
                                </div>
                                <Button style={{ width: "100%", marginBottom: "1rem" }} variant="primary">Edit</Button><br />
                                <Button style={{ width: "100%", marginBottom: "1rem", border: "2px solid #0d6efd" }} variant="outline-primary">Make a copy</Button><br />
                                <Button style={{ width: "100%", marginBottom: "1rem", border: "2px solid #0d6efd" }} variant="outline-primary">Share this Template</Button>
                            </div>
                        </Toast.Body>
                    </Toast>
                </ToastContainer>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={certi3} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' onClick={toggleShowC}>Certificate Of Completion</h5>
                </div>
                <ToastContainer >
                    <Toast style={{ width: "72rem", height: "36rem" }} show={showC} onClose={toggleShowC}>
                        <Toast.Header>
                            <strong className="me-auto">Recent Design</strong>
                        </Toast.Header>
                        <Toast.Body style={{ display: "flex" }}>
                            <img style={{ objectFit: "fill", width: "52rem", height: "32rem" }} className='recent_tempimg' src={certi3} />
                            <br /><hr />
                            <div style={{ padding: "2rem", width: "100%" }}>
                                <h3 style={{ textAlign: "left", marginBottom: "1rem", fontWeight: "600" }}>Certificate Of Completion to Yashi Pandey</h3>
                                <h6 style={{ marginBottom: "3rem" }}>Template no: 4327</h6>
                                <div style={{ display: "flex", marginBottom: "1rem" }}>
                                    <div>
                                        <img style={{ width: "4rem" }} src={mit} />
                                    </div>
                                    <div>
                                        <h8>BY: MIT ADT University</h8><br />
                                        <h8>ON: 12/01/2021</h8>
                                    </div>
                                </div>
                                <Button style={{ width: "100%", marginBottom: "1rem" }} variant="primary">Edit</Button><br />
                                <Button style={{ width: "100%", marginBottom: "1rem", border: "2px solid #0d6efd" }} variant="outline-primary">Make a copy</Button><br />
                                <Button style={{ width: "100%", marginBottom: "1rem", border: "2px solid #0d6efd" }} variant="outline-primary">Share this Template</Button>
                            </div>
                        </Toast.Body>
                    </Toast>
                </ToastContainer>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={certi4} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' onClick={toggleShowD}>Certificate of Participation</h5>
                </div>
                <ToastContainer >
                    <Toast style={{ width: "72rem", height: "36rem" }} show={showD} onClose={toggleShowD}>
                        <Toast.Header>
                            <strong className="me-auto">Recent Design</strong>
                        </Toast.Header>
                        <Toast.Body style={{ display: "flex" }}>
                            <img style={{ objectFit: "fill", width: "52rem", height: "32rem" }} className='recent_tempimg' src={certi4} />
                            <br /><hr />
                            <div style={{ padding: "2rem", width: "100%" }}>
                                <h3 style={{ textAlign: "left", marginBottom: "1rem", fontWeight: "600" }}>Certificate of Participation to Rushikesh Bhujbal</h3>
                                <h6 style={{ marginBottom: "3rem" }}>Template no: 9654</h6>
                                <div style={{ display: "flex", marginBottom: "1rem" }}>
                                    <div>
                                        <img style={{ width: "4rem" }} src={mit} />
                                    </div>
                                    <div>
                                        <h8>BY: MIT ADT University</h8><br />
                                        <h8>ON: 12/01/2021</h8>
                                    </div>
                                </div>
                                <Button style={{ width: "100%", marginBottom: "1rem" }} variant="primary">Edit</Button><br />
                                <Button style={{ width: "100%", marginBottom: "1rem", border: "2px solid #0d6efd" }} variant="outline-primary">Make a copy</Button><br />
                                <Button style={{ width: "100%", marginBottom: "1rem", border: "2px solid #0d6efd" }} variant="outline-primary">Share this Template</Button>
                            </div>
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
            <hr />

            <div className='recent_cardgroup'>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={id1front} />
                            <img className='recent_tempimg' src={id1back} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' >MIT ADTU IDcards</h5>
                </div>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={id1front} />
                            <img className='recent_tempimg' src={id1back} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' >ID cards</h5>
                </div>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={id1front} />
                            <img className='recent_tempimg' src={id1back} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' >ID cards</h5>
                </div>

                <div>
                    <div class="card">
                        <div class="card-body">
                            <img className='recent_tempimg' src={id1front} />
                            <img className='recent_tempimg' src={id1back} />
                        </div>
                    </div>
                    <h5 className='recentcard_name' >ID cards</h5>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Recent