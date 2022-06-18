import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import RoutesPath from "../routes/routes";
import {connect, useDispatch} from "react-redux";
import {addSize, displayCircle, homeCircleVisible, showResume} from "../actions/careerAction";


const enhancer = connect(
    ({
         addCompany: {initialValue},

     }) => ({
        initialValue
    }), null);


const ChatForFreelancer = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {initialValue} = props;


    useEffect(() => {
        dispatch(displayCircle());
    }, []);


    return (
        <div className="chat-for-company" id="">
            <div onClick={() => {
                dispatch(displayCircle());
                dispatch(homeCircleVisible(0));
                navigate(RoutesPath.home)
            }

            } className="forPrev">
                <img src="./images/my-resume-prev.png" alt=""/>
            </div>
            <div className="box-for-planshet">
                <div className="person-avatar">
                    <img src="./images/avatar5.png" alt=""/>
                </div>
                <div className="person-name">
                    <div className="name-person">
                        Michel R
                    </div>
                    <div className="degree-person">
                        Web-designer UI/UX
                    </div>
                </div>
                <div className="person-phone">
                    <img src="./images/icon-phone.png" alt=""/>
                </div>
            </div>

            <div className="body-chats">
                <div className="chat-box-left">
                    <div className="chat-box">
                        <div className="company-message-box">
                            <img src="./images/message-box.png" alt=""/>
                        </div>

                    </div>
                    <div className="send-message-box">
                        <div className="button-send-file">
                            <img src="./images/send-file.png" alt=""/>
                        </div>
                        <div className="button-send-text">
                            <input placeholder="Text massage" type="text"/>
                            <div className="box-icon-send">
                                <img src="./images/send-message.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chat-box-right">
                    <div className="box-top">
                        <div className="freelancer-name">
                            <div className="avatar-person">
                                <img src="./images/avatar5.png" alt=""/>
                            </div>
                            <div className="name-freelancer">
                                Michel R
                                <div className="name-two">
                                    Web-designer UI/UX
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="tittle-skills">
                                Skills
                            </div>
                          <div className="skill-person">
                              <p>Figma</p>
                              <p>Adobe Photoshop</p>
                              <p>Adobe XD</p>
                              <p>Adobe Illustrator</p>
                              <p>Sketch</p>
                              <p>HTML</p>
                              <p>CSS</p>
                          </div>
                        </div>
                        <div className="portfolio-person">
                            <div className="link-name-portfolio">
                                Portfolio
                            </div>
                           <div className="link-portfolio">
                               https://www.behance.net/micheldesigner
                           </div>
                        </div>
                        <div className="location-freelancer">
                            <div className="img-location">
                                <img src="./images/location.png" alt=""/>
                            </div>
                            <p>Tashkent, Unusabad <br/>
                                3-street 23</p>
                        </div>
                    </div>
                    <div className="box-bottom">

                        <div className="phone-company">
                            <div className="member-since">
                                <div className="title-since">
                                    Member since
                                </div>
                                Aug 27, 2013
                            </div>
                            <div className="contact-company">
                                <img src="./images/icon-grome.png" alt=""/>
                                <img src="./images/icon-phone.png" alt=""/>
                            </div>
                        </div>

                    </div>



                </div>

            </div>

        </div>
    );
};

export default enhancer(ChatForFreelancer);