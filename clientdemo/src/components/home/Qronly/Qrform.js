import React from 'react'
// import './LoginSignup.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { BsDownload } from 'react-icons/bs'


const Qrform = () => {
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(true);

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
        <div style={{ padding: "2rem", display: "flex" }}>

            <div>
                <Form style={{ width: "100%", paddingRight: "2rem", borderRight: "2px solid gray" }}>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Institute Name</Form.Label>
                        <Form.Control placeholder="Name of institute you are register for" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Event name</Form.Label>
                            <Form.Control type="text" placeholder="Name of your event" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Event Type</Form.Label>
                            <Form.Control type="text" placeholder="eg:-(sports)" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder="what is the subject of your event" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="Date" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Valid till</Form.Label>
                            <Form.Control type="Date" placeholder="" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Location</Form.Label>
                        <Form.Control placeholder="Location, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select style={{ border: "1px solid black" }} defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Andhra Pradesh</option>
                                <option>Arunachal Pradesh</option>
                                <option>Assam</option>
                                <option>Bihar</option>
                                <option>Chhattisgarh</option>
                                <option>Goa</option>
                                <option>Gujarat</option>
                                <option>Haryana</option>
                                <option>Himachal Pradesh</option>
                                <option>Jharkhand</option>
                                <option>Karnataka</option>
                                <option>Kerala</option>
                                <option>Madhya Pradesh</option>
                                <option>Maharashtra</option>
                                <option>Manipur</option>
                                <option>Meghalaya</option>
                                <option>Mizoram</option>
                                <option>Nagaland</option>
                                <option>Odisha</option>
                                <option>Punjab</option>
                                <option>Rajasthan</option>
                                <option>Sikkim</option>
                                <option>Tamil Nadu</option>
                                <option>Telangana</option>
                                <option>Tripura</option>
                                <option>Uttar Pradesh</option>
                                <option>Uttarakhand</option>
                                <option>West Bengal</option>


                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check Terms and Condition" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>


                    <div style={{ width: '100%', marginTop: "2rem" }}>
                        <Button style={{ float: "left" }} onClick={toggleShowA} className="mb-2">
                            Register individual User
                        </Button>
                        <Toast show={showA} onClose={toggleShowA} style={{ width: '100%' }}>
                            <Toast.Header>
                                <strong className="me-auto"></strong>
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
                </Form>
            </div>




            <div style={{ width: '50%', padding: "2rem", paddingTop: "0rem" }}>
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
                                            <Form.Control style={{ width: "26.5rem" }} value={url} onChange={qrCodeEncoder} type="text" placeholder="Enter Url / User ID" />
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
    )
}

export default Qrform