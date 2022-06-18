import {React, useState} from 'react';
import {Navbar, Nav, NavDropdown, Row, Col, Button} from "react-bootstrap";
import CoverLetters from "./CoverLetters";
import Documents from "./Documents";
import AllResumes from "./AllResumes";
import {connect, useDispatch} from "react-redux";
import {showAllResumes, showCoverLetters, showDocuments} from "../actions/resumesAction";

const enhancer = connect(
  ({resumes: {allResumes, coverLetters, documents}}) =>
    ({allResumes, coverLetters, documents}), null);

const Resumes = (props) => {

  const dispatch = useDispatch()

  const [resumes, setResumes] = useState([
    {resumeStep: "Resumes", active: true},
    {resumeStep: "Cover Letters"},
    {resumeStep: "Documents"},
  ]);
  const [active, setActive] = useState(0)

  const setLeft = (id) => {
    setActive(id);
  }

  return (
    <div className="resumes-wrapper">
      <div className="resumes-header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"><img src="./images/logo.png" alt="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {
                resumes.map((btn, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLeft(idx)}
                    className="nav-link"
                  >
                    <i className="icon-file-text"/>
                    {btn.resumeStep}
                  </div>
                ))
              }
            </Nav>
            <Nav className="profile">
              <Nav.Link href="#">
                <NavDropdown title="Dilmurod Rahimov" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
                </NavDropdown>
                <i className="icon-chevron-down"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/*<div className="resumes-section" style={{ transform: `translate(${!active ? "0px" : `-${active}00vw`})`,*/}
      {/*width: `${resumes.length}00vw`*/}
      {/*}}>*/}
      {/*  <AllResumes/>*/}
      {/*  <CoverLetters/>*/}
      {/*  <Documents/>*/}
      {/*</div>*/}

      <div className="profile-settings">
        <div className="profile-settings-content">
          <div className="up-card-header">
            <Row>
              <Col>
                <div className="user-avatar">
                  <img src="./images/profile.png" alt="user"/>
                </div>
                <div className="user-identity">
                  <h2>Tyron Williams</h2>
                  <div className="user-location">
                    Tashkent, Uzbekistan – 5:40 pm local time
                  </div>
                </div>
              </Col>
              <Col>
                <Button className="custom-btn">something will be here</Button>
              </Col>
            </Row>
          </div>
          <div className="up-card-body">
            <Row>
              <Col md={4} className="up-left-sidebar">
                <h4 className="mb-4">Languages</h4>
                <p><strong>English:</strong> Conversational</p>
                <p><strong>Uzbek:</strong> Native or Bilingual</p>
                <p><strong>Turkish:</strong> Conversational</p>
                <h4 className="mt-5 mb-4">Education</h4>
                <p><strong>TATU:</strong> Bachelor</p>
                <p><strong>NAPA:</strong> Frontend</p>
              </Col>
              <Col className="up-right-sidebar">
                <Row>
                  <Col className="up-right-side-content">
                    <h2 className="mb-5">Javascript, React, React-Redux, HTML, CSS 3, Bootstrap, Git, Adobe Photoshop,
                      Figma</h2>
                    <p className="mb-4">Summary</p>
                    <p className="w-50">1 year of work experience in Frontend development Proficient
                      with HTML, CSS, JavaScript, ReactJS Hands on experience with
                      NuxtJS Adept and handling multiple tasks and learning new
                      programming languages quickly Utilized knowledge of software
                      version control systems and branched development environments
                      Experienced written and verbal communication skills (English,
                      Russian, Turkish, Uzbek)
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="up-right-side-content">
                    <h4>Work History</h4>
                    <p className="mb-0">No items</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="up-right-side-content">
                    <h4>Portfolio <Button variant="outline-info" className="ms-3">+ add</Button></h4>
                    <div className="portfolio mx-auto my-4">
                      <img src="./images/suitcase.png" className="img-fluid" alt="portfolio"/>
                    </div>
                    <p className="text-center">Showcase your work to win more projects</p>
                    <p className="mb-0 text-center"><a href="#">Add items to impress clients</a></p>
                  </Col>
                </Row>
                <Row>
                  <Col className="up-right-side-content border-0">
                    <h4>Skills</h4>
                    <p className="mb-0">No items</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default enhancer(Resumes);