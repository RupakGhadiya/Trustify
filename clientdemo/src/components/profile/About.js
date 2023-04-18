// for dynamic data video#34

import { useEffect, useState } from "react";
import "./about.css";
import Alert from 'react-bootstrap/Alert';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ignite from './pics/events/ignite.png'
import mit from './pics/events/mit.png'
import HL from './pics/events/HL.png'
import persona from './pics/events/persona.png'
import vsm from './pics/events/vsm.png'
import { AiOutlineDeploymentUnit } from "react-icons/ai"
import { GrOverview } from "react-icons/gr"
import { MdOutlineEmojiEvents } from "react-icons/md"
import { AiOutlineStar } from "react-icons/ai"
import { TbWebhook } from "react-icons/tb"
import { BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { GrOrganization } from "react-icons/gr"
import { VscGroupByRefType } from "react-icons/vsc"
import { GoLocation } from "react-icons/go"
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';



function Profile() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };




  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about',{
        method: "GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      // navigate('/login')
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div>
      <div className='profile'>
        <form method="GET">
          <div className='profile-leftside'>
            <img src={mit} />
            <h5 style={{ textAlign: "center", marginTop: "1rem" }}>ID:123AC452</h5>
          </div>
        </form>
        <div className='verify-rightside'>
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <AiOutlineDeploymentUnit /> Profile
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <GrOverview /> Overview
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <MdOutlineEmojiEvents /> Events
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              <AiOutlineStar /> Stars
            </button>
          </div>

          <div className="content-tabs">
            <div className={toggleState === 1 ? "content  active-content" : "content"} >
              <div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Card style={{ width: "100%", marginTop: "1rem", marginBottom: "1rem" }}>
                    <Card.Header style={{ backgroundColor: "white", border: "0px " }} as="h6"><GrOrganization /> | MIT ADT University</Card.Header>
                  </Card>

                  <Card style={{ width: "100%", marginTop: "1rem", marginBottom: "1rem" }}>
                    <Card.Header style={{ backgroundColor: "white", border: "0px" }} as="h6"><VscGroupByRefType /> | Education Institute</Card.Header>
                  </Card>
                </div>
                <h9>Address</h9>
                <Card style={{ width: "100%", marginTop: ".3rem", marginBottom: "1rem" }}>
                  <Card.Header style={{ backgroundColor: "white", border: "0px" }} as="h6"><GoLocation /> | MIT ADT Campus, Rajbaugh, Solapur - Pune Hwy, near Bharat Petrol Pump, Loni Kalbhor, Maharashtra 412201</Card.Header>
                </Card>
                <h9>About institute</h9>
                <Card style={{ width: "100%", marginTop: ".3rem", marginBottom: "1rem" }}>
                  <Card.Header style={{ backgroundColor: "white", border: "0px" }} as="h8">The MIT Art, Design and Technology University is an autonomous private university in Rajbaug Loni Kalbhor, Pune, Maharashtra, India. It is part of the MIT Group of Institutions.It is a UGC recognized multidisciplinary University and has been bestowed with the 'Best Campus Award' by ASSOCHAM.</Card.Header>
                </Card>
                <h9>Social</h9>
                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                  <Alert.Link style={{ fontSize: "1.3rem", marginTop: ".3rem" }} href="https://mituniversity.ac.in/"><TbWebhook /></Alert.Link>

                  <Alert.Link style={{ fontSize: "1.3rem", marginTop: ".3rem" }} href="https://www.instagram.com/mitadtuniversity/"><BsInstagram /></Alert.Link>

                  <Alert.Link style={{ fontSize: "1.3rem", marginTop: ".3rem" }} href="https://www.linkedin.com/school/mitadtuniversity/"><FaLinkedinIn /></Alert.Link>
                </div>
              </div>
            </div>

            <div className={toggleState === 2 ? "content  active-content" : "content"} >
              <div style={{ display: "flex", gap: "3rem", marginTop: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Card style={{ width: "20rem" }}>
                    <Card.Header as="h5">Events</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <NavDropdown style={{ width: "15rem" }} id="basic-nav-dropdown" title="Total:- 8 Events">
                          <NavDropdown.Item>
                            Sports   <span style={{ float: "right" }}>since:- 10</span>Y
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            Persona   <span style={{ float: "right" }}>since:- 4Y</span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            CodeBreak   <span style={{ float: "right" }}>since:- 4Y</span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            AIC   <span style={{ float: "right" }}>since:- 2Y</span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            IGNITE   <span style={{ float: "right" }}>since:- 4Y</span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            ADT Talks   <span style={{ float: "right" }}>since:- 5Y</span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            Human Library.<span style={{ float: "right", marginLeft: "25px" }}>since:- 3Y</span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            VSM   <span style={{ float: "right" }}>since:- 5Y</span>
                          </NavDropdown.Item>

                        </NavDropdown>

                      </Card.Title><br />
                    </Card.Body>
                  </Card>
                </div>


                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Card style={{ width: "20rem" }}>
                    <Card.Header as="h5">Documents Created</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <NavDropdown style={{ width: "18rem" }} id="basic-nav-dropdown" title="Total:- 4 Documents">
                          <NavDropdown.Item>
                            Certificate <span style={{ float: "right" }}>Total:- 25 Events</span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            Bills   <span style={{ float: "right" }}>Total:- 15 Events</span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            ID Cards   <span style={{ float: "right", marginLeft: "30px" }}>Total:- 16 Department</span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            Letters   <span style={{ float: "right" }}>Total:- 25 Events</span>
                          </NavDropdown.Item>
                        </NavDropdown>

                      </Card.Title><br />
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>

            <div className={toggleState === 3 ? "content  active-content" : "content"}>

              <div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: "1rem" }}>
                  <div >
                    <Card style={{ width: '17rem', marginBottom: '1rem', border: "2px solid black" }}>
                      <Card.Img style={{ objectFit: "cover" }} variant="top" src={mit} />
                      <Card.Body>
                        <Card.Title>Sports</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                  <div>
                    <Card style={{ width: '17rem', border: "2px solid black" }}>
                      <Card.Img style={{ objectFit: "contain", height: "8.5rem" }} variant="top" src={persona} />
                      <Card.Body>
                        <Card.Title>Persona</Card.Title>
                      </Card.Body>

                    </Card>
                  </div>
                  <div>
                    <Card style={{ width: '17rem', border: "2px solid black" }}>
                      <Card.Img variant="top" src={mit} />
                      <Card.Body>
                        <Card.Title>AIC</Card.Title>

                      </Card.Body>
                    </Card>
                  </div>
                </div>


                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div>
                    <Card style={{ width: '17rem', marginBottom: '1rem', border: "2px solid black" }}>
                      <Card.Img variant="top" src={mit} />
                      <Card.Body>
                        <Card.Title>CodeBreak</Card.Title>

                      </Card.Body>
                    </Card>
                  </div>
                  <div>
                    <Card style={{ width: '17rem', border: "2px solid black" }}>
                      <Card.Img variant="top" src={mit} />
                      <Card.Body>
                        <Card.Title>ADT Talks</Card.Title>

                      </Card.Body>
                    </Card>
                  </div>
                  <div>
                    <Card style={{ width: '17rem', border: "2px solid black" }}>
                      <Card.Img style={{ objectFit: "contain", height: "8.5rem" }} variant="top" src={ignite} />
                      <Card.Body>
                        <Card.Title>IGNITE</Card.Title>

                      </Card.Body>
                    </Card>
                  </div>
                </div>


                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div>
                    <Card style={{ width: '17rem', marginBottom: '1rem', border: "2px solid black" }}>
                      <Card.Img style={{ objectFit: "contain", height: "8.5rem" }} variant="top" src={HL} />
                      <Card.Body>
                        <Card.Title>Human Library</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                  <div>
                    <Card style={{ width: '17rem', border: "2px solid black" }}>
                      <Card.Img style={{ objectFit: "contain", height: "8.5rem" }} variant="top" src={vsm} />
                      <Card.Body>
                        <Card.Title>VSM (Sports)</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>

            </div>

            <div className={toggleState === 4 ? "content  active-content" : "content"}>
              <div style={{ display: 'flex', gap: '1rem', marginTop: "1rem" }}>
                <div >
                  <Card style={{ width: '17rem', marginBottom: '1rem', border: "2px solid black" }}>
                    <Card.Img style={{ objectFit: "cover" }} variant="top" src={mit} />
                    <Card.Body>
                      <Card.Title>Sports</Card.Title>

                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: '17rem', border: "2px solid black" }}>
                    <Card.Img style={{ objectFit: "contain", height: "8.5rem" }} variant="top" src={persona} />
                    <Card.Body>
                      <Card.Title>Persona</Card.Title>

                    </Card.Body>

                  </Card>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
}

export default Profile;