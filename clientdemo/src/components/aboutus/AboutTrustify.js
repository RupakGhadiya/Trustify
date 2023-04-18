import { Container } from "react-bootstrap";
import './AboutTrustify.css';
import { useState } from "react";


const AboutTrustify = () => {

    const [serviceObj, setServiceObj] = useState("service_1");

    return (
        <>
            <Container maxWidth="sm" className="aboutus">
                <h1 className="heading">about us page</h1>
                <p>Register your organization, <br />Create your documents using our pre-designed templets or upload your own, add the resources for your documents, and we'll create your QR code, Utilize that QR code on your documents to confirm his owner.</p>
                <h1>ABOUT US</h1>
                <Container className="internalContainer">
                    <Container className="leftContainer">
                        <p>TEXT</p>
                    </Container>
                    <Container className="rightContainer">
                        <p>IMG</p>
                    </Container>
                </Container>


                <h1>OUR SERVICES</h1>
                <Container className="infoContainer">
                    <Container className="service" onClick={() => { setServiceObj("service_1") }}>
                        <h3>Service 1</h3>
                    </Container>
                    <Container className="service" onClick={() => { setServiceObj("service_2") }}>
                        <h3>Service 2</h3>
                    </Container>
                    <Container className="service" onClick={() => { setServiceObj("service_3") }}>
                        <h3>Service 3</h3>
                    </Container>
                    <Container className="service" onClick={() => { setServiceObj("service_4") }}>
                        <h3>Service 4</h3>
                    </Container>

                </Container>

                <Container className="contextContainer">
                    <Container className="leftcontext">
                        <h1>text:{serviceObj}</h1>
                    </Container>
                    <Container className="rightcontext">
                        <h1>image:{serviceObj}</h1>
                    </Container>
                </Container>



            </Container>

        </>
    );

}

export default AboutTrustify