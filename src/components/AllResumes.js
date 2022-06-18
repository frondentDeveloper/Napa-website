import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";

const enhancer = connect(
  ({resumes: {allResumes, coverLetters, documents}}) =>
    ({allResumes, coverLetters, documents}));

const AllResumes = (props) => {


  return (
    <div className="all-resumes">
      <div className="main-title">All resumes</div>
      <div className="done-resumes">
        <Row>
          <Col md={3}>
            <div className="create-resume-card">
              <div className="add-resume-picture">
                <img src="./images/undraw_add.svg" alt="add resume"/>
              </div>
              <div className="new-resume-title"><p>New resume</p></div>
              <div className="new-resume-text">
                <p>Press the button bellow to add your new resume</p>
              </div>
              <Button className="custom-btn">Create</Button>
            </div>
          </Col>
          <Col md={3}>
            <img src="./images/image9.png" alt="resume"/>
          </Col>
          <Col md={3}>
            <img src="./images/image11.png" alt="resume"/>
          </Col>
          <Col md={3}>
            <img src="./images/resume.png" alt="resume"/>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <img src="./images/image11.png" alt="resume"/>
          </Col>
          <Col md={3}>
            <img src="./images/resume.png" alt="resume"/>
          </Col>
          <Col md={3}>
            <img src="./images/image9.png" alt="resume"/>
          </Col>
          <Col md={3}>
            <img src="./images/resume.png" alt="resume"/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default enhancer(AllResumes);