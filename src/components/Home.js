import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import RoutesPath from "../routes/routes";
import {Button, Form, Nav, Navbar, Row, Col, Dropdown} from "react-bootstrap";
import {v4 as uuidv4} from "uuid";
import {useFormik} from "formik";
import ContactUs from "./ContactUs";
import {connect, useDispatch} from "react-redux";
import {addSize, displayCircle, homeCircleVisible} from "../actions/careerAction";


const enhancer = connect((
  {
    auth: {initialValue},
    size: {size, scrollDown}
  }
) =>
  ({
    initialValue,
    size,
    scrollDown
  }));
let time = 0;

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [margin, setMargin] = useState(0);
  const {initialValue} = props;

  const [toggleMenu,setToggleMenu]=useState(false);

  const toggleNav =()=>{
    setToggleMenu(!toggleMenu)
  };
  const [screenWith, setScreenWith]=useState(window.innerWidth);
  useEffect(()=>{
    const changeWith=()=>{
      setScreenWith(window.innerWidth)
    };

    window.addEventListener('resize', changeWith)

  },[]);


  useEffect(() => {
    dispatch(displayCircle());
  }, []);

  const formik = useFormik({
    initialValues: {
      job: "",
      id: uuidv4()
    },
    onSubmit: values => {
      console.log('job-value', values);
    },
  });

  const onScroll = (event) => {
    clearTimeout(time);
    time = setTimeout(() => {
      if (event.deltaY < 0) {
        if (margin === 0) return;
        setMargin(margin + 100);
        dispatch(homeCircleVisible(margin + 100))

      }
      if (event.deltaY > 0) {
        if (margin === (-300)) return;
        setMargin(margin - 100);
        dispatch(homeCircleVisible(margin - 100))
      }
    }, 300)

  };

  return (
    <div className="home-wrapper" id="overflow-y-scroll" onWheel={onScroll}>
      <div className="main-home-page-box" style={{marginTop: `${margin}vh`, transition: "all 0.4s ease-in-out"}}>
        <div className={props.scrollDown === 0 ? "home-circle" : "home-circle-hide"}>
          <div className="logo">
            <div className="planshet-logo">
              <img src="./images/logo-white.svg" alt="logo"/>
            </div>
            <img src="./images/logo-white.svg" alt="logo"/>
          </div>
          {/*<div className="logo-title">*/}
          {/*  <img src="./images/by Napa.png" alt=""/>*/}
          {/*</div>*/}
        </div>
        <Navbar expand="lg" className={props.size !== 0 ? "bg-color" : ""}>
          <div className="regisration-button-planshet">
            {
              initialValue.firstNameInitialValue && initialValue.lastNameInitialValue !== ""
                  ?
                  <div className="AvatarPerson">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <div className="user-name-content" onClick={() => {
                          dispatch(addSize());
                          navigate("/info")
                        }}>

                          <div
                              className={initialValue.avatarInitialValue ? "bg-none" : "avatar-content"}>
                            {initialValue.avatarInitialValue ?
                                <img src={initialValue.avatarInitialValue} alt="user"/> : ""}
                            <i className={!initialValue.avatarInitialValue ? "icon-user" : "d-none"}/>
                          </div>
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                          dispatch(displayCircle());
                          dispatch(homeCircleVisible(-100));
                          navigate(RoutesPath.myResume)
                        }}> Profile </Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                          dispatch(displayCircle());
                          dispatch(homeCircleVisible(-100));
                          navigate(RoutesPath.myCv)
                        }}>My Resume</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                          dispatch(displayCircle());
                          dispatch(homeCircleVisible(-100));
                          navigate(RoutesPath.chatForFreelancer)
                        }}>Chat</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                          dispatch(displayCircle());
                          dispatch(homeCircleVisible(-100));
                          navigate(RoutesPath.chatForCompany)
                        }}>Chat-2</Dropdown.Item>
                        <Dropdown.Item>Log out</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  :
                  <div>
                    <Button className="custom-outline-btn" onClick={() =>{
                      dispatch(displayCircle());
                      navigate(RoutesPath.login)
                    }}>Log
                      in</Button>
                    <Button className="custom-outline-btn sign-btn"
                            onClick={() =>{
                              dispatch(displayCircle());
                              navigate(RoutesPath.login)
                            }}>Sign
                      up</Button>
                  </div>
            }
          </div>
          <div onClick={toggleNav} className=" btn hamburger-menu">
            <img className='burgermenu' src="./images/burgerMenu.png" alt=""/>
          </div>
          <div className="navbar-Desktop"  id="navbarScroll">
                  <div
                      className="ms-auto my-2 my-lg-0 navbar-nav"
                      style={{maxHeight: '100px'}}

                  >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link onClick={() => {
                      navigate(RoutesPath.talants)
                    }
                    } >Talants</Nav.Link>
                    <Nav.Link onClick={() => {
                      navigate(RoutesPath.postJop)
                    }
                    }>Post job</Nav.Link>
                    <Nav.Link onClick={() => {
                      dispatch(displayCircle());
                      navigate(RoutesPath.aboutUs)
                    }
                    }>About us</Nav.Link>
                    <Nav.Link href="#action2">Contact us</Nav.Link>
                  </div>
                  <div className="regisration-button">
                    {
                      initialValue.firstNameInitialValue && initialValue.lastNameInitialValue !== ""
                          ?
                          <div className="AvatarPerson">
                            <Dropdown>
                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <div className="user-name-content" onClick={() => {
                                  dispatch(addSize());
                                  navigate("/info")
                                }}>
                                  <p className="user-name">{initialValue.firstNameInitialValue}</p>
                                  <p className="user-name">{initialValue.lastNameInitialValue}</p>
                                  <div
                                      className={initialValue.avatarInitialValue ? "bg-none" : "avatar-content"}>
                                    {initialValue.avatarInitialValue ?
                                        <img src={initialValue.avatarInitialValue} alt="user"/> : ""}
                                    <i className={!initialValue.avatarInitialValue ? "icon-user" : "d-none"}/>
                                  </div>
                                </div>
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {
                                  dispatch(displayCircle());
                                  dispatch(homeCircleVisible(-100));
                                  navigate(RoutesPath.myResume)
                                }}> Profile </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                  dispatch(displayCircle());
                                  dispatch(homeCircleVisible(-100));
                                  navigate(RoutesPath.myCv)
                                }}>My Resume</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                  dispatch(displayCircle());
                                  dispatch(homeCircleVisible(-100));
                                  navigate(RoutesPath.chatForFreelancer)
                                }}>Chat</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                  dispatch(displayCircle());
                                  dispatch(homeCircleVisible(-100));
                                  navigate(RoutesPath.chatForCompany)
                                }}>Chat-2</Dropdown.Item>
                                <Dropdown.Item>Log out</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          :
                          <div>
                            <Button className="custom-outline-btn" onClick={() =>{
                              dispatch(displayCircle());
                              navigate(RoutesPath.login)
                            }}>Log in</Button>
                            <Button className="custom-outline-btn sign-btn"
                                    onClick={() =>{
                                      dispatch(displayCircle());
                                      navigate(RoutesPath.signUpPage)
                                    }}>Sign up</Button>
                          </div>
                    }
                  </div>
                </div>
        </Navbar>

          {(toggleMenu || screenWith >768) &&(
              <div className="sloy-manu">
              <div className="navbar-planshet"  id="navbarScroll">
                <div
                    className="ms-auto my-2 my-lg-0 navbar-nav"
                  >
                  <Nav.Link >
                      <img onClick={toggleNav} src="./images/planshet-prev.png" alt=""/>
                  </Nav.Link>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">Talants</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate(RoutesPath.postJop)
                  }
                  }>Post job</Nav.Link>
                  <Nav.Link onClick={() => {
                    dispatch(displayCircle());
                    navigate(RoutesPath.aboutUs)
                  }
                  }>About us</Nav.Link>
                  <Nav.Link href="#action2">Contact us</Nav.Link>  
                  <Nav.Link href="#action2">
                    <img src="./images/photo-comp.png" alt=""/>
                  </Nav.Link>
                </div>
              </div>
              </div>
          )}

        <div className="company-name-title">
          <h2>MY CAREER <p>- Powerful</p> Career <p>Platform</p></h2>
        </div>
        <div className="company-text">
          <p>Find your dream jobs in our powerful career platform.</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="search-job-form">
            <Form.Group>
              <Form.Control
                name="job"
                id={uuidv4()}
                onChange={formik.handleChange}
                value={formik.values.job}
                type="text"
                placeholder="Job title, keywords..."/>
            </Form.Group>
            <Button className="custom-btn">Search</Button>
          </div>
        </form>
        <div className={
            margin === 0 ? "pattern" : margin === -100
              ? "pattern search-talent-pattern" : margin === -200
                ? "pattern post-job-pattern" : "pattern contact-us-pattern"
          }>
          <img src="./images/white-ell1.svg" alt="pattern"/>
          <img src="./images/white-ell2.svg" alt="pattern"/>
          <img src="./images/white-ell3.svg" alt="pattern"/>
          <img src="./images/white-ell4.svg" alt="pattern"/>
          <img src="./images/white-ell5.svg" alt="pattern"/>
        </div>
      </div>

      <div className="search-talents-box">
        <Row>
          <Col md="6" className="left-column">
            <div className="talent-img-box">
              <img src="./images/search-talent.svg" alt="talent"/>
            </div>
            {/*<canvas id="c"/>*/}
            {/*<earth/>*/}
          </Col>
          <Col md="6" className="right-column">
            <div className="talent-info-box">
              <h2>Search talants!</h2>
              <div className="talent-description">
                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate
                deserunt eligendi
                officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam
                optio nostrum
                sit!
              </div>
              <div className="search-job-form">
                <Form.Group>
                  <Form.Control
                    name="job"
                    id={uuidv4()}
                    onChange={formik.handleChange}
                    value={formik.values.job}
                    type="text"
                    placeholder="Job title, keywords..."/>
                </Form.Group>
                <Button className="custom-btn">Search</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="post-job-box">
        <Row>
          <Col md="6" className="right-column">
            <div className="post-job-info-box">
              <h2>Post job!</h2>
              <div className="job-description ">
                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate
                deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex
                asperiores quisquam optio nostrum sit!
              </div>
              <div className="post-job">
                <Button className="custom-btn">Post</Button>
              </div>
            </div>
          </Col>
          <Col md="6" className="left-column">
            <div className="post-job-img-box">
              <img src="./images/post-job.png" alt="talent"/>
            </div>
          </Col>
        </Row>
      </div>
      <ContactUs/>

    </div>
  );
};

export default enhancer(Home);