import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import RoutesPath from "../routes/routes";
import {FormControl, InputGroup, Nav, Navbar} from "react-bootstrap";
import {connect, useDispatch} from "react-redux";
import {addSize, displayCircle, homeCircleVisible} from "../actions/careerAction";
import ProgressBar from "react-bootstrap/cjs/ProgressBar";
import Tabs from "react-bootstrap/cjs/Tabs";
import Tab from "bootstrap/js/src/tab";
import divWithClassName from "react-bootstrap/esm/divWithClassName";
import ReactPaginate from "react-paginate";
import {addAboutYourselfNewSkills, addEducation} from "../actions/appendActions";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import {useFormik} from "formik";
import moment from "moment";

const enhancer = connect(
    ({
         auth: {initialValue, savedWorkExperiences,addressInitialValue},
         append: {about, educations,skills}
     }) => ({
        initialValue,
        savedWorkExperiences,
        about,
        educations,
        skills,
        addressInitialValue,
    }), null);




const MyResume = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {initialValue, educations, skills, savedWorkExperiences, addressInitialValue, about} = props;
    const [more, setMore] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowForAvailableTimes, setModalShowForAvailableTimes] = useState(false);
    const [modalForEducation, setModalForEducation] = useState(false);
    const [modalForSkills, setModalForSkills] = useState(false);
    const [ModalShowForAddModal, setModalShowForAddModal] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const worksPage = 2;
    const pagesVisited = pageNumber * worksPage;

    useEffect(()=>{
        dispatch(displayCircle());
    },[]);

    const displayWorks = savedWorkExperiences.slice(pagesVisited, pagesVisited + worksPage).map((item) => {
        return <div>
            <div className="work-name">
                {item.companyName}
            </div>
            <div className="stars-for-level">
                <div className="for-icon">
                    <img src="./images/star-for-work.png" alt=""/>
                    <img src="./images/star-for-work.png" alt=""/>
                    <img src="./images/star-for-work.png" alt=""/>
                    <img src="./images/star-for-work.png" alt=""/>
                    <img src="./images/of-star-for-work.png" alt=""/>
                </div>
                <div className="for-text">
                    4.00
                </div>
                <div className="date-work">
                    {moment(item.startDate).format("MMMM YYYY")} -
                    {moment(item.endDate).format("MMMM YYYY")}
                </div>
            </div>
            <div className="about-work">
                {item.description}
            </div>
            <div className="price-work">
                $553.00
            </div>
            <div className="line-blue">

            </div>
        </div>
    });
    const pageCount = Math.ceil(savedWorkExperiences.length / worksPage);
    const changePage = ({selected}) => {
        setPageNumber(selected)
    };


    return (
        <div className="myResume" id="">
            <div onClick={() =>
            {
                dispatch(displayCircle());
                dispatch(homeCircleVisible(0));
                navigate(RoutesPath.home)
            }

            } className="forPrev">
                <img src="./images/my-resume-prev.png" alt=""/>
            </div>
            <div className="about-resume">
                <div className="resume-left">
                    <div className="avatar-person">
                        <div className="ForFlex">
                            <div className="avatar-photo">
                                <div className={initialValue.avatarInitialValue ? "bg-none" : "avatar-content"}>
                                    {initialValue.avatarInitialValue ?
                                        <img src={initialValue.avatarInitialValue} alt="user"/> : ""}
                                    <i className={!initialValue.avatarInitialValue ? "icon-user" : "d-none"}/>
                                </div>
                            </div>
                            <div className="person-name">
                                <div className="nameOne">
                                    <p className="user-name">{initialValue.firstNameInitialValue}</p>
                                    <p className="user-name">{initialValue.lastNameInitialValue.substring(0, 1)}</p>
                                </div>
                                <div className="persons-job">
                                    {initialValue.positionInitialValue}
                                </div>
                            </div>
                            <div className="progress-person">
                                <div className="pracentPerson">80%</div>
                                <div className="progressPerson">
                                    <ProgressBar now={80}/>
                                </div>
                                <div className="jobSuccess">
                                    job success
                                </div>
                            </div>
                        </div>
                        <div className="like-person">
                            <img src="./images/likePerson.png" alt=""/>
                            <div className="edit-profile">


                                <img onClick={() => setModalShow(true)} src="./images/edit-profile.png" alt=""/>

                                <Modal
                                    show={modalShow}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                           Edit About
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>
                                            About Me
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button>Save</Button>
                                        <Button onClick={() => setModalShow(false)}>Close</Button>
                                    </Modal.Footer>
                                </Modal>

                            </div>

                        </div>

                    </div>
                    <div className="line-blue-mobile">

                    </div>
                    <div className="box-for-planshet">
                        <div className="box-for-total">
                            <div className="totals">
                                $100+
                                <p>Total <br/>
                                    earnings</p>
                            </div>
                            <div className="totals">
                                100
                                <p>Total job</p>
                            </div>
                            <div className="totals">
                                100
                                <p>Total week</p>
                            </div>

                            <div className="verification">
                                <div className="text-verification">Verification</div>
                                <div className="icon-verification">
                                    <div className="tick">
                                        <img src="./images/Verification.png" alt=""/>
                                    </div>
                                    <div className="tick2">
                                        <img src="./images/bg-verification.png" alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="line-two-planshet">
                            <div className="link-projects">
                                <div className="text-name-projects">
                                    Link projects
                                </div>
                                <p> https://www.behance.net/micheldesigner</p>
                                <p> https://www.behance.net/micheldesigner</p>
                                <p> https://www.behance.net/micheldesigner</p>
                            </div>
                            <div className="available-times">
                                <div className="available-times-text">
                                    Available times
                                    <div className="edit-available">
                                        <img onClick={() => setModalShowForAvailableTimes(true)} src="./images/edit-profile.png" alt=""/>
                                        <Modal
                                            show={modalShowForAvailableTimes}
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="contained-modal-title-vcenter">
                                                    Edit Available Time
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p>
                                                    Available Time
                                                </p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button>Save</Button>
                                                <Button onClick={() => setModalShowForAvailableTimes(false)}>Close</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                                <div className="available-times-icon">
                                    <div className="text-available">
                                        50 <p>hours/week</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="text-about-me-planshet">
                        About me
                        <div className="edit-profile">

                            <img onClick={() => setModalShow(true)} src="./images/edit-profile.png" alt=""/>

                            <Modal
                                show={modalShow}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Edit About
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        About Me
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button>Save</Button>
                                    <Button onClick={() => setModalShow(false)}>Close</Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </div>
                    <div className={more ? "box-for-experience" : "box-for-experience2"}>
                        {about}
                    </div>
                    {
                        about.length > 200 ? <div onClick={() => (setMore(!more))} className="readMore">
                            {
                                more ? <p>
                                    less
                                </p> : <p>
                                    more ...
                                </p>
                            }


                        </div> : ""
                    }

                    <div className="box-for-planshet-two">
                        <div className="educations">
                            <div className="name-education">
                                <div className="text-name-education">
                                    Education
                                </div>
                                <div className="edit-educations">
                                    <img onClick={() => setModalForEducation(true)} src="./images/edit-profile.png" alt=""/>

                                    <Modal
                                        show={modalForEducation}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Edit Education
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>
                                                Education
                                            </p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button>Save</Button>
                                            <Button onClick={() => setModalForEducation(false)}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                            <div className="educations-text">
                                {educations.map((item) => {
                                    return <div className="main-text">
                                        <div className="text-educations">
                                            <div className="texts-item">{item.school},</div>
                                            <div className="texts-item">  {item.studyType}</div>
                                        </div>
                                        <div className="education-date">
                                            {item.startDate.toString().substring(11, 15)} -
                                            {item.endDate.toString().substring(11, 15)}
                                            {console.log(item.endDate.toString())}
                                        </div>

                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="line-two-planshet">
                            <div className="skills">
                                <div className="name-skills">
                                    <div className="text-name-skills">
                                        Skills
                                    </div>
                                    <div className="edit-skills">
                                        <img onClick={() => setModalForSkills(true)} src="./images/edit-profile.png" alt=""/>

                                        <Modal
                                            show={modalForSkills}
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="contained-modal-title-vcenter">
                                                    Edit Skills
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p>
                                                    Skills
                                                </p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button>Save</Button>
                                                <Button onClick={() => setModalForSkills(false)}>Close</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                                <div className="text-skills">
                                    {skills.map((item) => {
                                        return <div className="main-text">
                                            {item.label}
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="planshet-box">
                                <div className="location">
                                    <div className="for-location-icon">
                                        <div className="icon-for-location">
                                            <img src="./images/location.png" alt=""/>
                                        </div>
                                        <div className="text-location">
                                            {addressInitialValue.country}, {addressInitialValue.region} <br/>
                                            {addressInitialValue.street}
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-profile">
                                    <div className="since-member">
                                        Member since
                                        <p>Aug 27, 2013</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="add-video-box" >
                         <div onClick={() => setModalShowForAddModal(true)} className="add-video">
                            Add video projects+
                        </div>
                        <Modal
                            show={ModalShowForAddModal}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Add video projects+
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    Add video projects+
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button>Save</Button>
                                <Button onClick={() => setModalShowForAddModal(false)}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="line-blue">

                    </div>



                    <div className="workHistory">
                        <p>Work History</p>

                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title={"Completed jobs " + "  (" + savedWorkExperiences.length + ")"}>
                                {displayWorks}
                                <ReactPaginate
                                    previousLabel={<img src="./images/work-pagination-prev.png" alt=""/>}
                                    nextLabel={<img src="./images/work-pagination-next.png" alt=""/>}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledCalassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                            </Tab>
                            <Tab eventKey="profile" title="In progress (10)">
                                In Progress
                            </Tab>
                            <Tab eventKey="profile2" title="Industry of  work (10)">
                                Industry of  work
                            </Tab>
                        </Tabs>
                    </div>
                </div>


                <div className="resume-right">
                    <div className="view-profile">
                        View profile
                    </div>

                    <div className="line-blue">

                    </div>
                    <div className="box-for-total">
                        <div className="totals">
                            $100+
                            <p>Total <br/>
                                earnings</p>
                        </div>
                        <div className="totals">
                            100
                            <p>Total job</p>
                        </div>
                        <div className="totals">
                            100
                            <p>Total week</p>
                        </div>
                    </div>
                    <div className="line-blue">

                    </div>
                    <div className="available-times">
                        <div className="available-times-text">
                            Available times
                        </div>
                        <div className="available-times-icon">
                            <div className="text-available">
                                50 <p>hours/week</p>
                            </div>
                            <div className="edit-available">
                                <img onClick={() => setModalShowForAvailableTimes(true)} src="./images/edit-profile.png" alt=""/>
                                <Modal
                                    show={modalShowForAvailableTimes}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            Edit Available Time
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>
                                            Available Time
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button>Save</Button>
                                        <Button onClick={() => setModalShowForAvailableTimes(false)}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="link-projects">
                        <div className="text-name-projects">
                            Link projects
                        </div>
                        <p> https://www.behance.net/micheldesigner</p>
                        <p> https://www.behance.net/micheldesigner</p>
                        <p> https://www.behance.net/micheldesigner</p>
                    </div>
                    <div className="verification">
                        <div className="text-verification">Verification</div>
                        <div className="icon-verification">
                            <div className="tick">
                                <img src="./images/Verification.png" alt=""/>
                            </div>
                            <div className="tick2">
                                <img src="./images/bg-verification.png" alt=""/>
                            </div>
                        </div>

                    </div>
                    <div className="educations">
                        <div className="name-education">
                            <div className="text-name-education">
                                Education
                            </div>
                            <div className="edit-educations">
                                <img onClick={() => setModalForEducation(true)} src="./images/edit-profile.png" alt=""/>

                                <Modal
                                    show={modalForEducation}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            Edit Education
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>
                                            Education
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button>Save</Button>
                                        <Button onClick={() => setModalForEducation(false)}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                        <div className="educations-text">
                            {educations.map((item) => {
                                return <div className="main-text">
                                    <div className="text-educations">
                                       <div className="texts-item">{item.school},</div>
                                        <div className="texts-item">  {item.studyType}</div>
                                    </div>
                                  <div className="education-date">
                                      {item.startDate.toString().substring(11, 15)} -
                                      {item.endDate.toString().substring(11, 15)}
                                      {console.log(item.endDate.toString())}
                                  </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="skills">
                        <div className="name-skills">
                            <div className="text-name-skills">
                                Skills
                            </div>
                            <div className="edit-skills">
                                <img onClick={() => setModalForSkills(true)} src="./images/edit-profile.png" alt=""/>

                                <Modal
                                    show={modalForSkills}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            Edit Skills
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>
                                           Skills
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button>Save</Button>
                                        <Button onClick={() => setModalForSkills(false)}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                        <div className="text-skills">
                            {skills.map((item) => {
                                return <div className="main-text">
                                    {item.label}
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="location">
                        <div className="for-location-icon">
                            <div className="icon-for-location">
                                <img src="./images/location.png" alt=""/>
                            </div>
                            <div className="text-location">
                                {addressInitialValue.country}, {addressInitialValue.region} <br/>
                                {addressInitialValue.street}
                            </div>
                        </div>
                    </div>
                    <div className="footer-profile">
                        <div className="since-member">
                            Member since
                            <p>Aug 27, 2013</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default enhancer(MyResume);