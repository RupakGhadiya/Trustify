import React from 'react'
// import './LoginSignup.css'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TbArrowNarrowRight } from 'react-icons/tb'
import { MdSupervisorAccount } from 'react-icons/md'
import { Si1Password } from 'react-icons/si'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Qronly from './Qronly';

import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { BsDownload } from 'react-icons/bs'


const Qrform = () => {
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);



    // QR gen 

    const [url, setUrl] = useState("");
    const qrRef = useRef();
    const downloadQRCode = (e) => {
        e.preventDefault();
        let canvas = qrRef.current.querySelector("canvas");
        let image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = image;
        anchor.download = `qr-code.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        setUrl("");
    };
    const qrCodeEncoder = (e) => {
        setUrl(e.target.value);
    };

    const qrcode = (
        <QRCodeCanvas
            id="qrCode"
            value={url}
            size={200}
            // bgColor={"#00ff00"}
            level={"H"}
        />
    );


    return (
        <div className='Qrform'>
            <Card className='qrCard'>
                <Card.Body>
                    <Form >
                        <div className="qrwrapper">
                            <div className="inner-warpper text-center">
                                <h2 className="title1"><b>Welcome!</b></h2><br /><br /><br></br>
                                <h5 className="title2">Please fill up the form to create your event  </h5>
                                <h5 className="title2">Create a event and upload a information about the documents which you want to make a Qr of in excel formate and we will send you a list of a QRs.  </h5>
                                <form action="" id="formvalidate">
                                    <div className="input-group inputgroup" >
                                        <input className="form-control input2" name="userName" id="userName" type="text" placeholder=" Institute Name " />
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div className="input-group inputgroup">
                                            <input className="form-control input2" name="userPassword" id="userPassword" type="text" placeholder=" Event Name" />
                                        </div>
                                        <div className="input-group inputgroup">
                                            <input className="form-control input2" name="userPassword" id="userPassword" type="text" placeholder=" Event Type" />
                                        </div>
                                    </div>
                                    <div className="input-group inputgroup" >
                                        <input className="form-control input2" name="userName" id="userName" type="text" placeholder=" Subject " />
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
                                    </div>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label style={{ float: "left" }}>Upload Excel</Form.Label>
                                        <Form.Control type="file" multiple  />
                                    </Form.Group>
                                    <div>
                                        <button type="submit" id="login">Create Event <span className='loginlogo'><TbArrowNarrowRight /></span></button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
                <hr />
                <div style={{ display: 'flex', textAlign: "center" }}>
                    <div style={{ width: '50%', borderRight: "2px solid gray", padding: "1rem" }}>
                        <Button onClick={toggleShowA} className="mb-2">
                            Register individual User
                        </Button>
                        <Toast show={showA} onClose={toggleShowA} style={{ width: '100%' }}>
                            <Toast.Header>
                                <strong className="me-auto">Register individual User</strong>
                            </Toast.Header>
                            <Toast.Body>
                                <h5 className="title2">   if making an individual entry, provide us appropriate information.</h5>
                                <br /><hr />
                                <form action="" id="formvalidate">
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label style={{ float: "left" }}>Reciever's Image</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Event Type" />
                                    </Form.Group>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                            <Form.Control style={{ width: "15.4rem" }} type="email" placeholder="Full name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                            <Form.Control style={{ width: "15.3rem" }} type="email" placeholder="Achievement / Subject" />
                                        </Form.Group>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem', width: "100%" }}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label style={{ float: "left" }}>Start Date</Form.Label>
                                            <Form.Control style={{ width: "15.4rem" }} type="date" placeholder="Start Date" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label style={{ float: "left" }}>Valid till</Form.Label>
                                            <Form.Control style={{ width: "15.3rem" }} type="date" placeholder="Valid till" />
                                        </Form.Group>
                                    </div>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ float: "left" }}>About Event</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <div>
                                        <Button variant="outline-primary" style={{ width: "100%" }}>Submit</Button>
                                    </div>

                                </form>
                            </Toast.Body>
                        </Toast>
                    </div>


                    <div style={{ width: '50%', padding: "1rem" }}>
                        <Button onClick={toggleShowB} className="mb-2">
                            Generate QR directly
                        </Button>
                        <Toast show={showB} onClose={toggleShowB} style={{ width: '100%' }}>
                            <Toast.Header>
                                <strong className="me-auto">Generate QR directly</strong>
                            </Toast.Header>
                            <Toast.Body>
                                <h5 className="title2">Simply enter the URL of your verification page if you have lost your QR code.</h5>
                                <br /><hr />
                                <Card className='Qronlycard'>
                                    <Card.Body>

                                        <form className="qrform" onSubmit={downloadQRCode}>
                                            <div className="qrdiv" style={{ marginLeft: "6rem" }}>
                                                <div className="qrcode" ref={qrRef}>{qrcode}</div>
                                            </div><br />
                                            <div className="urlgroup">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control style={{ width: "28.5rem" }} value={url} onChange={qrCodeEncoder} type="text" placeholder="Enter Url / User ID" />
                                                </Form.Group>
                                                <button type="submit" id="qrdownloadbtn" disabled={!url}><BsDownload /></button>
                                            </div>
                                        </form>
                                    </Card.Body>
                                </Card>
                            </Toast.Body>
                        </Toast>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Qrform