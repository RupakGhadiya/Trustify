import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import './Qr.css';
import Card from 'react-bootstrap/Card';
import { BsDownload } from 'react-icons/bs'
import Qrform from "./Qrform";


const Qronly = () => {
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

        <div className="QRONLY">
            <Qrform />
            <Card className='Qronlycard'>
                <Card.Body>
                    <form className="qrform" onSubmit={downloadQRCode}>
                        <div className="qrdiv">
                            <div className="qrcode" ref={qrRef}>{qrcode}</div>
                        </div>
                        <div className="urlgroup">
                            
                            <input className="Qrurl" value={url} onChange={qrCodeEncoder} type="text" placeholder="Enter Url" />
                            <button type="submit" id="qrdownloadbtn" disabled={!url}> Download <span className='loginlogo'><BsDownload /></span></button>
                        </div>
                    </form>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Qronly;