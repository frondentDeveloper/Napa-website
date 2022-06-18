import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import RoutesPath from "../routes/routes";
import {Button, Dropdown, Nav, Navbar} from "react-bootstrap";
import {connect, useDispatch} from "react-redux";
import {addSize, displayCircle, homeCircleVisible} from "../actions/careerAction";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

const enhancer = connect((
    {
        auth: {initialValue, homeCircleVisible},
        size: {size}
    }
) =>
    ({
        initialValue,
        size
    }));

const AboutUs = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {initialValue} = props;

    useEffect(() => {
        dispatch(displayCircle());
        dispatch(homeCircleVisible());
    }, []);

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

    return (
        <div className="about-page" id="">
            <div className="about-page-box">
                <Navbar expand="lg">
                    <NavbarBrand>
                        <div className="logo">
                            <img src="./images/Logo-Blue-2.png" alt="logo"/>
                        </div>
                        <div className="logo-title">
                            {/*<img src="./images/by Napa.png" alt=""/>*/}
                        </div>
                    </NavbarBrand>

                    <div onClick={toggleNav} className=" btn hamburger-menu">
                        <img className='burgermenu' src="./images/burgerMenu.png" alt=""/>
                    </div>
                    <div className="navbar-Desktop" id="navbarScroll">
                        <div
                            className="ms-auto my-2 my-lg-0 navbar-nav"
                            style={{maxHeight: '100px'}}

                        >
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
                <div className="about-page-main-box">
                    <div className="about-box-left">
                        <div className="textAboutUs-mobile">
                            About us
                        </div>
                        <div className="about-video">
                            <video src="./images/videoForWork.mp4" controls width="500"></video>
                        </div>
                        <div className="about-box-right-planshet">

                            <div className="aboutUsText">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                richardson ad squid.

                                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate
                                deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex
                                asperiores quisquam optio nostrum sit!
                                The company offers services to improve the efficiency of other companies. With the
                                help of our
                            </div>
                            <div className="iconForAbout">
                                <img src="./images/iconTelegram.png" alt="pattern"/>
                                <img src="./images/iconFacebook.png" alt="pattern"/>
                                <img src="./images/iconInstagram.png" alt="pattern"/>
                            </div>
                        </div>
                    </div>
                    <div className="about-box-right">
                        <div className="textAboutUs">
                            About us
                        </div>
                        <div className="aboutUsText">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                            richardson ad squid.

                            Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate
                            deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex
                            asperiores quisquam optio nostrum sit!
                            The company offers services to improve the efficiency of other companies. With the
                            help of our
                        </div>
                        <div className="iconForAbout">
                            <img src="./images/iconTelegram.png" alt="pattern"/>
                            <img src="./images/iconFacebook.png" alt="pattern"/>
                            <img src="./images/iconInstagram.png" alt="pattern"/>
                        </div>
                    </div>
                    <div className="pattern2">
                        <img src="./images/white-ell1.svg" alt="pattern"/>
                        <img src="./images/white-ell2.svg" alt="pattern"/>
                        <img src="./images/white-ell3.svg" alt="pattern"/>
                        <img src="./images/white-ell4.svg" alt="pattern"/>
                        <img src="./images/white-ell5.svg" alt="pattern"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default enhancer(AboutUs);